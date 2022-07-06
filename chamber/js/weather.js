const resultElement = document.querySelector(".weather")
const currentTemp = document.querySelector(".temp")
fetch('https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b921f869ea0a393507459fd5e09d699c')
.then(response => response.json())
.then(data => {

});