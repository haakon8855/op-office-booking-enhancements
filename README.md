# OP Office Booking Enhancements Chrome Extension <!-- omit in toc -->

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
  - [Basic use](#basic-use)
  - [Extension menu](#extension-menu)
- [Download](#download)
- [Notes](#notes)

## Description

This chrome extension add quality of life changes to the Omegapoint Office Booking site.
This is achieved by injecting JavaScript into the webpage.

The extension is written for Google Chrome using manifest version 3, and the file structure
is as follows:

```
op-office-booking-screen-enhancements/
├── images/
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   ├── icon128.png
│   └── thumbnail.png
├── applyNoZoom.js ................... Disable zoom code to be injected into dashboard # TODO
├── applyDefaultDay.js ................ Set default day to next workday
├── background.js ................ Runs when extension is installed
├── button.css ................... Styling of extension menu
├── inject.js .................... Code used to inject applyNoZoom.js and applyDefaultDay.js
├── manifest.json ................ Chrome Extension Manifest File
├── popup.html ................... HTML of extension menu
├── popup.js ..................... Code of extension menu
├── LICENSE ...................... License
└── README.md .................... Readme
```

## Installation

1. Download the .zip containing the extension via the link below
2. Extract the zipped extension to any folder
3. Open Google Chrome and click on the extensions menu in the upper right (puzzle piece button)
4. At the bottom, click on _Manage extensions_
5. In the newly opened _Extensions_ tab, activate _Developer Mode_ in the upper right.
   A new menu will appear at the top of the screen.
6. Click on _Load unpacked_ at the top and navigate to the location you extracted the extension to.
7. Finally, select the folder containing `manifest.json` (most likely the folder named
   `op-office-booking-enhancements`) to install the extension.

## Usage

### Basic use

When installed, the extension enhancements are enabled by default.

### Extension menu

By opening the extension menu by clicking on the extension in the upper right corner of your
browser, it is possible to toggle the extension functionalities on or off. When turned off,
nothing will happen when opening the office booking website.

TODO: add enhancements

TODO: update image
![Image of extension menu](/images/thumbnail.png)

## Download

TODO: create release
The extension can be downloaded from the [release page]().

## Notes

This extension borrows code from the chrome extension [OverleafRelativeLineNumbers](https://github.com/haakon8855/overleafRelativeLineNumbers).
