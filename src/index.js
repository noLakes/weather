const form = document.querySelector('form.search')
const temp = document.querySelector('.temp')
const max = document.querySelector('.max')
const min = document.querySelector('.min')
const location = document.querySelector('.location')
const time = document.querySelector('.time')
const description = document.querySelector('.description')
const feelsLike = document.querySelector('.feels-like')
const wind = document.querySelector('.wind')

form.addEventListener('submit', (e) => e.preventDefault())

function getInput () {
  return form.querySelector('input[type="text"]').value
}

function clearForm () {
  form.querySelector('input[type="text"]').value = ''
}

function getLocationTime (offset) {
  const date = new Date()
  const localTime = date.getTime()
  const localOffset = date.getTimezoneOffset() * 60000
  const utc = localTime + localOffset
  let locationTime = utc + (offset * 1000)
  locationTime = new Date(locationTime)
  // return locationTime.getHours() + ':' + ('0' + locationTime.getMinutes()).substr(-2)
  return locationTime.toLocaleString('en', { timeStyle: 'short' })
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

  switch (speed) {
    case (speed === 0):
      wind = 'calm'
      break
    case (between(speed, 1, 3)):
      wind = 'light air'
      break
    case (between(speed, 4, 7)):
      wind = 'light breeze'
      break
    case (between(speed, 8, 12)):
      wind = 'gentle breeze'
      break
    case (between(speed, 13, 18)):
      wind = 'moderate breeze'
      break
    case (between(speed, 19, 24)):
      wind = 'fresh breeze'
      break
    case (between(speed, 25, 31)):
      wind = 'strong breeze'
      break
    case (between(speed, 32, 38)):
      wind = 'near gale'
      break
    case (between(speed, 39, 46)):
      wind = 'gale'
      break
    case (between(speed, 47, 54)):
      wind = 'severe gale'
      break
    case (between(speed, 55, 63)):
      wind = 'storm'
      break
    case (between(speed, 64, 73)):
      wind = 'violent storm'
      break
    case (between(speed, 74, 999)):
      wind = 'hurricane'
      break
  }
  console.log('hello, i was called!')
  return wind
}

function fillInfo (data) {
  temp.innerHTML = Math.round(data.main.temp) + '°'
  max.innerHTML = Math.round(data.main.temp_max)
  min.innerHTML = Math.round(data.main.temp_min)
  location.innerHTML = `${data.name}, ${data.sys.country}`
  time.innerHTML = `${getLocationTime(Number(data.timezone))}`
  description.innerHTML = `${data.weather['0'].description}`
  feelsLike.innerHTML = `feels like ${Math.round(data.main.feels_like)}`
  console.log(getWindCondition(Number(data.wind.speed)))
  wind.innerHTML = getWindCondition(Number(data.wind.speed))
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

console.log(between(3,2,4))
