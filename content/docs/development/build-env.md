---
title: Build Environment
weight: 10
---

# Build Environment
The `scratch3-tello` repository contains diffs for `scratch-vm` and `scratch-gui` repositories in file units. Therefore, to build scratch3-tello, you need to clone `scratch-vm` and `scratch-gui` and then apply diffs.

## Requirements
- wget
- git
- node.js
- npm

## Create a working directory
```bash
$ mkdir scratch3-tello
$ cd scratch3-tello
```

## Download the script to make an environment
```bash
$ wget https://raw.githubusercontent.com/kebhr/scratch3-tello/master/build.sh
$ chmod +x build.sh
```

## Run the script to make an environment to build scratch3-tello
```bash
$ ./build.sh
```

Running `build.sh` will automatically clone `scratch-vm`, `scratch-gui`, and `scratch-desktop` and apply diffs files managed by `scratch3-tello` repository.

## Start Scratch3-Tello
```bash
$ cd scratch-desktop
$ npm start
```

## Make package
```bash
$ cd scratch-desktop
$ npm run dist:dir
```
