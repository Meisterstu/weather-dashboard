//To DO
// 1. when user search for a city in the input, call weather API and show result in the HTML
//...---Add event listener to form submit
//...---Get User Input Value
//...---Build API query URL based on user input value
//...---Call the API and render the result in the HTML
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

fetch('https://api.openweathermap.org/data/2.5/forecast?q=london&appid=32d6a82bad088f69d32ba78eb132e505&units=metric')
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
