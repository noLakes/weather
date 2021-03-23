const form = document.querySelector('form.search')
const temp = document.querySelector('.temp .value')
const max = document.querySelector('.max')
const min = document.querySelector('.min')
const location = document.querySelector('.location')
const time = document.querySelector('.time')
const description = document.querySelector('.description')
const feelsLike = document.querySelector('.feels-like')
const wind = document.querySelector('.wind')
const sunRise = document.querySelector('.sun .rise')
const sunSet = document.querySelector('.sun .set')

form.addEventListener('submit', (e) => e.preventDefault())

function getInput () {
  return form.querySelector('input[type="text"]').value
}

function clearForm () {
  form.querySelector('input[type="text"]').value = ''
}

// converts current time (or target time) from local timezone to target offsets timezone
function getLocationDate (offset, date = new Date()) {
  const localTime = date.getTime()
  const localOffset = date.getTimezoneOffset() * 60000
  const utc = localTime + localOffset
  const locationTime = utc + (offset * 1000)
  return new Date(locationTime)
}

function shortDate (date) {
  const time = date.toLocaleString('en-GB', { timeStyle: 'short' })
  if (time.substr(0, 1) === '0') {
    return time.substr(1)
  } else {
    return time
  }
}

function unixDate (unix) {
  return new Date(Number(unix) * 1000)
}

function between (val, a, b) {
  return (val >= a && val <= b)
}

// returns description of wind conditions using Beaufort wind chart descriptors
function getWindCondition (speed, metric=true) {
  // normalizes to mph
  if (metric) speed = speed / 0.44704
  speed = Math.round(speed)
  let wind = ''

  if (speed === 0) {
    wind = 'calm'
  } else if (between(speed, 1, 3)) {
    wind = 'light air'
  } else if (between(speed, 4, 7)) {
    wind = 'light breeze'
  } else if (between(speed, 8, 12)) {
    wind = 'gentle breeze'
  } else if (between(speed, 13, 18)) {
    wind = 'moderate breeze'
  } else if (between(speed, 19, 24)) {
    wind = 'fresh breeze'
  } else if (between(speed, 25, 31)) {
    wind = 'strong breeze'
  } else if (between(speed, 32, 38)) {
    wind = 'near gale'
  } else if (between(speed, 39, 46)) {
    wind = 'gale'
  } else if (between(speed, 47, 54)) {
    wind = 'severe gale'
  } else if (between(speed, 55, 63)) {
    wind = 'storm'
  } else if (between(speed, 64, 73)) {
    wind = 'violent storm'
  } else if (between(speed, 74, 999)) {
    wind = 'hurricane'
  }
  return wind
}

function fillInfo (data) {
  temp.innerHTML = Math.round(data.main.temp)
  max.innerHTML = Math.round(data.main.temp_max)
  min.innerHTML = Math.round(data.main.temp_min)
  location.innerHTML = `${data.name}, ${data.sys.country}`
  time.innerHTML = `${shortDate(getLocationDate(Number(data.timezone)))}`
  description.innerHTML = `${data.weather['0'].description}`
  feelsLike.innerHTML = `feels like ${Math.round(data.main.feels_like)}`
  wind.innerHTML = getWindCondition(Number(data.wind.speed))
  sunRise.innerHTML = shortDate(getLocationDate(data.timezone, unixDate(data.sys.sunrise)))
  sunSet.innerHTML = shortDate(getLocationDate(data.timezone, unixDate(data.sys.sunset)))
}

async function getWeather (city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.WEATHER_KEY}`, { mode: 'cors' })
    const data = await response.json()
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}

async function loadWeather (city) {
  try {
    const data = await getWeather(city)
    fillInfo(data)
  } catch (error) {
    console.log(error)
  }
}

form.querySelector('input[type="submit"]').addEventListener('click', async (e) => {
  const query = getInput()
  if (query) {
    loadWeather(query)
    clearForm()
  }
})

loadWeather('Bunbury')
