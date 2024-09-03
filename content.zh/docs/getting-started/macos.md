---
title: macOS系统
weight: 20
bookToc: false
---

# macOS系统

## 下载
前往GitHub上的[Releases](https://github.com/kebhr/scratch3-tello/releases)页面,下载名为`macos.zip`的文件。

## 解压
将下载的zip文件解压到您选择的位置。

## 启动
**在连接到Tello后**,启动解压后文件夹中包含的`Scratch-Tello.app`。

仅在第一次使用时,由于macOS的安全功能,无法通过双击打开应用程序。
您可以通过按住Control键,点击文件,然后从出现的菜单中选择"打开"来打开文件。

![在macOS上启动](/images/macos_launch.png)

启动后,按左下角的扩展按钮,点击标有"Tello"的扩展。将出现用于编程Tello的积木块。

## 故障排除

如果执行`起飞`积木块后Tello没有起飞,可能是因为另一个积木块发送的命令正在等待执行。执行"清除等待执行的命令"积木块可以解决这个问题。