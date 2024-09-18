const toggleButtonNoZoom = document.getElementById("toggleNoZoom");
const sliderNoZoom = document.getElementById("sliderElemNoZoom");

const toggleButtonLargeMap = document.getElementById("toggleLargeMap");
const sliderLargeMap = document.getElementById("sliderElemLargeMap");

const toggleButtonDefaultDay = document.getElementById(
  "toggleEnableDefaultDay"
);
const sliderDefaultDay = document.getElementById("sliderElemDefaultDay");

const toggleButtonKeybinds = document.getElementById("toggleEnableKeybinds");
const sliderKeybinds = document.getElementById("sliderElemKeybinds");

const updateSliderNoZoom = (enableNoZoom) => {
  // Update the state of the no zoom slider button
  toggleButtonNoZoom.checked = enableNoZoom;
};

const updateSliderLargeMap = (enableLargeMap) => {
  // Update the state of the no zoom slider button
  toggleButtonLargeMap.checked = enableLargeMap;
};

const updateSliderDefaultDay = (enableDefaultDay) => {
  // Update the state of the DefaultDay slider button
  toggleButtonDefaultDay.checked = enableDefaultDay;
};

const updateSliderKeybinds = (enableKeybinds) => {
  // Update the state of the Keybinds slider button
  toggleButtonKeybinds.checked = enableKeybinds;
};

// Set the slider buttons to the states stored in storage
browser.storage.sync.get("enableNoZoom", ({ enableNoZoom }) => {
  updateSliderNoZoom(enableNoZoom);
});
browser.storage.sync.get("enableLargeMap", ({ enableLargeMap }) => {
  updateSliderLargeMap(enableLargeMap);
});
browser.storage.sync.get("enableDefaultDay", ({ enableDefaultDay }) => {
  updateSliderDefaultDay(enableDefaultDay);
});
browser.storage.sync.get("enableKeybinds", ({ enableKeybinds }) => {
  updateSliderKeybinds(enableKeybinds);
});

// Add the transition animation after correct state has been set.
// For some reason it did not work by simply adding the class right away.
// A small delay was therefore added.
setTimeout(() => {
  sliderNoZoom.classList.add("sliderAnim");
  sliderLargeMap.classList.add("sliderAnim");
  sliderDefaultDay.classList.add("sliderAnim");
  sliderKeybinds.classList.add("sliderAnim");
}, 100);

// Add the event listener to the slider checkbox in order to store the updated
// state in storage.
toggleButtonNoZoom.addEventListener("click", async () => {
  browser.storage.sync.get("enableNoZoom", ({ enableNoZoom }) => {
    enableNoZoom = !enableNoZoom;
    browser.storage.sync.set({ enableNoZoom });
    updateSliderNoZoom(enableNoZoom);
  });
});
toggleButtonLargeMap.addEventListener("click", async () => {
  browser.storage.sync.get("enableLargeMap", ({ enableLargeMap }) => {
    enableLargeMap = !enableLargeMap;
    browser.storage.sync.set({ enableLargeMap });
    updateSliderLargeMap(enableLargeMap);
  });
});
toggleButtonDefaultDay.addEventListener("click", async () => {
  browser.storage.sync.get("enableDefaultDay", ({ enableDefaultDay }) => {
    enableDefaultDay = !enableDefaultDay;
    browser.storage.sync.set({ enableDefaultDay });
    updateSliderDefaultDay(enableDefaultDay);
  });
});
toggleButtonKeybinds.addEventListener("click", async () => {
  browser.storage.sync.get("enableKeybinds", ({ enableKeybinds }) => {
    enableKeybinds = !enableKeybinds;
    browser.storage.sync.set({ enableKeybinds });
    updateSliderKeybinds(enableKeybinds);
  });
});
