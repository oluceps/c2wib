#!/usr/bin/env bash

git clone https://github.com/jprendes/emception.git
pushd emception
git reset --hard da323f97400492fcfdaef2dd7eaf3868f60c26b4
. ./build-with-docker.sh
popd

pnpm build
echo "Finish."
