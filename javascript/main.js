function getLatLong() {
    let error_message = document.getElementById("error-not-found");
    error_message.style.display = "none";

    let description_field = document.getElementById("description");
    let temp_field = document.getElementById("temp");
    let humidity_field = document.getElementById("humidity");
    let location_field = document.getElementById("location");

    description_field.style.display = "none";
    temp_field.style.display = "none";
    humidity_field.style.display = "none";
    location_field.style.display = "none";

    let url = "https://api.openweathermap.org/data/2.5/weather?q=";
    let city_name = document.getElementById("city-name-field").value;
    const api_key = "YOUR_OPEN_WEATHER_API_KEY";

    // Clean input field
    document.getElementById("city-name-field").value = "";

    if (url != "") {
        const http = new XMLHttpRequest();
        url = url + city_name + api_key;
        http.open("GET", url);
        http.send();

        http.onreadystatechange = function() {
            if (this.status == 200) {
                if (http.responseText != "") {
                    const resp = JSON.parse(http.responseText);
                    let description = resp.weather[0].description;
                    let temp = Number(resp.main.temp);
                    temp = String((temp - 273.15).toFixed(2)) + "°C" + " or " + String((((temp - 273.15) * 1.8) + 32).toFixed(2)) + "°F";
                    let humidity = resp.main.humidity + "%";

                    description_field.style.display = "block";
                    description_field.innerText = description;

                    temp_field.style.display = "block";
                    temp_field.innerText = temp;

                    humidity_field.style.display = "block";
                    humidity_field.innerText = humidity;

                    location_field.style.display = "block";
                    location_field.innerText = city_name;
                }
            } else {
                error_message.style.display = "block";
            }
        }
    } else {
        error_message.style.display = "block";
    }

    return false;
}
