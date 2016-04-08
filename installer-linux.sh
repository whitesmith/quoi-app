#!/bin/bash

echo '#### Removing old dists ####'
rm -rf ./dist/Quoi-linux-ia32
mkdir -p ./dist/Quoi-linux-ia32
rm -rf ./dist/Quoi-linux-x64
mkdir -p ./dist/Quoi-linux-x64

cd releases
echo '#### Compressing linux ia32 ####'
tar -zcvf ../dist/Quoi-linux-ia32/Quoi-linux-ia32.tar.gz ./Quoi-linux-ia32
echo '#### Compressing linux x64 ####'
tar -zcvf ../dist/Quoi-linux-x64/Quoi-linux-x64.tar.gz ./Quoi-linux-x64
