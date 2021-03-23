/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkMscUJBQXFCO0FBQ2xFO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsVUFBVSxJQUFJLGlCQUFpQjtBQUN6RCxzQkFBc0Isa0RBQWtEO0FBQ3hFLDZCQUE2Qiw4QkFBOEI7QUFDM0Qsc0NBQXNDLGlDQUFpQztBQUN2RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0ZBQXNGLEtBQUssc0JBQXNCLGtDQUF1QixDQUFDLElBQUksZUFBZTtBQUM1SjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybS5zZWFyY2gnKVxuY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wIC52YWx1ZScpXG5jb25zdCBtYXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWF4JylcbmNvbnN0IG1pbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW4nKVxuY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24nKVxuY29uc3QgdGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aW1lJylcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJylcbmNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVscy1saWtlJylcbmNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZCcpXG5jb25zdCBzdW5SaXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1biAucmlzZScpXG5jb25zdCBzdW5TZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VuIC5zZXQnKVxuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpXG5cbmZ1bmN0aW9uIGdldElucHV0ICgpIHtcbiAgcmV0dXJuIGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInRleHRcIl0nKS52YWx1ZVxufVxuXG5mdW5jdGlvbiBjbGVhckZvcm0gKCkge1xuICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJykudmFsdWUgPSAnJ1xufVxuXG4vLyBjb252ZXJ0cyBjdXJyZW50IHRpbWUgKG9yIHRhcmdldCB0aW1lKSBmcm9tIGxvY2FsIHRpbWV6b25lIHRvIHRhcmdldCBvZmZzZXRzIHRpbWV6b25lXG5mdW5jdGlvbiBnZXRMb2NhdGlvbkRhdGUgKG9mZnNldCwgZGF0ZSA9IG5ldyBEYXRlKCkpIHtcbiAgY29uc3QgbG9jYWxUaW1lID0gZGF0ZS5nZXRUaW1lKClcbiAgY29uc3QgbG9jYWxPZmZzZXQgPSBkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCkgKiA2MDAwMFxuICBjb25zdCB1dGMgPSBsb2NhbFRpbWUgKyBsb2NhbE9mZnNldFxuICBjb25zdCBsb2NhdGlvblRpbWUgPSB1dGMgKyAob2Zmc2V0ICogMTAwMClcbiAgcmV0dXJuIG5ldyBEYXRlKGxvY2F0aW9uVGltZSlcbn1cblxuZnVuY3Rpb24gc2hvcnREYXRlIChkYXRlKSB7XG4gIGNvbnN0IHRpbWUgPSBkYXRlLnRvTG9jYWxlU3RyaW5nKCdlbi1HQicsIHsgdGltZVN0eWxlOiAnc2hvcnQnIH0pXG4gIGlmICh0aW1lLnN1YnN0cigwLCAxKSA9PT0gJzAnKSB7XG4gICAgcmV0dXJuIHRpbWUuc3Vic3RyKDEpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRpbWVcbiAgfVxufVxuXG5mdW5jdGlvbiB1bml4RGF0ZSAodW5peCkge1xuICByZXR1cm4gbmV3IERhdGUoTnVtYmVyKHVuaXgpICogMTAwMClcbn1cblxuZnVuY3Rpb24gYmV0d2VlbiAodmFsLCBhLCBiKSB7XG4gIHJldHVybiAodmFsID49IGEgJiYgdmFsIDw9IGIpXG59XG5cbi8vIHJldHVybnMgZGVzY3JpcHRpb24gb2Ygd2luZCBjb25kaXRpb25zIHVzaW5nIEJlYXVmb3J0IHdpbmQgY2hhcnQgZGVzY3JpcHRvcnNcbmZ1bmN0aW9uIGdldFdpbmRDb25kaXRpb24gKHNwZWVkLCBtZXRyaWM9dHJ1ZSkge1xuICAvLyBub3JtYWxpemVzIHRvIG1waFxuICBpZiAobWV0cmljKSBzcGVlZCA9IHNwZWVkIC8gMC40NDcwNFxuICBzcGVlZCA9IE1hdGgucm91bmQoc3BlZWQpXG4gIGxldCB3aW5kID0gJydcblxuICBpZiAoc3BlZWQgPT09IDApIHtcbiAgICB3aW5kID0gJ2NhbG0nXG4gIH0gZWxzZSBpZiAoYmV0d2VlbihzcGVlZCwgMSwgMykpIHtcbiAgICB3aW5kID0gJ2xpZ2h0IGFpcidcbiAgfSBlbHNlIGlmIChiZXR3ZWVuKHNwZWVkLCA0LCA3KSkge1xuICAgIHdpbmQgPSAnbGlnaHQgYnJlZXplJ1xuICB9IGVsc2UgaWYgKGJldHdlZW4oc3BlZWQsIDgsIDEyKSkge1xuICAgIHdpbmQgPSAnZ2VudGxlIGJyZWV6ZSdcbiAgfSBlbHNlIGlmIChiZXR3ZWVuKHNwZWVkLCAxMywgMTgpKSB7XG4gICAgd2luZCA9ICdtb2RlcmF0ZSBicmVlemUnXG4gIH0gZWxzZSBpZiAoYmV0d2VlbihzcGVlZCwgMTksIDI0KSkge1xuICAgIHdpbmQgPSAnZnJlc2ggYnJlZXplJ1xuICB9IGVsc2UgaWYgKGJldHdlZW4oc3BlZWQsIDI1LCAzMSkpIHtcbiAgICB3aW5kID0gJ3N0cm9uZyBicmVlemUnXG4gIH0gZWxzZSBpZiAoYmV0d2VlbihzcGVlZCwgMzIsIDM4KSkge1xuICAgIHdpbmQgPSAnbmVhciBnYWxlJ1xuICB9IGVsc2UgaWYgKGJldHdlZW4oc3BlZWQsIDM5LCA0NikpIHtcbiAgICB3aW5kID0gJ2dhbGUnXG4gIH0gZWxzZSBpZiAoYmV0d2VlbihzcGVlZCwgNDcsIDU0KSkge1xuICAgIHdpbmQgPSAnc2V2ZXJlIGdhbGUnXG4gIH0gZWxzZSBpZiAoYmV0d2VlbihzcGVlZCwgNTUsIDYzKSkge1xuICAgIHdpbmQgPSAnc3Rvcm0nXG4gIH0gZWxzZSBpZiAoYmV0d2VlbihzcGVlZCwgNjQsIDczKSkge1xuICAgIHdpbmQgPSAndmlvbGVudCBzdG9ybSdcbiAgfSBlbHNlIGlmIChiZXR3ZWVuKHNwZWVkLCA3NCwgOTk5KSkge1xuICAgIHdpbmQgPSAnaHVycmljYW5lJ1xuICB9XG4gIHJldHVybiB3aW5kXG59XG5cbmZ1bmN0aW9uIGZpbGxJbmZvIChkYXRhKSB7XG4gIHRlbXAuaW5uZXJIVE1MID0gTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcClcbiAgbWF4LmlubmVySFRNTCA9IE1hdGgucm91bmQoZGF0YS5tYWluLnRlbXBfbWF4KVxuICBtaW4uaW5uZXJIVE1MID0gTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcF9taW4pXG4gIGxvY2F0aW9uLmlubmVySFRNTCA9IGAke2RhdGEubmFtZX0sICR7ZGF0YS5zeXMuY291bnRyeX1gXG4gIHRpbWUuaW5uZXJIVE1MID0gYCR7c2hvcnREYXRlKGdldExvY2F0aW9uRGF0ZShOdW1iZXIoZGF0YS50aW1lem9uZSkpKX1gXG4gIGRlc2NyaXB0aW9uLmlubmVySFRNTCA9IGAke2RhdGEud2VhdGhlclsnMCddLmRlc2NyaXB0aW9ufWBcbiAgZmVlbHNMaWtlLmlubmVySFRNTCA9IGBmZWVscyBsaWtlICR7TWF0aC5yb3VuZChkYXRhLm1haW4uZmVlbHNfbGlrZSl9YFxuICB3aW5kLmlubmVySFRNTCA9IGdldFdpbmRDb25kaXRpb24oTnVtYmVyKGRhdGEud2luZC5zcGVlZCkpXG4gIHN1blJpc2UuaW5uZXJIVE1MID0gc2hvcnREYXRlKGdldExvY2F0aW9uRGF0ZShkYXRhLnRpbWV6b25lLCB1bml4RGF0ZShkYXRhLnN5cy5zdW5yaXNlKSkpXG4gIHN1blNldC5pbm5lckhUTUwgPSBzaG9ydERhdGUoZ2V0TG9jYXRpb25EYXRlKGRhdGEudGltZXpvbmUsIHVuaXhEYXRlKGRhdGEuc3lzLnN1bnNldCkpKVxufVxuXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyIChjaXR5KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZhcHBpZD0ke3Byb2Nlc3MuZW52LldFQVRIRVJfS0VZfWAsIHsgbW9kZTogJ2NvcnMnIH0pXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgcmV0dXJuIGRhdGFcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBsb2FkV2VhdGhlciAoY2l0eSkge1xuICB0cnkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKGNpdHkpXG4gICAgZmlsbEluZm8oZGF0YSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgfVxufVxuXG5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJzdWJtaXRcIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gIGNvbnN0IHF1ZXJ5ID0gZ2V0SW5wdXQoKVxuICBpZiAocXVlcnkpIHtcbiAgICBsb2FkV2VhdGhlcihxdWVyeSlcbiAgICBjbGVhckZvcm0oKVxuICB9XG59KVxuXG5sb2FkV2VhdGhlcignQnVuYnVyeScpXG4iXSwic291cmNlUm9vdCI6IiJ9