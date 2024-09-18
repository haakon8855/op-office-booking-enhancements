# OP Office Booking Enhancements <!-- omit in toc -->

- [Description](#description)
  - [File structure](#file-structure)
- [Download and Installation](#download-and-installation)
  - [Firefox](#firefox)
  - [Chromium](#chromium)
- [Usage](#usage)
  - [Basic use](#basic-use)
  - [Extension menu](#extension-menu)
  - [Enhancements](#enhancements)
- [Notes](#notes)

## Description

This browser extension adds some quality of life changes to the Omegapoint Office Booking site.
This is achieved by just injecting JavaScript into the webpage.

The extension is written for Firefox (manifest v2), and has an older version with fewer features
for Chromium browsers (manifest v3).

### File structure

```text
op-office-booking-screen-enhancement-suite/
├── images/
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   ├── icon128.png
│   └── thumbnail.png
├── enhancements/
│   └── applyDefaultDay.js ....... Set default day to next workday
│   └── applyKeybinds.js ......... Add keyboard hotkeys for dialog navigation
│   └── applyLargeMap.js ......... Increase size of the office map
│   └── applyNameTags.js ......... Show name tags next to booked spots
│   └── applyNoZoom.js ........... Disable zoom and show whole office at once
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

__Disclaimer:__ This extension is not verified by the Chrome Web Store. To run this extension in
Chromium browsers, developer mode must be enabled.
Continue at your own risk.

The extension can be downloaded from the
[releases page](https://github.com/haakon8855/op-office-booking-enhancement-suite/releases/).

### Firefox

__Important:__ If you want to develop the firefox version of the extension or load the extension unpacked, you will need to have either Firefox Dev Edition or Firefox Nightly.

1. Download the .xpi file containing the extension via the link above
2. If you did so in Firefox, it should ask for installation permission
3. If not, you can download it manually and drag the file into firefox and it should install.

### Chromium

1. Download the .zip containing the extension via the link above
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

- __Default to next workday:__ Automatically select the next workday when loading the page.
- __Keybinds:__ Adds a few keybinds to navigate dialogs easier. Esc to close and space to confirm dialogs.
- __Larger map:__ Makes the office map a little larger. (May be unstable on smaller screens)
- __Name tags:__ Adds name tags next to booked spots so you can check who are coming in to the office tomorrow! (This one has a few bugs)
- __Disable zooming:__ Disables the zoom functionality and shows all available seats in the
  office at once.

## Notes

This extension borrows code from the chrome extension [OverleafRelativeLineNumbers](https://github.com/haakon8855/overleafRelativeLineNumbers).
