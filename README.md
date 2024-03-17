# OP Office Booking Enhancement Suite <!-- omit in toc -->

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
  - [Basic use](#basic-use)
  - [Extension menu](#extension-menu)
  - [Enhancements](#enhancements)
- [Download and Install](#download-and-install)
- [Notes](#notes)

## Description

This chrome extension add quality of life changes to the Omegapoint Office Booking site.
This is achieved by injecting JavaScript into the webpage.

The extension is written for Google Chrome using manifest version 3, and the file structure
is as follows:

```
op-office-booking-screen-enhancement-suite/
├── images/
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   ├── icon128.png
│   └── thumbnail.png
├── applyNoZoom.js ............... Disable zoom and show whole office at once
├── applyLargeMap.js ............. Increase size of the office map
├── applyDefaultDay.js ........... Set default day to next workday
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
   `op-office-booking-enhancement-suite`) to install the extension.

## Usage

### Basic use

When installed, the extension enhancements are enabled by default.

### Extension menu

By opening the extension menu by clicking on the extension in the upper right corner of your
browser, it is possible to toggle the extension functionalities on or off. When turned off,
nothing will happen when opening the office booking website.

![Image of extension menu](/images/thumbnail.png)

### Enhancements

- **Disable zooming:** Disables the zoom functionality and shows all available seats in the
  office at once.
- **Larger map:** Makes the office map a little larger. (May be unstable on smaller screens)
- **Default to next workday:** Automatically select the next workday when loading the page.

## Download and Install

The extension can be downloaded from the
[releases page](https://github.com/haakon8855/op-office-booking-enhancement-suite/releases/).

To install the extension, one must turn on developer mode in Google Chrome and load the extension
as an unpacked extension:

1. Unzip the downloaded extension. As we will be loading the extension manually it does not matter
   where you put it, so long as it is not deleted.
2. Go to the Extensions page by entering `chrome://extensions` in a new tab.  
   (Or, click the Chrome menu, hover over More Tools, then select Extensions.)
3. Enable *Developer Mode* by clicking the toggle switch next to Developer mode.
4. Click the *Load unpacked* button and select the extension directory

## Notes

This extension borrows code from the chrome extension [OverleafRelativeLineNumbers](https://github.com/haakon8855/overleafRelativeLineNumbers).
