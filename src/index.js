const form = document.querySelector('form.search')
const temp = document.querySelector('p.temp')

form.addEventListener('submit', (e) => e.preventDefault())

function getCity () {
  return form.querySelector('input[type="text"]').value
}

function updateTemp (val) {
  temp.innerHTML = val
}

async function getWeather (city) {
  if (!city) return
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.WEATHER_KEY}`, { mode: 'cors' })
  const data = await response.json()
  console.log(data)
  console.log(`Temp: ${data.main.temp}`)
  console.log(`Feels like: ${data.main.feels_like}`)
}

form.querySelector('input[type="submit"]').addEventListener('click', (e) => {
  const query = getCity()
  if (query) {
    getWeather(query)
  }
})
