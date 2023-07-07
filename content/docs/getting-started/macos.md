---
title: For macOS
weight: 20
bookToc: false
---

# For macOS

## Download
Go to [Releases](https://github.com/kebhr/scratch3-tello/releases) on GitHub and download the file named `macos.zip`.  

## Extract
Extract the downloaded zip file to a location of your choice.

## Launch
**After connecting to Tello**, launch `Scratch-Tello.app`, which is contained in the extracted folder.

For the first time only, due to a security feature of macOS, the application cannot be opened by double-clicking.
You can open the file by holding down the Control key, clicking on the file, and selecting "Open" from the menu that appears.

![launch on macOS](/images/macos_launch.png)

When launched, press the Extensions button in the lower left corner and click on the extension labeled "Tello". A block for programming Tello will appear.

## Troubleshooting

If Tello does not take off after executing the `takeoff` block, it is possible that a command sent by another block is waiting to be executed. Executing the "Clear command waiting to be executed" block will solve the problem.