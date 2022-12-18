---
title: 環境構築
weight: 10
---

# 環境構築
`scratch3-tello` リポジトリには `scratch-vm` と `scratch-gui` リポジトリに対する差分がファイル単位で格納されています。そのため、scratch3-telloをビルドするためには、`scratch-vm` と `scratch-gui` をクローンしてから、差分を適用する必要があります。

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
`build.sh` を実行することで、自動的に `scratch-vm`, `scratch-gui`, `scratch-desktop` がクローンされ、`scratch3-tello` で管理されている変更差分が適用されます。

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