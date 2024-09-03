---
title: 构建环境
weight: 10
---

# 构建环境
`scratch3-tello`仓库包含了`scratch-vm`和`scratch-gui`仓库的文件级差异。因此,要构建scratch3-tello,您需要克隆`scratch-vm`和`scratch-gui`,然后应用这些差异。

## 要求
- wget
- git
- node.js
- npm

## 创建工作目录
```bash
$ mkdir scratch3-tello
$ cd scratch3-tello
```

## 下载脚本以创建环境
```bash
$ wget https://raw.githubusercontent.com/kebhr/scratch3-tello/master/build.sh
$ chmod +x build.sh
```

## 运行脚本以创建构建scratch3-tello的环境
```bash
$ ./build.sh
```

## 运行`build.sh`将自动克隆`scratch-vm`、`scratch-gui`和`scratch-desktop`,并应用`scratch3-tello`仓库管理的差异文件。

## 启动Scratch3-Tello
```bash
$ cd scratch-desktop
$ npm start
```

## 制作安装包
```bash
$ cd scratch-desktop
$ npm run dist:dir
```
