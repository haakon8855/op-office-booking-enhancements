// This code runs when the extension is first installed
console.log("Background script running");
// Set enabled states to true
browser.runtime.onInstalled.addListener(() => {
  let enableNoZoom = true;
  let enableLargeMap = true;
  let enableDefaultDay = true;
  let enableKeybinds = true;
  browser.storage.sync.set({ enableNoZoom });
  browser.storage.sync.set({ enableLargeMap });
  browser.storage.sync.set({ enableDefaultDay });
  browser.storage.sync.set({ enableKeybinds });
});
