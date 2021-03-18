/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const form = document.querySelector('form.search')
const temp = document.querySelector('.temp')
const location = document.querySelector('.location')
const time = document.querySelector('.time')
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
  return locationTime.getHours() + ':' + ('0' + locationTime.getMinutes()).substr(-2)
}

function fillInfo (data) {
  temp.innerHTML = Math.round(data.main.temp)
  location.innerHTML = `${data.name}, ${data.sys.country}`
  time.innerHTML = getLocationTime(Number(data.timezone))
  feelsLike.innerHTML = `feels like ${Math.round(data.main.feels_like)}`
}

async function getWeather (city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${"c0d4eebad76aab90acc51a6c3322ff91"}`, { mode: 'cors' })
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLFVBQVUsSUFBSSxpQkFBaUI7QUFDekQ7QUFDQSxzQ0FBc0MsaUNBQWlDO0FBQ3ZFOztBQUVBO0FBQ0E7QUFDQSxzRkFBc0YsS0FBSyxzQkFBc0Isa0NBQXVCLENBQUMsSUFBSSxlQUFlO0FBQzVKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtLnNlYXJjaCcpXG5jb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAnKVxuY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24nKVxuY29uc3QgdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lJylcbmNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVscy1saWtlJylcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKVxuXG5mdW5jdGlvbiBnZXRJbnB1dCAoKSB7XG4gIHJldHVybiBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJykudmFsdWVcbn1cblxuZnVuY3Rpb24gY2xlYXJGb3JtICgpIHtcbiAgZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpLnZhbHVlID0gJydcbn1cblxuZnVuY3Rpb24gZ2V0TG9jYXRpb25UaW1lIChvZmZzZXQpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcbiAgY29uc3QgbG9jYWxUaW1lID0gZGF0ZS5nZXRUaW1lKClcbiAgY29uc3QgbG9jYWxPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMFxuICBjb25zdCB1dGMgPSBsb2NhbFRpbWUgKyBsb2NhbE9mZnNldFxuICBsZXQgbG9jYXRpb25UaW1lID0gdXRjICsgKG9mZnNldCAqIDEwMDApXG4gIGxvY2F0aW9uVGltZSA9IG5ldyBEYXRlKGxvY2F0aW9uVGltZSlcbiAgcmV0dXJuIGxvY2F0aW9uVGltZS5nZXRIb3VycygpICsgJzonICsgKCcwJyArIGxvY2F0aW9uVGltZS5nZXRNaW51dGVzKCkpLnN1YnN0cigtMilcbn1cblxuZnVuY3Rpb24gZmlsbEluZm8gKGRhdGEpIHtcbiAgdGVtcC5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wKVxuICBsb2NhdGlvbi5pbm5lckhUTUwgPSBgJHtkYXRhLm5hbWV9LCAke2RhdGEuc3lzLmNvdW50cnl9YFxuICB0aW1lLmlubmVySFRNTCA9IGdldExvY2F0aW9uVGltZShOdW1iZXIoZGF0YS50aW1lem9uZSkpXG4gIGZlZWxzTGlrZS5pbm5lckhUTUwgPSBgZmVlbHMgbGlrZSAke01hdGgucm91bmQoZGF0YS5tYWluLmZlZWxzX2xpa2UpfWBcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlciAoY2l0eSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmYXBwaWQ9JHtwcm9jZXNzLmVudi5XRUFUSEVSX0tFWX1gLCB7IG1vZGU6ICdjb3JzJyB9KVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIHJldHVybiBkYXRhXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZFdlYXRoZXIgKGNpdHkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihjaXR5KVxuICAgIGZpbGxJbmZvKGRhdGEpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpXG4gIH1cbn1cblxuZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICBjb25zdCBxdWVyeSA9IGdldElucHV0KClcbiAgaWYgKHF1ZXJ5KSB7XG4gICAgbG9hZFdlYXRoZXIocXVlcnkpXG4gICAgY2xlYXJGb3JtKClcbiAgfVxufSlcblxubG9hZFdlYXRoZXIoJ0J1bmJ1cnknKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==