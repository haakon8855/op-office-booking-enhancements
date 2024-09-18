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

const handleUpdateDefaultDay = (enableDefaultDay) => {
  if (enableDefaultDay)
    injectScript(
      browser.runtime.getURL("/enhancements/applyDefaultDay.js"),
      "body"
    );
};

const handleUpdateKeybinds = (enableKeybinds) => {
  if (enableKeybinds)
    injectScript(
      browser.runtime.getURL("/enhancements/applyKeybinds.js"),
      "body"
    );
};

const handleUpdateLargeMap = (enableLargeMap) => {
  if (enableLargeMap)
    injectScript(
      browser.runtime.getURL("/enhancements/applyLargeMap.js"),
      "body"
    );
};

const handleUpdateNameTags = (enableNameTags) => {
  if (enableNameTags)
    injectScript(
      browser.runtime.getURL("/enhancements/applyNameTags.js"),
      "body"
    );
};

const handleUpdateNoZoom = (enableNoZoom) => {
  if (enableNoZoom)
    injectScript(
      browser.runtime.getURL("/enhancements/applyNoZoom.js"),
      "body"
    );
};

// Set initial values on load
browser.storage.sync.get("enableDefaultDay", ({ enableDefaultDay }) => {
  handleUpdateDefaultDay(enableDefaultDay);
});
browser.storage.sync.get("enableKeybinds", ({ enableKeybinds }) => {
  handleUpdateKeybinds(enableKeybinds);
});
browser.storage.sync.get("enableLargeMap", ({ enableLargeMap }) => {
  handleUpdateLargeMap(enableLargeMap);
});
browser.storage.sync.get("enableNameTags", ({ enableNameTags }) => {
  handleUpdateNameTags(enableNameTags);
});
browser.storage.sync.get("enableNoZoom", ({ enableNoZoom }) => {
  handleUpdateNoZoom(enableNoZoom);
});

browser.storage.onChanged.addListener(function (changes, namespace) {
  for (let [key, { _oldValue, newValue }] of Object.entries(changes)) {
    switch (key) {
      case "enableDefaultDay":
        handleUpdateDefaultDay(newValue);
        break;
      case "enableKeybinds":
        handleUpdateKeybinds(newValue);
        break;
      case "enableLargeMap":
        handleUpdateLargeMap(newValue);
        break;
      case "enableNameTags":
        handleUpdateNameTags(newValue);
        break;
      case "enableNoZoom":
        handleUpdateNoZoom(newValue);
        break;
      default:
        break;
    }
  }
});
