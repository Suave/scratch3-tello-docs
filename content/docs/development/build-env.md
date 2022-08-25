---
title: Build Environment
weight: 10
---

# Build Environment
The `scratch3-tello` repository contains the diffs between the `scratch-vm` and `scratch-gui` repositories in file units. Therefore, you cannot just clone this repository and build it.

## Requirements
- wget
- git
- node.js
- npm

## Create a working folder
```bash
$ mkdir scratch3-tello
$ cd scratch3-tello
```

## Download the script to build an environment
```bash
$ wget https://raw.githubusercontent.com/kebhr/scratch3-tello/master/build.sh
$ chmod +x build.sh
```

## Run the script to build an environment
```bash
$ ./build.sh
```

Running `build.sh` will automatically clone `scratch-vm`, `scratch-gui`, and `scratch-desktop` and apply the diffs files managed by `scratch3-tello` repository.

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
