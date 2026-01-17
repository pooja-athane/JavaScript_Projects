const apiKey = "86cbf97f5c81ff8db398094d4d51d400"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const serachBox = document.querySelector('.search input')
const serachBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city) {
    const respose = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if (respose.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    } else {
        var data = await respose.json()

    // display data console
        // console.log(data)

    // update the data on app
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "clouds.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "clear.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "rain.png";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "drizzle.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "mist.png";
        }else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "snow.png";
        }

        document.querySelector('.weather').style.display = "block"
        document.querySelector(".error").style.display = "none"

    }
    
    // update the image according to weater condition
    // if(data.weather[0].main =="Clouds"){
    //     weatherIcon.src = "clouds.png";
    // }else if(data.weather[0].main =="Clear"){
    //     weatherIcon.src ="clear.png";
    // }else if(data.weather[0].main =="Rain"){
    //     weatherIcon.src ="rain.png";
    // }else if(data.weather[0].main =="Drizzle"){
    //     weatherIcon.src ="drizzle.png";
    // }else if(data.weather[0].main =="Mist"){
    //     weatherIcon.src ="mist.png";
    // }

    // document.querySelector('.weather').style.display="block"
}
serachBtn.addEventListener("click", () => {
    checkWeather(serachBox.value)
})
