const toggleButtonNoZoom = document.getElementById("toggleNoZoom");
const sliderNoZoom = document.getElementById("sliderElemNoZoom");

const toggleButtonLargeMap = document.getElementById("toggleLargeMap");
const sliderLargeMap = document.getElementById("sliderElemLargeMap");

const toggleButtonDefaultDay = document.getElementById(
  "toggleEnableDefaultDay"
);
const sliderDefaultDay = document.getElementById("sliderElemDefaultDay");

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

// Set the slider buttons to the states stored in storage
chrome.storage.sync.get("enableNoZoom", ({ enableNoZoom }) => {
  updateSliderNoZoom(enableNoZoom);
});
chrome.storage.sync.get("enableLargeMap", ({ enableLargeMap }) => {
  updateSliderLargeMap(enableLargeMap);
});
chrome.storage.sync.get("enableDefaultDay", ({ enableDefaultDay }) => {
  updateSliderDefaultDay(enableDefaultDay);
});

// Add the transition animation after correct state has been set.
// For some reason it did not work by simply adding the class right away.
// A small delay was therefore added.
setTimeout(() => {
  sliderNoZoom.classList.add("sliderAnim");
  sliderLargeMap.classList.add("sliderAnim");
  sliderDefaultDay.classList.add("sliderAnim");
}, 100);

// Add the event listener to the slider checkbox in order to store the updated
// state in storage.
toggleButtonNoZoom.addEventListener("click", async () => {
  chrome.storage.sync.get("enableNoZoom", ({ enableNoZoom }) => {
    enableNoZoom = !enableNoZoom;
    chrome.storage.sync.set({ enableNoZoom });
    updateSliderNoZoom(enableNoZoom);
  });
});
toggleButtonLargeMap.addEventListener("click", async () => {
  chrome.storage.sync.get("enableLargeMap", ({ enableLargeMap }) => {
    enableLargeMap = !enableLargeMap;
    chrome.storage.sync.set({ enableLargeMap });
    updateSliderLargeMap(enableLargeMap);
  });
});
toggleButtonDefaultDay.addEventListener("click", async () => {
  chrome.storage.sync.get("enableDefaultDay", ({ enableDefaultDay }) => {
    enableDefaultDay = !enableDefaultDay;
    chrome.storage.sync.set({ enableDefaultDay });
    updateSliderDefaultDay(enableDefaultDay);
  });
});
