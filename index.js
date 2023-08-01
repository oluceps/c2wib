import { Terminal } from "xterm";
import { FitAddon } from 'xterm-addon-fit';

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



async function main() {
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
  <button onclick="handleFileUpload()">Upload source (header) file</button>
  <div id="fileList"></div>

                <button disabled id="download">Download Wasm</button>
            </div>
        </div>
    `, document.body);

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
  const uploadFile = document.getElementById("upload");
  const downloadWasm = document.getElementById("download")
  const fileList = document.getElementById("fileList")
  compile.addEventListener("click", async () => {
    compile.disabled = true;
    compile.textContent = "Compiling";
    status.textContent = "Running:";
    try {
      terminal.reset();

      await emception.fileSystem.writeFile("/working/bootstrap.c", "test");

      const cmd = `emcc ${flagsStr} bootstrap.c -o bootstrap.wasm`;
      onprocessstart(`/emscripten/${cmd}`.split(/\s+/g));
      terminal.write(`$ ${cmd}\n\n`);
      const result = await emception.run(cmd);
      terminal.write("\n");
      if (result.returncode == 0) {
        terminal.write("Compilation finished");
      } else {
        terminal.write(`Compilation failed`);
      }
      terminal.write("\n");
    } catch (err) {
      console.error(err);
    } finally {
      status.textContent = "Iddle";
      statusElements.splice(0, statusElements.length);
      compile.textContent = "Compile!";
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
  compile.textContent = "Compile!";
}

main();


