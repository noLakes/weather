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

function clearForm () {
  form.querySelector('input[type="text"]').value = ''
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0NBQXNDLGlDQUFpQztBQUN2RTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzRkFBc0YsS0FBSyxzQkFBc0Isa0NBQXVCLENBQUMsSUFBSSxlQUFlO0FBQzVKO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtLnNlYXJjaCcpXG5jb25zdCB0ZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDIudGVtcCcpXG5jb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2g0LmxvY2F0aW9uJylcbmNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2g0LmZlZWxzLWxpa2UnKVxuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiBlLnByZXZlbnREZWZhdWx0KCkpXG5cbmZ1bmN0aW9uIGdldElucHV0ICgpIHtcbiAgcmV0dXJuIGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInRleHRcIl0nKS52YWx1ZVxufVxuXG5mdW5jdGlvbiBjbGVhckZvcm0gKCkge1xuICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJykudmFsdWUgPSAnJ1xufVxuXG5mdW5jdGlvbiBmaWxsSW5mbyAoZGF0YSkge1xuICB0ZW1wLmlubmVySFRNTCA9IE1hdGgucm91bmQoZGF0YS5tYWluLnRlbXApXG4gIGZlZWxzTGlrZS5pbm5lckhUTUwgPSBgZmVlbHMgbGlrZSAke01hdGgucm91bmQoZGF0YS5tYWluLmZlZWxzX2xpa2UpfWBcbiAgbG9jYXRpb24uaW5uZXJIVE1MID0gZGF0YS5uYW1lXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIgKGNpdHkpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7Y2l0eX0mdW5pdHM9bWV0cmljJmFwcGlkPSR7cHJvY2Vzcy5lbnYuV0VBVEhFUl9LRVl9YCwgeyBtb2RlOiAnY29ycycgfSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgY29uc29sZS5sb2coZGF0YSlcbiAgICByZXR1cm4gZGF0YVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRXZWF0aGVyIChjaXR5KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldFdlYXRoZXIoY2l0eSlcbiAgICBmaWxsSW5mbyhkYXRhKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICB9XG59XG5cbmZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgY29uc3QgcXVlcnkgPSBnZXRJbnB1dCgpXG4gIGlmIChxdWVyeSkge1xuICAgIGxvYWRXZWF0aGVyKHF1ZXJ5KVxuICAgIGNsZWFyRm9ybSgpXG4gIH1cbn0pXG5cbmxvYWRXZWF0aGVyKCdCdW5idXJ5JylcbiJdLCJzb3VyY2VSb290IjoiIn0=