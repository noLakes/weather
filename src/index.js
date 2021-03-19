const form = document.querySelector('form.search')
const temp = document.querySelector('.temp')
const max = document.querySelector('.max')
const min = document.querySelector('.min')
const location = document.querySelector('.location')
const time = document.querySelector('.time')
const description = document.querySelector('.description')
const feelsLike = document.querySelector('.feels-like')

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

function fillInfo (data) {
  temp.innerHTML = Math.round(data.main.temp) + '°'
  max.innerHTML = Math.round(data.main.temp_max)
  min.innerHTML = Math.round(data.main.temp_min)
  location.innerHTML = `${data.name}, ${data.sys.country}`
  time.innerHTML = `${getLocationTime(Number(data.timezone))}`
  description.innerHTML = `${data.weather['0'].description}`
  feelsLike.innerHTML = `feels like ${Math.round(data.main.feels_like)}`
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
