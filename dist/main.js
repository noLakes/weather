/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${"c0d4eebad76aab90acc51a6c3322ff91"}`, { mode: 'cors' })
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQ0FBc0MsaUNBQWlDO0FBQ3ZFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNGQUFzRixLQUFLLHNCQUFzQixrQ0FBdUIsQ0FBQyxJQUFJLGVBQWU7QUFDNUo7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0uc2VhcmNoJylcbmNvbnN0IHRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMi50ZW1wJylcbmNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDQubG9jYXRpb24nKVxuY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDQuZmVlbHMtbGlrZScpXG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSlcblxuZnVuY3Rpb24gZ2V0SW5wdXQgKCkge1xuICByZXR1cm4gZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwidGV4dFwiXScpLnZhbHVlXG59XG5cbmZ1bmN0aW9uIGZpbGxJbmZvIChkYXRhKSB7XG4gIHRlbXAuaW5uZXJIVE1MID0gTWF0aC5yb3VuZChkYXRhLm1haW4udGVtcClcbiAgZmVlbHNMaWtlLmlubmVySFRNTCA9IGBmZWVscyBsaWtlICR7TWF0aC5yb3VuZChkYXRhLm1haW4uZmVlbHNfbGlrZSl9YFxuICBsb2NhdGlvbi5pbm5lckhUTUwgPSBkYXRhLm5hbWVcbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlciAoY2l0eSkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSZ1bml0cz1tZXRyaWMmYXBwaWQ9JHtwcm9jZXNzLmVudi5XRUFUSEVSX0tFWX1gLCB7IG1vZGU6ICdjb3JzJyB9KVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgIHJldHVybiBkYXRhXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpXG4gIH1cbn1cblxuZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICBjb25zdCBxdWVyeSA9IGdldElucHV0KClcbiAgaWYgKHF1ZXJ5KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRXZWF0aGVyKHF1ZXJ5KVxuICAgICAgZmlsbEluZm8oZGF0YSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxuICB9XG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==