// Add quality of life keybinds to office booking website

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "Escape":
      [...document.getElementsByTagName("button")]
        .filter((element) => element.innerHTML === "Lukk")
        .forEach((element) => element.click());
      break;
    case " ":
    case "Enter":
      [...document.getElementsByTagName("button")]
        .filter(
          (element) =>
            element.innerHTML === "Reserver sete" ||
            element.innerHTML === "Slett reservasjon"
        )
        .forEach((element) => element.click());
      break;
  }
});
