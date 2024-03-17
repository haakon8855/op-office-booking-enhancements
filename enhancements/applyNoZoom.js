// This code is run in the terminal of the website to remove zoom buttons

largeMapRepeater = setInterval(() => {
  try {
    console.log("Trying to remove zoom");

    // Remove zoom buttons and room status
    let zoomButtonsPartOne = document.getElementsByClassName("zoomed-out-room");
    let zoomButtonsPartTwo = document.getElementsByClassName("zoomed-in");
    let zoomButtons = [...zoomButtonsPartOne, ...zoomButtonsPartTwo];
    Array.from(zoomButtons).forEach((button) => {
      // Remove event listeners
      let clonedButton = button.cloneNode(true);
      button.parentElement.replaceChild(clonedButton, button);
      button = clonedButton;

      // Remove zoom buttons
      button.classList = ["zoomed-in"];

      // Remove room status by removing all children that are not paths
      Array.from(button.children).forEach((child) => {
        if (child.tagName.toLowerCase() !== "path") {
          button.removeChild(child);
        }
      });
    });

    // Set the room background color to ivory
    document.querySelectorAll("path").forEach((path) => {
      if (path.getAttribute("fill")) {
        path.style.fill = "ivory";
        path.classList = [""];
      }
    });

    // Show all seats
    let seats = document.getElementsByClassName("hidden");
    Array.from(seats).forEach((seat) => {
      seat.classList = [""];
    });
  } catch (error) {
    console.log("Applying no zoom failed. Retrying");
  }
}, 100);

setTimeout(() => {
  clearInterval(largeMapRepeater);
}, 2000);
