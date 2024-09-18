// This code runs when the extension is first installed
console.log("Background script running");

// Set enabled states to true
browser.runtime.onInstalled.addListener(() => {
  let enableDefaultDay = true;
  let enableKeybinds = true;
  let enableLargeMap = true;
  let enableNameTags = true;
  let enableNoZoom = true;
  browser.storage.sync.set({ enableDefaultDay });
  browser.storage.sync.set({ enableKeybinds });
  browser.storage.sync.set({ enableLargeMap });
  browser.storage.sync.set({ enableNameTags });
  browser.storage.sync.set({ enableNoZoom });
});
