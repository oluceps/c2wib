import { Terminal } from "xterm";
import { FitAddon } from 'xterm-addon-fit';
import { libbpfWasmHeaderStr } from './libbpf-wasm-file.js';

import { render, html } from "lit";

import * as Comlink from "comlink";
import EmceptionWorker from "./emception.worker.js";

import "xterm/css/xterm.css";

const emception = Comlink.wrap(new EmceptionWorker());
window.emception = emception;
window.Comlink = Comlink;


// init terminal
const terminalContainer = document.createElement("div");

const terminal = new Terminal({
  convertEol: true,
  theme: {
    background: "#1e1e1e",
    foreground: "#d4d4d4",
  },
});

terminal.open(terminalContainer);
const terminalFitAddon = new FitAddon();
terminal.loadAddon(terminalFitAddon);

window.terminal = terminal;



emception.onstdout = Comlink.proxy((str) => terminal.write(str + "\n"));
emception.onstderr = Comlink.proxy((str) => terminal.write(str + "\n"));

class FileStorage {
  constructor() {
    this.files = [];
  }

  addFile(file) {
    this.files.push(file);
  }

  getFileNames() {
    return this.files.map(file => file.name);
  }

  getFileContent(fileName) {
    const file = this.files.find(file => file.name === fileName);
    if (file) {
      const reader = new FileReader();

      return new Promise((resolve, reject) => {
        reader.onload = function(event) {
          resolve(event.target.result);
        };
        reader.onerror = function(error) {
          reject(error);
        };

        reader.readAsText(file);
      });
    } else {
      return Promise.reject(new Error("File not found."));
    }
  }

  async writeToVirtualFS() {
    const fileNames = this.getFileNames();
    for (let i = 0; i < fileNames.length; i++) {
      let perName = fileNames[i];
      let perCtx = await this.getFileContent(perName);

      await emception.fileSystem.writeFile(`/working/${perName}`, perCtx);
    }
  }

  getRealName() {
    const fileNames = this.getFileNames();
    return fileNames[0].split(".")[0];
  }
}




async function main() {
  const fileStorage = new FileStorage();
  render(html`
        <div id="layout">
            <div id="header">
                <div id="title">wasm compile tiny demo</div>
                <button disabled id="compile">Loading</button>
            </div>
            <div id="output">
                <div id="terminal">
                    ${terminalContainer}
                </div>
                <div id="status"></div>
                <input type="file" id="fileInput" multiple />
                <button id="uploadButton">Upload source (header) Files</button>
                <div id="fileList"></div>

                <button id="downloadButton">Download Wasm</button>

            </div>
        </div>
    `, document.body);

  document.getElementById("uploadButton").addEventListener("click", handleFileUpload);

  const fileInput = document.getElementById("fileInput");
  const fileList = document.getElementById("fileList");

  function handleFileUpload() {
    if (fileInput.files.length === 0) {
      alert("select file to upload.");
      return;
    }

    fileList.innerHTML = "";

    for (let i = 0; i < fileInput.files.length; i++) {
      const file = fileInput.files[i];
      const listItem = document.createElement("div");
      listItem.textContent = file.name;
      fileList.appendChild(listItem);
      fileStorage.addFile(file);
    }
  }

  const flagsStr = "-O2 -g -Wl,--allow-undefined -sERROR_ON_UNDEFINED_SYMBOLS=0";

  const status = document.getElementById("status");
  const statusElements = [];
  const onprocessstart = (argv) => {
    const lastEl = statusElements[statusElements.length - 1] || status;
    const newEl = document.createElement("div");
    newEl.className = "process-status";
    render(html`
            <div class="process-argv" title=${argv.join(" ")}>${argv.join(" ")}</div>
        `, newEl);
    statusElements.push(newEl);
    lastEl.appendChild(newEl);

    terminalFitAddon.fit();
    requestAnimationFrame(() => {
      terminalFitAddon.fit();
    });
  };
  const onprocessend = () => {
    const lastEl = statusElements.pop();
    if (lastEl) lastEl.remove();

    terminalFitAddon.fit();
    requestAnimationFrame(() => {
      terminalFitAddon.fit();
    });
  };
  emception.onprocessstart = Comlink.proxy(onprocessstart);
  emception.onprocessend = Comlink.proxy(onprocessend);


  const compile = document.getElementById("compile");

  compile.addEventListener("click", async () => {
    compile.disabled = true;
    compile.textContent = "Compiling";
    status.textContent = "Running:";
    try {
      terminal.reset();

      await emception.fileSystem.writeFile("/working/libbpf-wasm.h", atob(libbpfWasmHeaderStr));

      await fileStorage.writeToVirtualFS();

      const cmd = `emcc ${flagsStr} bootstrap.c -o main.wasm`;
      onprocessstart(`/emscripten/${cmd}`.split(/\s+/g));
      terminal.write(`$ ${cmd}\n\n`);
      const result = await emception.run(cmd);
      terminal.write("\n");
      if (result.returncode == 0) {
        terminal.write("Compilation finished");

        const content = await emception.fileSystem.readFile("/working/main.wasm");
        var fileName = fileStorage.getRealName();

        const downloadButton = document.getElementById('downloadButton');

        downloadButton.addEventListener('click', () => {
          const blob = new Blob([content], { type: 'application/wasm' });
          const url = URL.createObjectURL(blob);
          const virtualLink = document.createElement('a');
          virtualLink.href = url;
          virtualLink.download = fileName; 
          virtualLink.click();

          URL.revokeObjectURL(url);
        });

      } else {
        terminal.write(`Compilation failed`);
      }
      terminal.write("\n");
    } catch (err) {
      console.error(err);
    } finally {
      status.textContent = "Iddle";
      statusElements.splice(0, statusElements.length);
      compile.textContent = "Compile";
      compile.disabled = false;
    }
  });


  terminal.write("Loading...\n");
  status.textContent = "Loading...";

  await emception.init();

  terminal.reset();
  terminal.write("Ready\n");

  status.textContent = "Iddle";
  compile.disabled = false;
  compile.textContent = "Compile";
}

main();


