const theTemp = document.getElementById('temperatureStats')
const theTempMM  = document.getElementById('tempMMStats')
const theHumidity = document.getElementById("humidityStats")
const thePercip = document.getElementById("percipStats")
const theWind = document.getElementById("windStats")
const theCity = document.getElementById('city')

async function weatherAPI(city){
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`)
    const data = await response.json()
    console.log(data)
    theTemp.innerHTML = `
        <p>${Math.round((data.main.temp - 273.15) * 9/5 + 32)}℉</p>
    ` 
    theTempMM.innerHTML = `
        <p>${Math.round((data.main.temp_max - 273.15) * 9/5 + 32)}℉ | ${Math.round((data.main.temp_min - 273.15) * 9/5 + 32)}℉</p>
    ` 
    theHumidity.innerHTML = `
        <p>${data.main.humidity}%</p>
    ` 
        thePercip.innerHTML = `
        <p>${data.weather[0].main}</p> 
    `
    
    theWind.innerHTML = `
        <p>${Math.round(data.wind.speed * 2.23964)} mph</p>
    ` 
    theCity.innerHTML = `
        <p>${data.name}</p>
    `
    console.log(data.weather[0].main)
    tempImage((data.main.temp - 273.15) * 9/5 + 32)
    humidityImage(data.main.humidity)
    weatherCondition(data.weather[0].main)
    windImage(Math.round(data.wind.speed * 2.23964))
}

const weatherForm = document.getElementById("weatherLocation")

weatherForm.addEventListener('submit', function(e){
    e.preventDefault()
    const cityLocation = weatherForm.querySelector('#user_input')
    weatherAPI(cityLocation.value)
    
    cityLocation.value = ""
})

function tempImage(temp){
    const tempBack = document.getElementById('temperatureStats')
    const tempBackMM = document.getElementById('tempMMStats')
    if (temp > 85){
        tempBack.style.backgroundImage = 'url(./images/scortchinghot.jpg)'
        tempBack.style.color = 'white'
        tempBackMM.style.backgroundImage = 'url(./images/scortchinghot.jpg)'
        tempBackMM.style.color = 'white'
    }else if (temp > 65 && temp <= 85){
        tempBack.style.backgroundImage = 'url(./images/niceweather.jpg)'
        tempBack.style.color = 'white'
        tempBackMM.style.backgroundImage = 'url(./images/niceweather.jpg)'
        tempBackMM.style.color = 'white'
    }else if (temp > 40 && temp <= 65){
        tempBack.style.backgroundImage = 'url(./images/coolfall.jpg)'
        tempBack.style.color = 'white'
        tempBackMM.style.backgroundImage = 'url(./images/coolfall.jpg)'
        tempBackMM.style.color = 'white'
    }else{
        tempBack.style.backgroundImage = 'url(./images/winter.jpg)'
        tempBack.style.color = 'white'
        tempBackMM.style.backgroundImage = 'url(./images/winter.jpg)'
        tempBackMM.style.color = 'white'
    }
}

function humidityImage(humidity){
    const humidBack = document.getElementById('humidityStats')
    if (humidity < 30){
        humidBack.style.backgroundImage = 'url(./images/humiditydry.jpg)'
        humidBack.style.color = 'white'
    }else if (humidity >= 30 && humidity < 80){
        humidBack.style.backgroundImage = 'url(./images/humiditynice.jpg)'
        humidBack.style.color = 'white'
    }else{
        humidBack.style.backgroundImage = 'url(./images/humiditywet.jpg)'
        humidBack.style.color = 'white'
    }
}

function weatherCondition(condition){
    const conditions = document.getElementById('percipStats')
    if (condition.toLowerCase() == 'thunderstorm'){
        conditions.style.backgroundImage = 'url(./images/conditionsimg/thunderstorm.jpg)'
        conditions.style.color = 'white'
    }else if (condition.toLowerCase() == 'drizzle' | condition.toLowerCase() == 'rain'){
        conditions.style.backgroundImage = 'url(./images/conditionsimg/rainanddrizzel.jpg)'
        conditions.style.color = 'white'
    }else if (condition.toLowerCase() == 'snow'){
        conditions.style.backgroundImage = 'url(./images/conditionsimg/snowing.jpg)'
        conditions.style.color = 'white'
    }else if (condition.toLowerCase() == 'tornado'){
        conditions.style.backgroundImage = 'url(./images/conditionsimg/tornado.jpg)'
        conditions.style.color = 'white'
    }else if (condition.toLowerCase() == 'clear'){
        conditions.style.backgroundImage = 'url(./images/conditionsimg/clearskies.jpg)'
        conditions.style.color = 'white'
    }else if (condition.toLowerCase() == 'clouds'){
        conditions.style.backgroundImage = 'url(./images/conditionsimg/cloudyskies.jpg)'
        conditions.style.color = 'white'
    }else if (condition.toLowerCase() == 'fog' | condition.toLowerCase() == 'mist'){
        conditions.style.backgroundImage = 'url(./images/conditionsimg/fog.jpg)'
        conditions.style.color = 'white'
    }else if (condition.toLowerCase() == 'smoke'|condition.toLowerCase() == 'ash'|condition.toLowerCase() == 'haze'){
        conditions.style.backgroundImage = 'url(./images/conditionsimg/smoke.jpg)'
        conditions.style.color = 'white'
    }else{
        conditions.style.backgroundImage = 'url(./images/conditionsimg/duststorm.jpg)'
        conditions.style.color = 'white'
    }
}

function windImage(windy){
    const windyS = document.getElementById('windStats')
    if (windy < 5){
        windyS.style.backgroundImage = 'url(./images/wind/calm.jpg)'
        windyS.style.color = 'white'
    }else if (windy >= 5 && windy < 25){
        windyS.style.backgroundImage = 'url(./images/wind/windys.jpg)'
        windyS.style.color = 'white'
    }else if (windy >=25 && windy < 60){
        windyS.style.backgroundImage = 'url(./images/wind/verywindy.jpg)'
        windyS.style.color = 'white'
    }else{
        windyS.style.backgroundImage = 'url(./images/wind/crazywindy.jpg)'
        windyS.style.color = 'white' 
    }
}

