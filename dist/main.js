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
  // return locationTime.getHours() + ':' + ('0' + locationTime.getMinutes()).substr(-2)
  return locationTime.toLocaleString('en', { timeStyle: 'short' })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsVUFBVSxJQUFJLGlCQUFpQjtBQUN6RDtBQUNBLHNDQUFzQyxpQ0FBaUM7QUFDdkU7O0FBRUE7QUFDQTtBQUNBLHNGQUFzRixLQUFLLHNCQUFzQixrQ0FBdUIsQ0FBQyxJQUFJLGVBQWU7QUFDNUo7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0uc2VhcmNoJylcbmNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcCcpXG5jb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbicpXG5jb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWUnKVxuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzLWxpa2UnKVxuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpXG5cbmZ1bmN0aW9uIGdldElucHV0ICgpIHtcbiAgcmV0dXJuIGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInRleHRcIl0nKS52YWx1ZVxufVxuXG5mdW5jdGlvbiBjbGVhckZvcm0gKCkge1xuICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJykudmFsdWUgPSAnJ1xufVxuXG5mdW5jdGlvbiBnZXRMb2NhdGlvblRpbWUgKG9mZnNldCkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxuICBjb25zdCBsb2NhbFRpbWUgPSBkYXRlLmdldFRpbWUoKVxuICBjb25zdCBsb2NhbE9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwXG4gIGNvbnN0IHV0YyA9IGxvY2FsVGltZSArIGxvY2FsT2Zmc2V0XG4gIGxldCBsb2NhdGlvblRpbWUgPSB1dGMgKyAob2Zmc2V0ICogMTAwMClcbiAgbG9jYXRpb25UaW1lID0gbmV3IERhdGUobG9jYXRpb25UaW1lKVxuICAvLyByZXR1cm4gbG9jYXRpb25UaW1lLmdldEhvdXJzKCkgKyAnOicgKyAoJzAnICsgbG9jYXRpb25UaW1lLmdldE1pbnV0ZXMoKSkuc3Vic3RyKC0yKVxuICByZXR1cm4gbG9jYXRpb25UaW1lLnRvTG9jYWxlU3RyaW5nKCdlbicsIHsgdGltZVN0eWxlOiAnc2hvcnQnIH0pXG59XG5cbmZ1bmN0aW9uIGZpbGxJbmZvIChkYXRhKSB7XG4gIHRlbXAuaW5uZXJIVE1MID0gTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcClcbiAgbG9jYXRpb24uaW5uZXJIVE1MID0gYCR7ZGF0YS5uYW1lfSwgJHtkYXRhLnN5cy5jb3VudHJ5fWBcbiAgdGltZS5pbm5lckhUTUwgPSBnZXRMb2NhdGlvblRpbWUoTnVtYmVyKGRhdGEudGltZXpvbmUpKVxuICBmZWVsc0xpa2UuaW5uZXJIVE1MID0gYGZlZWxzIGxpa2UgJHtNYXRoLnJvdW5kKGRhdGEubWFpbi5mZWVsc19saWtlKX1gXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIgKGNpdHkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPSR7cHJvY2Vzcy5lbnYuV0VBVEhFUl9LRVl9YCwgeyBtb2RlOiAnY29ycycgfSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICByZXR1cm4gZGF0YVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRXZWF0aGVyIChjaXR5KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoY2l0eSlcbiAgICBmaWxsSW5mbyhkYXRhKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICB9XG59XG5cbmZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgY29uc3QgcXVlcnkgPSBnZXRJbnB1dCgpXG4gIGlmIChxdWVyeSkge1xuICAgIGxvYWRXZWF0aGVyKHF1ZXJ5KVxuICAgIGNsZWFyRm9ybSgpXG4gIH1cbn0pXG5cbmxvYWRXZWF0aGVyKCdCdW5idXJ5JylcbiJdLCJzb3VyY2VSb290IjoiIn0=