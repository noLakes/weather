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

console.log(between(3,2,4))

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxxQkFBcUI7QUFDakU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFVBQVUsSUFBSSxpQkFBaUI7QUFDekQsc0JBQXNCLHVDQUF1QztBQUM3RCw2QkFBNkIsOEJBQThCO0FBQzNELHNDQUFzQyxpQ0FBaUM7QUFDdkU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzRkFBc0YsS0FBSyxzQkFBc0Isa0NBQXVCLENBQUMsSUFBSSxlQUFlO0FBQzVKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtLnNlYXJjaCcpXG5jb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXAnKVxuY29uc3QgbWF4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1heCcpXG5jb25zdCBtaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWluJylcbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvY2F0aW9uJylcbmNvbnN0IHRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZScpXG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpXG5jb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHMtbGlrZScpXG5jb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmQnKVxuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpXG5cbmZ1bmN0aW9uIGdldElucHV0ICgpIHtcbiAgcmV0dXJuIGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInRleHRcIl0nKS52YWx1ZVxufVxuXG5mdW5jdGlvbiBjbGVhckZvcm0gKCkge1xuICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJykudmFsdWUgPSAnJ1xufVxuXG5mdW5jdGlvbiBnZXRMb2NhdGlvblRpbWUgKG9mZnNldCkge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKVxuICBjb25zdCBsb2NhbFRpbWUgPSBkYXRlLmdldFRpbWUoKVxuICBjb25zdCBsb2NhbE9mZnNldCA9IGRhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKSAqIDYwMDAwXG4gIGNvbnN0IHV0YyA9IGxvY2FsVGltZSArIGxvY2FsT2Zmc2V0XG4gIGxldCBsb2NhdGlvblRpbWUgPSB1dGMgKyAob2Zmc2V0ICogMTAwMClcbiAgbG9jYXRpb25UaW1lID0gbmV3IERhdGUobG9jYXRpb25UaW1lKVxuICAvLyByZXR1cm4gbG9jYXRpb25UaW1lLmdldEhvdXJzKCkgKyAnOicgKyAoJzAnICsgbG9jYXRpb25UaW1lLmdldE1pbnV0ZXMoKSkuc3Vic3RyKC0yKVxuICByZXR1cm4gbG9jYXRpb25UaW1lLnRvTG9jYWxlU3RyaW5nKCdlbicsIHsgdGltZVN0eWxlOiAnc2hvcnQnIH0pXG59XG5cbmZ1bmN0aW9uIGJldHdlZW4gKHZhbCwgYSwgYikge1xuICByZXR1cm4gKHZhbCA+PSBhICYmIHZhbCA8PSBiKVxufVxuXG4vLyByZXR1cm5zIGRlc2NyaXB0aW9uIG9mIHdpbmQgY29uZGl0aW9ucyB1c2luZyBCZWF1Zm9ydCB3aW5kIGNoYXJ0IGRlc2NyaXB0b3JzXG5mdW5jdGlvbiBnZXRXaW5kQ29uZGl0aW9uIChzcGVlZCwgbWV0cmljPXRydWUpIHtcbiAgLy8gbm9ybWFsaXplcyB0byBtcGhcbiAgaWYgKG1ldHJpYykgc3BlZWQgPSBzcGVlZCAvIDAuNDQ3MDRcbiAgc3BlZWQgPSBNYXRoLnJvdW5kKHNwZWVkKVxuICBsZXQgd2luZCA9ICcnXG5cbiAgc3dpdGNoIChzcGVlZCkge1xuICAgIGNhc2UgKHNwZWVkID09PSAwKTpcbiAgICAgIHdpbmQgPSAnY2FsbSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAoYmV0d2VlbihzcGVlZCwgMSwgMykpOlxuICAgICAgd2luZCA9ICdsaWdodCBhaXInXG4gICAgICBicmVha1xuICAgIGNhc2UgKGJldHdlZW4oc3BlZWQsIDQsIDcpKTpcbiAgICAgIHdpbmQgPSAnbGlnaHQgYnJlZXplJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIChiZXR3ZWVuKHNwZWVkLCA4LCAxMikpOlxuICAgICAgd2luZCA9ICdnZW50bGUgYnJlZXplJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIChiZXR3ZWVuKHNwZWVkLCAxMywgMTgpKTpcbiAgICAgIHdpbmQgPSAnbW9kZXJhdGUgYnJlZXplJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIChiZXR3ZWVuKHNwZWVkLCAxOSwgMjQpKTpcbiAgICAgIHdpbmQgPSAnZnJlc2ggYnJlZXplJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIChiZXR3ZWVuKHNwZWVkLCAyNSwgMzEpKTpcbiAgICAgIHdpbmQgPSAnc3Ryb25nIGJyZWV6ZSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAoYmV0d2VlbihzcGVlZCwgMzIsIDM4KSk6XG4gICAgICB3aW5kID0gJ25lYXIgZ2FsZSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAoYmV0d2VlbihzcGVlZCwgMzksIDQ2KSk6XG4gICAgICB3aW5kID0gJ2dhbGUnXG4gICAgICBicmVha1xuICAgIGNhc2UgKGJldHdlZW4oc3BlZWQsIDQ3LCA1NCkpOlxuICAgICAgd2luZCA9ICdzZXZlcmUgZ2FsZSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAoYmV0d2VlbihzcGVlZCwgNTUsIDYzKSk6XG4gICAgICB3aW5kID0gJ3N0b3JtJ1xuICAgICAgYnJlYWtcbiAgICBjYXNlIChiZXR3ZWVuKHNwZWVkLCA2NCwgNzMpKTpcbiAgICAgIHdpbmQgPSAndmlvbGVudCBzdG9ybSdcbiAgICAgIGJyZWFrXG4gICAgY2FzZSAoYmV0d2VlbihzcGVlZCwgNzQsIDk5OSkpOlxuICAgICAgd2luZCA9ICdodXJyaWNhbmUnXG4gICAgICBicmVha1xuICB9XG4gIGNvbnNvbGUubG9nKCdoZWxsbywgaSB3YXMgY2FsbGVkIScpXG4gIHJldHVybiB3aW5kXG59XG5cbmZ1bmN0aW9uIGZpbGxJbmZvIChkYXRhKSB7XG4gIHRlbXAuaW5uZXJIVE1MID0gTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcCkgKyAnwrAnXG4gIG1heC5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wX21heClcbiAgbWluLmlubmVySFRNTCA9IE1hdGgucm91bmQoZGF0YS5tYWluLnRlbXBfbWluKVxuICBsb2NhdGlvbi5pbm5lckhUTUwgPSBgJHtkYXRhLm5hbWV9LCAke2RhdGEuc3lzLmNvdW50cnl9YFxuICB0aW1lLmlubmVySFRNTCA9IGAke2dldExvY2F0aW9uVGltZShOdW1iZXIoZGF0YS50aW1lem9uZSkpfWBcbiAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gYCR7ZGF0YS53ZWF0aGVyWycwJ10uZGVzY3JpcHRpb259YFxuICBmZWVsc0xpa2UuaW5uZXJIVE1MID0gYGZlZWxzIGxpa2UgJHtNYXRoLnJvdW5kKGRhdGEubWFpbi5mZWVsc19saWtlKX1gXG4gIGNvbnNvbGUubG9nKGdldFdpbmRDb25kaXRpb24oTnVtYmVyKGRhdGEud2luZC5zcGVlZCkpKVxuICB3aW5kLmlubmVySFRNTCA9IGdldFdpbmRDb25kaXRpb24oTnVtYmVyKGRhdGEud2luZC5zcGVlZCkpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIgKGNpdHkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPSR7cHJvY2Vzcy5lbnYuV0VBVEhFUl9LRVl9YCwgeyBtb2RlOiAnY29ycycgfSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICByZXR1cm4gZGF0YVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRXZWF0aGVyIChjaXR5KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoY2l0eSlcbiAgICBmaWxsSW5mbyhkYXRhKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICB9XG59XG5cbmZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgY29uc3QgcXVlcnkgPSBnZXRJbnB1dCgpXG4gIGlmIChxdWVyeSkge1xuICAgIGxvYWRXZWF0aGVyKHF1ZXJ5KVxuICAgIGNsZWFyRm9ybSgpXG4gIH1cbn0pXG5cbmxvYWRXZWF0aGVyKCdCdW5idXJ5JylcblxuY29uc29sZS5sb2coYmV0d2VlbigzLDIsNCkpXG4iXSwic291cmNlUm9vdCI6IiJ9