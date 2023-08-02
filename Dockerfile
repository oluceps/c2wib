FROM emscripten/emsdk:3.1.24

RUN DEBIAN_FRONTEND=noninteractive apt --no-install-recommends -qy update && \
    DEBIAN_FRONTEND=noninteractive apt --no-install-recommends -qy install \
    docker.io \
    pkg-config \
    ninja-build \
    jq \
    brotli \
    autoconf \
    autoconf-archive \
    automake \
    zlib1g-dev

ENV PATH="${EMSDK}/upstream/bin:${PATH}"

RUN mkdir -p /.npm && chmod a+rwx /.npm

RUN npm install -g pnpm
