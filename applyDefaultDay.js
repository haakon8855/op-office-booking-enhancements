// This code is run in the terminal of the website to set selected day to next workday

weekdays = ["Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag"];

dayRepeater = setInterval(() => {
  try {
    console.log("Trying to set selected day");

    // Set selected day
    let buttons = document.querySelectorAll("button");
    buttons = Array.from(buttons).filter((button) =>
      weekdays.some((day) => button.innerHTML.includes(day))
    );
    // check if last button contains class text-white
    if (buttons[buttons.length - 1].classList.contains("text-white")) {
      clearInterval(dayRepeater);
    }

    // click last button in list
    buttons[buttons.length - 1].click();
  } catch (error) {
    console.log("Applying no zoom failed. Retrying");
  }
}, 100);

setTimeout(() => {
  clearInterval(dayRepeater);
}, 2000);
