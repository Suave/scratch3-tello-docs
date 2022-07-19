---
title: 環境構築
weight: 10
---

# 環境構築
`scratch3-tello` リポジトリには `scratch-vm` と `scratch-gui` リポジトリに対して変更を行った差分がファイル単位で格納されています。そのため、このリポジトリをクローンしただけではビルドすることができません。

## Requirements
- wget
- git
- node.js
- npm

## 作業用フォルダの作成
```bash
$ mkdir scratch3-tello
$ cd scratch3-tello
```

## 環境構築用スクリプトをダウンロードする
```bash
$ wget https://raw.githubusercontent.com/kebhr/scratch3-tello/master/build.sh
$ chmod +x build.sh
```

## 環境構築用スクリプトを実行する
```bash
$ ./build.sh
```
`build.sh` を実行することで、自動的に `scratch-vm`, `scratch-gui`, `scratch-desktop` がクローンされ、`scratch3-tello` で管理されている差分のファイルが適用されます。

## Scratch3-Tello の起動
```bash
$ cd scratch-desktop
$ npm start
```

## パッケージを作成
```bash
$ cd scratch-desktop
$ npm run dist
```