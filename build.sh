#!/usr/bin/env bash

git clone https://github.com/jprendes/emception.git
git reset --hard da323f97400492fcfdaef2dd7eaf3868f60c26b4

pushd ./emception
. ./build-with-docker.sh
popd
echo "Finish."
