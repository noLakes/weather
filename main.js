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
const sunRise = document.querySelector('.sunrise')
const sunSet = document.querySelector('.sunset')

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
  return date.toLocaleString('en', { timeStyle: 'short' })
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
  temp.innerHTML = Math.round(data.main.temp) + '°'
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

console.log(between(3,2,4))

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MscUJBQXFCO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsVUFBVSxJQUFJLGlCQUFpQjtBQUN6RCxzQkFBc0Isa0RBQWtEO0FBQ3hFLDZCQUE2Qiw4QkFBOEI7QUFDM0Qsc0NBQXNDLGlDQUFpQztBQUN2RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0ZBQXNGLEtBQUssc0JBQXNCLGtDQUF1QixDQUFDLElBQUksZUFBZTtBQUM1SjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybS5zZWFyY2gnKVxuY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wJylcbmNvbnN0IG1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYXgnKVxuY29uc3QgbWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbicpXG5jb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbicpXG5jb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWUnKVxuY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKVxuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWxzLWxpa2UnKVxuY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kJylcbmNvbnN0IHN1blJpc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3VucmlzZScpXG5jb25zdCBzdW5TZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Vuc2V0JylcblxuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpKVxuXG5mdW5jdGlvbiBnZXRJbnB1dCAoKSB7XG4gIHJldHVybiBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJykudmFsdWVcbn1cblxuZnVuY3Rpb24gY2xlYXJGb3JtICgpIHtcbiAgZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpLnZhbHVlID0gJydcbn1cblxuLy8gY29udmVydHMgY3VycmVudCB0aW1lIChvciB0YXJnZXQgdGltZSkgZnJvbSBsb2NhbCB0aW1lem9uZSB0byB0YXJnZXQgb2Zmc2V0cyB0aW1lem9uZVxuZnVuY3Rpb24gZ2V0TG9jYXRpb25EYXRlIChvZmZzZXQsIGRhdGUgPSBuZXcgRGF0ZSgpKSB7XG4gIGNvbnN0IGxvY2FsVGltZSA9IGRhdGUuZ2V0VGltZSgpXG4gIGNvbnN0IGxvY2FsT2Zmc2V0ID0gZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpICogNjAwMDBcbiAgY29uc3QgdXRjID0gbG9jYWxUaW1lICsgbG9jYWxPZmZzZXRcbiAgY29uc3QgbG9jYXRpb25UaW1lID0gdXRjICsgKG9mZnNldCAqIDEwMDApXG4gIHJldHVybiBuZXcgRGF0ZShsb2NhdGlvblRpbWUpXG59XG5cbmZ1bmN0aW9uIHNob3J0RGF0ZSAoZGF0ZSkge1xuICByZXR1cm4gZGF0ZS50b0xvY2FsZVN0cmluZygnZW4nLCB7IHRpbWVTdHlsZTogJ3Nob3J0JyB9KVxufVxuXG5mdW5jdGlvbiB1bml4RGF0ZSAodW5peCkge1xuICByZXR1cm4gbmV3IERhdGUoTnVtYmVyKHVuaXgpICogMTAwMClcbn1cblxuZnVuY3Rpb24gYmV0d2VlbiAodmFsLCBhLCBiKSB7XG4gIHJldHVybiAodmFsID49IGEgJiYgdmFsIDw9IGIpXG59XG5cbi8vIHJldHVybnMgZGVzY3JpcHRpb24gb2Ygd2luZCBjb25kaXRpb25zIHVzaW5nIEJlYXVmb3J0IHdpbmQgY2hhcnQgZGVzY3JpcHRvcnNcbmZ1bmN0aW9uIGdldFdpbmRDb25kaXRpb24gKHNwZWVkLCBtZXRyaWM9dHJ1ZSkge1xuICAvLyBub3JtYWxpemVzIHRvIG1waFxuICBpZiAobWV0cmljKSBzcGVlZCA9IHNwZWVkIC8gMC40NDcwNFxuICBzcGVlZCA9IE1hdGgucm91bmQoc3BlZWQpXG4gIGxldCB3aW5kID0gJydcblxuICBpZiAoc3BlZWQgPT09IDApIHtcbiAgICB3aW5kID0gJ2NhbG0nXG4gIH0gZWxzZSBpZiAoYmV0d2VlbihzcGVlZCwgMSwgMykpIHtcbiAgICB3aW5kID0gJ2xpZ2h0IGFpcidcbiAgfSBlbHNlIGlmIChiZXR3ZWVuKHNwZWVkLCA0LCA3KSkge1xuICAgIHdpbmQgPSAnbGlnaHQgYnJlZXplJ1xuICB9IGVsc2UgaWYgKGJldHdlZW4oc3BlZWQsIDgsIDEyKSkge1xuICAgIHdpbmQgPSAnZ2VudGxlIGJyZWV6ZSdcbiAgfSBlbHNlIGlmIChiZXR3ZWVuKHNwZWVkLCAxMywgMTgpKSB7XG4gICAgd2luZCA9ICdtb2RlcmF0ZSBicmVlemUnXG4gIH0gZWxzZSBpZiAoYmV0d2VlbihzcGVlZCwgMTksIDI0KSkge1xuICAgIHdpbmQgPSAnZnJlc2ggYnJlZXplJ1xuICB9IGVsc2UgaWYgKGJldHdlZW4oc3BlZWQsIDI1LCAzMSkpIHtcbiAgICB3aW5kID0gJ3N0cm9uZyBicmVlemUnXG4gIH0gZWxzZSBpZiAoYmV0d2VlbihzcGVlZCwgMzIsIDM4KSkge1xuICAgIHdpbmQgPSAnbmVhciBnYWxlJ1xuICB9IGVsc2UgaWYgKGJldHdlZW4oc3BlZWQsIDM5LCA0NikpIHtcbiAgICB3aW5kID0gJ2dhbGUnXG4gIH0gZWxzZSBpZiAoYmV0d2VlbihzcGVlZCwgNDcsIDU0KSkge1xuICAgIHdpbmQgPSAnc2V2ZXJlIGdhbGUnXG4gIH0gZWxzZSBpZiAoYmV0d2VlbihzcGVlZCwgNTUsIDYzKSkge1xuICAgIHdpbmQgPSAnc3Rvcm0nXG4gIH0gZWxzZSBpZiAoYmV0d2VlbihzcGVlZCwgNjQsIDczKSkge1xuICAgIHdpbmQgPSAndmlvbGVudCBzdG9ybSdcbiAgfSBlbHNlIGlmIChiZXR3ZWVuKHNwZWVkLCA3NCwgOTk5KSkge1xuICAgIHdpbmQgPSAnaHVycmljYW5lJ1xuICB9XG4gIHJldHVybiB3aW5kXG59XG5cbmZ1bmN0aW9uIGZpbGxJbmZvIChkYXRhKSB7XG4gIHRlbXAuaW5uZXJIVE1MID0gTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcCkgKyAnwrAnXG4gIG1heC5pbm5lckhUTUwgPSBNYXRoLnJvdW5kKGRhdGEubWFpbi50ZW1wX21heClcbiAgbWluLmlubmVySFRNTCA9IE1hdGgucm91bmQoZGF0YS5tYWluLnRlbXBfbWluKVxuICBsb2NhdGlvbi5pbm5lckhUTUwgPSBgJHtkYXRhLm5hbWV9LCAke2RhdGEuc3lzLmNvdW50cnl9YFxuICB0aW1lLmlubmVySFRNTCA9IGAke3Nob3J0RGF0ZShnZXRMb2NhdGlvbkRhdGUoTnVtYmVyKGRhdGEudGltZXpvbmUpKSl9YFxuICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBgJHtkYXRhLndlYXRoZXJbJzAnXS5kZXNjcmlwdGlvbn1gXG4gIGZlZWxzTGlrZS5pbm5lckhUTUwgPSBgZmVlbHMgbGlrZSAke01hdGgucm91bmQoZGF0YS5tYWluLmZlZWxzX2xpa2UpfWBcbiAgd2luZC5pbm5lckhUTUwgPSBnZXRXaW5kQ29uZGl0aW9uKE51bWJlcihkYXRhLndpbmQuc3BlZWQpKVxuICBzdW5SaXNlLmlubmVySFRNTCA9IHNob3J0RGF0ZShnZXRMb2NhdGlvbkRhdGUoZGF0YS50aW1lem9uZSwgdW5peERhdGUoZGF0YS5zeXMuc3VucmlzZSkpKVxuICBzdW5TZXQuaW5uZXJIVE1MID0gc2hvcnREYXRlKGdldExvY2F0aW9uRGF0ZShkYXRhLnRpbWV6b25lLCB1bml4RGF0ZShkYXRhLnN5cy5zdW5zZXQpKSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlciAoY2l0eSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmYXBwaWQ9JHtwcm9jZXNzLmVudi5XRUFUSEVSX0tFWX1gLCB7IG1vZGU6ICdjb3JzJyB9KVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIHJldHVybiBkYXRhXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpXG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gbG9hZFdlYXRoZXIgKGNpdHkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0V2VhdGhlcihjaXR5KVxuICAgIGZpbGxJbmZvKGRhdGEpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpXG4gIH1cbn1cblxuZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICBjb25zdCBxdWVyeSA9IGdldElucHV0KClcbiAgaWYgKHF1ZXJ5KSB7XG4gICAgbG9hZFdlYXRoZXIocXVlcnkpXG4gICAgY2xlYXJGb3JtKClcbiAgfVxufSlcblxubG9hZFdlYXRoZXIoJ0J1bmJ1cnknKVxuXG5jb25zb2xlLmxvZyhiZXR3ZWVuKDMsMiw0KSlcbiJdLCJzb3VyY2VSb290IjoiIn0=