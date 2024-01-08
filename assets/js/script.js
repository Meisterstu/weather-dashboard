// Weather API
// fetch('https://api.openweathermap.org/data/2.5/forecast?q=london&appid=32d6a82bad088f69d32ba78eb132e505&units=metric')
//     .then(function(response) {
//         return response.json();
//     })
//     .then(function(data) {
//         console.log(data);
//     })

let weatherApiKey = '32d6a82bad088f69d32ba78eb132e505';
const searchForm = $('#search-form');
let foreCast = $('#forecast');

//To DO
// 1. when user search for a city in the input, call weather API and show result in the HTML
//...---Add event listener to form submit

//...---Get User Input Value
searchForm.on('submit', function (event) {
    event.preventDefault()

    const userInput = $('#search-input').val();
    searchWeather(userInput);
});


//...---Build API query URL based on user input value
let weatherQueryURL = "https://api.openweathermap.org/data/2.5/forecast?lat = '' &lon = '' &appid=32d6a82bad088f69d32ba78eb132e505&units=metric";

function searchWeather(cityName) {
    fetchWeather(cityName);
    fetchForecast(cityName);
}

//fetching data for today forecast 
function fetchWeather(cityName) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=32d6a82bad088f69d32ba78eb132e505&units=metric')
        .then(function (response) {
            return response.json();
        })
//building the display for today forecast
        .then(function (data) {
            console.log(data);
            const todayForecast = $('#today');
            const weatherIcon = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png'
            const date = data.dt
            const formattedDate = new Date(date * 1000).toLocaleDateString()
            const cityTitle = $('<h2>').text(data.name + ' ' + formattedDate)
            const iconImg = $('<img>').attr('src', weatherIcon)
            const temperature = $('<p>').text('Temp: ' + data.main.temp + '°C')
            const windSpeed = $('<p>').text('Wind Speed: ' + data.wind.speed + ' mph')
            const humidity = $('<p>').text('Humidity: ' + data.main.humidity + '%')
            cityTitle.append(iconImg)
            todayForecast.append(cityTitle, temperature, windSpeed, humidity);
        })
}


function fetchForecast(cityName) {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=32d6a82bad088f69d32ba78eb132e505&units=metric')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.list);
            let weatherData = data.list;
            // this for loop looks at the current time of day for the next 5 days
            // for (let i = 0; i < weatherData.length; i+=8) {
            //     console.log(weatherData[i]);
            // }
            // const forecastNoon = data.[];

            let htmlCard = `
                    <div class="card" style="width: 12rem;">
            <div class="card-body">
                <p class="card-text"></p>
            </div>
            </div>
            `

            for (let i = 0; i < weatherData.length; i++) {
                let midDay = weatherData[i].dt_txt.split(' ')[1].split(':')[0];
                let midDayOne = weatherData[i].dt_txt.slice(11, 13);
                if (midDayOne == '12') {
                    console.log(weatherData[i]);
                    let x = $('<div>');
                    x.attr('class', 'card-div')
                    x.html(htmlCard)
                    foreCast.append(x);
                }
                // console.log(midDayOne);
            }
        })
}



//create array calling items for midday of each day, 4, 12, 20, 28, 36?

// loop through them to create card for each
// 


//...---Call the API and render the result in the HTML
// fetch(weatherQueryURL)
//     .then(function (response) {
//         return response.json();
//     }).then(function (data) {
//     console.log(data);
//     });
//......---get city name and show it in main forecast card
//......---get first weather forecast item and get following values
//.........------ date  -  dt_txt in list: array object
//.........------ temperature
//.........------ wind speed
//.........------ humidity
//.........------ icon  -  https://openweathermap.org/img/w/' + weather[0].icon + '.png
//......---render those values to the main card
//......---loop through all weathers array and get the following values
//.........------ date
//.........------ temperature
//.........------ wind speed
//.........------ humidity
//.........------ icon

// 2. when user search for a city, store it as a button in the search history
// 3. on initial page load, load the search history and show as a list in the HTML
// 4. when user click on search history, call weather API and show result in the HTML
//...---Add event listener to search history button
//...---Build API query URL based on history stored in local storage
//...---Call the API and render the result in the HTML
// 5 CSS




