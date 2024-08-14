function formatTime(date) {
  let hours24 = date.getHours();
  let hours12 = hours24 % 12 || 12; // Convert 24-hour format to 12-hour format
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours24 >= 12 ? "PM" : "AM";



  let time24 = `${hours24}:${minutes}:${seconds}`;
  let time12 = `${hours12}:${minutes}:${seconds} ${ampm}`;

  return { time24, time12 };
}

function displayClock() {
  const now = new Date();
  const { time24, time12 } = formatTime(now);
  console.clear(); // Clear the console for updated time
  console.log(`24-hour format: ${time24}`);
  console.log(`12-hour format: ${time12}`);
}

// Update the clock every second
setInterval(displayClock, 1000);
