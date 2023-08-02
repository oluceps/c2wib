# Compile to wasm in browser

This project based on [emception](https://github.com/jprendes/emception/tree/master), [emscripten](https://emscripten.org) and [LLVM](https://llvm.org/).





https://github.com/oluceps/c2wib/assets/35628088/00352953-104c-4a26-97d5-5e28b84db54d





# Demo

https://demo.nyaw.xyz

Upload [example](./examples/bootstrap) and try compile in the browser.


Tested with:

Mozilla Firefox 115.0.2  
Chromium 115.0.5790.110

# Build

```console
$ ./build.sh
$ pnpm build
```

## build with docker
```
$  docker buildx build . -t ctwib_build
$  docker run \
    -it --rm \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v $(pwd):$(pwd) \
    -v $(pwd)/emception/build/emsdk_cache:/emception/emsdk/upstream/emscripten/cache \
    -u $(id -u):$(id -g) \
    $(id -G | tr ' ' '\n' | xargs -I{} echo --group-add {}) \
    ctwib_build:latest \
    bash -c "pushd $(pwd)/emception && ./build.sh && popd && pnpm build"
```

# Serve
```console
$ pnpm dev
```

# License
[MIT](./LICENSE) © 2023 eunomia-bpf 
