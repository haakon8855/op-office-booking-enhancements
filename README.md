# OP Office Booking Enhancement Suite <!-- omit in toc -->

- [Description](#description)
- [Download and Installation](#download-and-installation)
  - [Chromium](#chromium)
  - [Firefox](#firefox)
- [Usage](#usage)
  - [Basic use](#basic-use)
  - [Extension menu](#extension-menu)
  - [Enhancements](#enhancements)
- [Notes](#notes)

## Description

This browser extension add quality of life changes to the Omegapoint Office Booking site.
This is achieved by injecting JavaScript into the webpage.

The extension is written for Chromium (manifest v3) and Firefox (manifest v2),
and the file structure is as follows:

```text
op-office-booking-screen-enhancement-suite/
├── images/
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   ├── icon128.png
│   └── thumbnail.png
├── enhancements/
│   └── applyNoZoom.js ........... Disable zoom and show whole office at once
│   └── applyLargeMap.js ......... Increase size of the office map
│   └── applyDefaultDay.js ....... Set default day to next workday
├── background.js ................ Runs when extension is installed
├── button.css ................... Styling of extension menu
├── inject.js .................... Code used to inject applyNoZoom.js and applyDefaultDay.js
├── manifest.json ................ Browser extension manifest file
├── popup.html ................... HTML of extension menu
├── popup.js ..................... Code of extension menu
├── LICENSE ...................... License
└── README.md .................... Readme
```

## Download and Installation

__Disclaimer:__ This extension is not verified by the Chrome Web Store or Firefox Addons,
continue at your own risk.

The extension can be downloaded from the
[releases page](https://github.com/haakon8855/op-office-booking-enhancement-suite/releases/).

### Chromium

1. Download the .zip containing the extension via the link below
2. Extract the zipped extension to any folder
3. Open Google Chrome and click on the extensions menu in the upper right (puzzle piece button)
4. At the bottom, click on _Manage extensions_
5. In the newly opened _Extensions_ tab, activate _Developer Mode_ in the upper right.
   A new menu will appear at the top of the screen.
6. Click on _Load unpacked_ at the top and navigate to the location you extracted the extension to.
7. Finally, select the folder containing `manifest.json` (most likely the folder named
   `op-office-booking-enhancement-suite`) to install the extension.

### Firefox

__Important:__ To load custom extension in Firefox, you will need to have either
Firefox Dev Edition or Firefox Nightly.

1. Download the .zip containing the extension via the link below
2. Open Firefox (Nightly or Dev) and enter `about:config` in the URL field.
3. Search for `xpinstall.signatures.required` and set it to `false`. This enables you to install
   unverified extensions.
4. Navigate to `about:addons` and drag-and-drop the zipped extension into the addons menu.
   You shold be prompted with a box asking you to verify if you want to continue the installation
   or not. When you click allow, you are good to go.

## Usage

### Basic use

When installed, the extension enhancements are enabled by default.

### Extension menu

By opening the extension menu by clicking on the extension in the upper right corner of your
browser, it is possible to toggle the extension functionalities on or off. When turned off,
nothing will happen when opening the office booking website.

![Image of extension menu](/images/thumbnail.png)

### Enhancements

- __Disable zooming:__ Disables the zoom functionality and shows all available seats in the
  office at once.
- __Larger map:__ Makes the office map a little larger. (May be unstable on smaller screens)
- __Default to next workday:__ Automatically select the next workday when loading the page.

## Notes

This extension borrows code from the chrome extension [OverleafRelativeLineNumbers](https://github.com/haakon8855/overleafRelativeLineNumbers).
