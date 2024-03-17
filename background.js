// This code runs when the extension is first installed

// Set enabled states to true
chrome.runtime.onInstalled.addListener(() => {
  let enableNoZoom = true;
  let enableLargeMap = true;
  let enableDefaultDay = true;
  chrome.storage.sync.set({ enableNoZoom });
  chrome.storage.sync.set({ enableLargeMap });
  chrome.storage.sync.set({ enableDefaultDay });
});
