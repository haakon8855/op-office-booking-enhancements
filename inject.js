/**
 * injectScript - Inject internal script to available access to the `window`
 *
 * @param  {type} file_path Local path of the internal script.
 * @param  {type} tag The tag as string, where the script will be append (default: 'body').
 * @see    {@link https://gist.github.com/devjin0617/3e8d72d94c1b9e69690717a219644c7a}
 */
const injectScript = (file_path, tag) => {
  const node = document.getElementsByTagName(tag)[0];
  const script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", file_path);
  node.appendChild(script);
};

const handleUpdateNoZoom = (enableNoZoom) => {
  if (enableNoZoom)
    injectScript(chrome.runtime.getURL("/enhancements/applyNoZoom.js"), "body");
};

const handleUpdateLargeMap = (enableLargeMap) => {
  if (enableLargeMap)
    injectScript(
      chrome.runtime.getURL("/enhancements/applyLargeMap.js"),
      "body"
    );
};

const handleUpdateDefaultDay = (enableDefaultDay) => {
  if (enableDefaultDay)
    injectScript(
      chrome.runtime.getURL("/enhancements/applyDefaultDay.js"),
      "body"
    );
};

// Set initial values on load
chrome.storage.sync.get("enableNoZoom", ({ enableNoZoom }) => {
  handleUpdateNoZoom(enableNoZoom);
});
chrome.storage.sync.get("enableLargeMap", ({ enableLargeMap }) => {
  handleUpdateLargeMap(enableLargeMap);
});
chrome.storage.sync.get("enableDefaultDay", ({ enableDefaultDay }) => {
  handleUpdateDefaultDay(enableDefaultDay);
});

chrome.storage.onChanged.addListener(function (changes, namespace) {
  for (let [key, { _oldValue, newValue }] of Object.entries(changes)) {
    switch (key) {
      case "enableNoZoom":
        handleUpdateNoZoom(newValue);
        break;
      case "enableLargeMap":
        handleUpdateLargeMap(newValue);
        break;
      case "enableDefaultDay":
        handleUpdateDefaultDay(newValue);
        break;
      default:
        break;
    }
  }
});
