function updateClock() {
    const clockElement = document.getElementById('digitalClock');

    // To get the current date and time
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';

    // Converting to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hour is 0, make it 12 (for 12 AM or PM)

    // Adding leading zeros for single-digit minutes and seconds
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Display the time
    const currentTime = `${hours}:${minutes}:${seconds} ${amPm}`;
    clockElement.innerHTML = currentTime;
}

// Updating the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
