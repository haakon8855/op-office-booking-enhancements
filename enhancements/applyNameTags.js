// Show nametags on the map

let bookings;

let positionAdjustments = {
  1: { top: -50, left: 0 },
  2: { top: 60, left: -100 },
  3: { top: -40, left: 0 },
  4: { top: 70, left: -100 },

  5: { top: 30, left: 160 },
  6: { top: 30, left: 160 },
  7: { top: 30, left: 160 },
  8: { top: 45, left: 210 },
  9: { top: 45, left: 210 },
  10: { top: 45, left: 210 },

  11: { top: 20, left: 60 },
  12: { top: 20, left: 60 },
  13: { top: 60, left: 0 },
  14: { top: -55, left: 10 },
  15: { top: 60, left: -100 },

  23: { top: 0, left: 0 },
  24: { top: 0, left: 0 },
  25: { top: 0, left: 0 },

  26: { top: -60, left: -150 },
  27: { top: -60, left: -20 },
};

(async () => {
  const response = await fetch("/api/booking/activeBookings");
  bookings = await response.json();

  setTimeout(() => {
    applyNameTags();
    // add event listener to the buttons to update the name tags when the day is changed
    document.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", applyNameTags);
    });
  }, 1000);
})();

const applyNameTags = () => {
  setTimeout(() => {
    // Delete all existing name tags
    const nameTags = document.querySelectorAll(".nameTag");
    nameTags.forEach((tag) => tag.remove());

    // Get the two buttons for the weekdays
    let weekdayButtons = document.querySelectorAll("button");
    weekdayButtons = Array.from(weekdayButtons).filter((button) =>
      weekdays.some((day) => button.innerHTML.includes(day))
    );
    // Get the button of these two that is currently active (does not have the class text-white):
    const activeButton = weekdayButtons.find((button) =>
      button.classList.contains("text-white")
    );
    // Set up the two possible days to show name tags for
    let today = new Date();
    let nextWorkday = new Date();
    nextWorkday.setDate(today.getDate() + 1);
    while (nextWorkday.getDay() === 0 || nextWorkday.getDay() > 5) {
      nextWorkday.setDate(nextWorkday.getDate() + 1);
    }
    // Set the active day to the day according to the active button
    let activeDay = today;
    if (!activeButton.innerHTML.includes(activeDay.getDate())) {
      activeDay = nextWorkday;
    }

    // Get the bookings for only the active day
    const activeBookings = bookings.filter(
      (booking) =>
        new Date(booking.bookingDateTime).getDate() == activeDay.getDate()
    );

    // For each booking, add a name tag to the map
    activeBookings.forEach((booking) => {
      const seat = document.getElementById(booking.seatId);
      const rect = seat.getBoundingClientRect();
      const nameTag = document.createElement("div");
      const adj = positionAdjustments[booking.seatId]; // Position adjustments
      // Scaling factor
      const sc =
        window.innerWidth < 600
          ? Math.min(window.innerWidth / window.innerHeight / 1.5, 0.85)
          : Math.min(window.innerWidth / window.innerHeight, 0.85);

      nameTag.classList.add("nameTag"); // add class to name tag for easy removal (and styling)
      nameTag.id = booking.userName + booking.seatId;

      // Set position to absolute and place the name tag on the seat (with adjustments)
      nameTag.style.position = "absolute";
      nameTag.style.top = rect.top + adj.top * sc + "px";
      nameTag.style.left = rect.left + adj.left * sc + "px";
      nameTag.style.fontSize = `${15 * sc}px`;

      // Set the name tag to the user's name
      nameTag.innerHTML = booking.userName;
      // Add the name tag to the page
      document.body.appendChild(nameTag);
    });
  }, 100);
};
