// This code is run in the terminal of the website to remove zoom buttons

zoomRepeater = setInterval(() => {
  try {
    // Make the office map larger
    console.log("Trying to increase map size");
    let main = document.querySelector('[height="500"]');
    main.height.baseVal.value = "800";
  } catch (error) {
    console.log("Applying no zoom failed. Retrying");
  }
}, 100);

setTimeout(() => {
  clearInterval(zoomRepeater);
}, 2000);
