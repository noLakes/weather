const form = document.querySelector('form.search')
const temp = document.querySelector('h2.temp')
const location = document.querySelector('h4.location')
const feelsLike = document.querySelector('h4.feels-like')

form.addEventListener('submit', (e) => e.preventDefault())

function getInput () {
  return form.querySelector('input[type="text"]').value
}

function fillInfo (data) {
  temp.innerHTML = Math.round(data.main.temp)
  feelsLike.innerHTML = `feels like ${Math.round(data.main.feels_like)}`
  location.innerHTML = data.name
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

form.querySelector('input[type="submit"]').addEventListener('click', async (e) => {
  const query = getInput()
  if (query) {
    try {
      const data = await getWeather(query)
      fillInfo(data)
    } catch (error) {
      console.log(error)
    }
  }
})
