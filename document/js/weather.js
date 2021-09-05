const API_KEY ="f4f64dea3730cd1e2bed49fc93fea885";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url  =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units_matrix`
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather= document.querySelector(".left-container__weather span:first-child");
            const city= document.querySelector(".left-container__weather span:last-child");
            city.innerText= data.name;
            weather.innerText = `${data.weather[0].main} / ${(data.main.temp-273.15).toFixed(1)}`;
    });
}
function onGeoError() {
    const noWeather= document.querySelector(".left-container__weather span:first-child");
    const noCity= document.querySelector(".left-container__weather span:last-child");

    noWeather.innerText=`No Info`;
    noWeather.setAttribute("style", "font-size:35px;")
    noCity.setAttribute("style", "display:none;")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

