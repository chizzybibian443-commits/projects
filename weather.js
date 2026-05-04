
// At start of checkWeather function:
document.querySelector(".city").innerHTML = "Loading...";

// If error: 
document.querySelector(".city").innerHTML = "City not found";
// NOTE: For production, API key should be in environment variables
// Demo key used here. Get yours free at openweathermap.org
const apiKey = "7afcbe0f4ce1cf5f6384f020d985b52d";