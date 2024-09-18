const toggleButtonDefaultDay = document.getElementById(
  "toggleEnableDefaultDay"
);
const sliderDefaultDay = document.getElementById("sliderElemDefaultDay");

const toggleButtonKeybinds = document.getElementById("toggleEnableKeybinds");
const sliderKeybinds = document.getElementById("sliderElemKeybinds");

const toggleButtonLargeMap = document.getElementById("toggleLargeMap");
const sliderLargeMap = document.getElementById("sliderElemLargeMap");

const toggleButtonNameTags = document.getElementById("toggleEnableNameTags");
const sliderNameTags = document.getElementById("sliderElemNameTags");

const toggleButtonNoZoom = document.getElementById("toggleNoZoom");
const sliderNoZoom = document.getElementById("sliderElemNoZoom");

const updateSliderDefaultDay = (enableDefaultDay) => {
  // Update the state of the DefaultDay slider button
  toggleButtonDefaultDay.checked = enableDefaultDay;
};

const updateSliderKeybinds = (enableKeybinds) => {
  // Update the state of the Keybinds slider button
  toggleButtonKeybinds.checked = enableKeybinds;
};

const updateSliderLargeMap = (enableLargeMap) => {
  // Update the state of the no zoom slider button
  toggleButtonLargeMap.checked = enableLargeMap;
};

const updateSliderNameTags = (enableNameTags) => {
  // Update the state of the name tag slider button
  toggleButtonNameTags.checked = enableNameTags;
};

const updateSliderNoZoom = (enableNoZoom) => {
  // Update the state of the no zoom slider button
  toggleButtonNoZoom.checked = enableNoZoom;
};

// Set the slider buttons to the states stored in storage
browser.storage.sync.get("enableDefaultDay", ({ enableDefaultDay }) => {
  updateSliderDefaultDay(enableDefaultDay);
});
browser.storage.sync.get("enableKeybinds", ({ enableKeybinds }) => {
  updateSliderKeybinds(enableKeybinds);
});
browser.storage.sync.get("enableLargeMap", ({ enableLargeMap }) => {
  updateSliderLargeMap(enableLargeMap);
});
browser.storage.sync.get("enableNameTags", ({ enableNameTags }) => {
  updateSliderNameTags(enableNameTags);
});
browser.storage.sync.get("enableNoZoom", ({ enableNoZoom }) => {
  updateSliderNoZoom(enableNoZoom);
});

// Add the transition animation after correct state has been set.
// For some reason it did not work by simply adding the class right away.
// A small delay was therefore added.
setTimeout(() => {
  sliderDefaultDay.classList.add("sliderAnim");
  sliderKeybinds.classList.add("sliderAnim");
  sliderLargeMap.classList.add("sliderAnim");
  sliderNameTags.classList.add("sliderAnim");
  sliderNoZoom.classList.add("sliderAnim");
}, 100);

// Add the event listener to the slider checkbox in order to store the updated
// state in storage.
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
toggleButtonLargeMap.addEventListener("click", async () => {
  browser.storage.sync.get("enableLargeMap", ({ enableLargeMap }) => {
    enableLargeMap = !enableLargeMap;
    browser.storage.sync.set({ enableLargeMap });
    updateSliderLargeMap(enableLargeMap);
  });
});
toggleButtonNameTags.addEventListener("click", async () => {
  browser.storage.sync.get("enableNameTags", ({ enableNameTags }) => {
    enableNameTags = !enableNameTags;
    browser.storage.sync.set({ enableNameTags });
    updateSliderNameTags(enableNameTags);
  });
});
toggleButtonNoZoom.addEventListener("click", async () => {
  browser.storage.sync.get("enableNoZoom", ({ enableNoZoom }) => {
    enableNoZoom = !enableNoZoom;
    browser.storage.sync.set({ enableNoZoom });
    updateSliderNoZoom(enableNoZoom);
  });
});
