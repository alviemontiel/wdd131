// Dynamic footer updates[cite: 6]
document.getElementById('current-year').textContent = new Date().getFullYear();

const modDate = new Date(document.lastModified);
const formattedDate = `${String(modDate.getMonth() + 1).padStart(2, '0')}/${String(modDate.getDate()).padStart(2, '0')}/${modDate.getFullYear()} ${String(modDate.getHours()).padStart(2, '0')}:${String(modDate.getMinutes()).padStart(2, '0')}:${String(modDate.getSeconds()).padStart(2, '0')}`;
document.getElementById('last-modified').textContent = formattedDate;

/**
 * Calculates the wind chill factor using the metric formula (one-line return)[cite: 6].
 * @param {number} temp - Temperature in Celsius
 * @param {number} speed - Wind speed in km/h
 * @returns {number} Wind chill rounded to 1 decimal place
 */
const calculateWindChill = (temp, speed) =>
    Number((13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1));

// Static variables matching the tropical weather displayed in HTML (29°C, 12 km/h)[cite: 6]
const currentTemp = 29;      // °C (Does not meet <= 10 °C requirement, so will output "N/A")[cite: 6]
const currentWindSpeed = 12; // km/h

const outputElement = document.getElementById('windchill-output');

// Only call calculateWindChill if metric conditions are met (Temp <= 10°C and Wind > 4.8 km/h)[cite: 6]
if (currentTemp <= 10 && currentWindSpeed > 4.8) {
    const windChillResult = calculateWindChill(currentTemp, currentWindSpeed);
    outputElement.textContent = `${windChillResult} °C`;
} else {
    outputElement.textContent = "N/A";[cite: 6]
}