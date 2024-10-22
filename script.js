function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Calculate the rotation for each hand
    const secondDeg = ((seconds / 60) * 360) + 90; // +90 to rotate from top
    const minuteDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90; // +90 to rotate from top
    const hourDeg = ((hours % 12) / 12) * 360 + ((minutes / 60) * 30) + 90; // +90 to rotate from top

    // Update the hands
    document.getElementById('second').style.transform = `rotate(${secondDeg}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteDeg}deg)`;
    document.getElementById('hour').style.transform = `rotate(${hourDeg}deg)`;

    // Update the digital time
    const digitalTime = now.toLocaleTimeString();
    document.getElementById('digital-time').innerText = digitalTime;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();