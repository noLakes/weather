/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFVBQVUsSUFBSSxpQkFBaUI7QUFDekQsc0JBQXNCLHVDQUF1QztBQUM3RCw2QkFBNkIsOEJBQThCO0FBQzNELHNDQUFzQyxpQ0FBaUM7QUFDdkU7O0FBRUE7QUFDQTtBQUNBLHNGQUFzRixLQUFLLHNCQUFzQixrQ0FBdUIsQ0FBQyxJQUFJLGVBQWU7QUFDNUo7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0uc2VhcmNoJylcbmNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcCcpXG5jb25zdCBtYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWF4JylcbmNvbnN0IG1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW4nKVxuY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24nKVxuY29uc3QgdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lJylcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJylcbmNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVscy1saWtlJylcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKVxuXG5mdW5jdGlvbiBnZXRJbnB1dCAoKSB7XG4gIHJldHVybiBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJykudmFsdWVcbn1cblxuZnVuY3Rpb24gY2xlYXJGb3JtICgpIHtcbiAgZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpLnZhbHVlID0gJydcbn1cblxuZnVuY3Rpb24gZ2V0TG9jYXRpb25UaW1lIChvZmZzZXQpIHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKClcbiAgY29uc3QgbG9jYWxUaW1lID0gZGF0ZS5nZXRUaW1lKClcbiAgY29uc3QgbG9jYWxPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMFxuICBjb25zdCB1dGMgPSBsb2NhbFRpbWUgKyBsb2NhbE9mZnNldFxuICBsZXQgbG9jYXRpb25UaW1lID0gdXRjICsgKG9mZnNldCAqIDEwMDApXG4gIGxvY2F0aW9uVGltZSA9IG5ldyBEYXRlKGxvY2F0aW9uVGltZSlcbiAgLy8gcmV0dXJuIGxvY2F0aW9uVGltZS5nZXRIb3VycygpICsgJzonICsgKCcwJyArIGxvY2F0aW9uVGltZS5nZXRNaW51dGVzKCkpLnN1YnN0cigtMilcbiAgcmV0dXJuIGxvY2F0aW9uVGltZS50b0xvY2FsZVN0cmluZygnZW4nLCB7IHRpbWVTdHlsZTogJ3Nob3J0JyB9KVxufVxuXG5mdW5jdGlvbiBmaWxsSW5mbyAoZGF0YSkge1xuICB0ZW1wLmlubmVySFRNTCA9IE1hdGgucm91bmQoZGF0YS5tYWluLnRlbXApICsgJ8KwJ1xuICBtYXguaW5uZXJIVE1MID0gTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcF9tYXgpXG4gIG1pbi5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wX21pbilcbiAgbG9jYXRpb24uaW5uZXJIVE1MID0gYCR7ZGF0YS5uYW1lfSwgJHtkYXRhLnN5cy5jb3VudHJ5fWBcbiAgdGltZS5pbm5lckhUTUwgPSBgJHtnZXRMb2NhdGlvblRpbWUoTnVtYmVyKGRhdGEudGltZXpvbmUpKX1gXG4gIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IGAke2RhdGEud2VhdGhlclsnMCddLmRlc2NyaXB0aW9ufWBcbiAgZmVlbHNMaWtlLmlubmVySFRNTCA9IGBmZWVscyBsaWtlICR7TWF0aC5yb3VuZChkYXRhLm1haW4uZmVlbHNfbGlrZSl9YFxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyIChjaXR5KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZhcHBpZD0ke3Byb2Nlc3MuZW52LldFQVRIRVJfS0VZfWAsIHsgbW9kZTogJ2NvcnMnIH0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgcmV0dXJuIGRhdGFcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkV2VhdGhlciAoY2l0eSkge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKGNpdHkpXG4gICAgZmlsbEluZm8oZGF0YSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgfVxufVxuXG5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gZ2V0SW5wdXQoKVxuICBpZiAocXVlcnkpIHtcbiAgICBsb2FkV2VhdGhlcihxdWVyeSlcbiAgICBjbGVhckZvcm0oKVxuICB9XG59KVxuXG5sb2FkV2VhdGhlcignQnVuYnVyeScpXG4iXSwic291cmNlUm9vdCI6IiJ9