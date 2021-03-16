/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${"c0d4eebad76aab90acc51a6c3322ff91"}`, { mode: 'cors' })
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvRkFBb0YsS0FBSyxzQkFBc0Isa0NBQXVCLENBQUMsSUFBSSxlQUFlO0FBQzFKO0FBQ0E7QUFDQSx1QkFBdUIsZUFBZTtBQUN0Qyw2QkFBNkIscUJBQXFCO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybS5zZWFyY2gnKVxuY29uc3QgdGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3AudGVtcCcpXG5cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IGUucHJldmVudERlZmF1bHQoKSlcblxuZnVuY3Rpb24gZ2V0Q2l0eSAoKSB7XG4gIHJldHVybiBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJykudmFsdWVcbn1cblxuZnVuY3Rpb24gdXBkYXRlVGVtcCAodmFsKSB7XG4gIHRlbXAuaW5uZXJIVE1MID0gdmFsXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIgKGNpdHkpIHtcbiAgaWYgKCFjaXR5KSByZXR1cm5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZhcHBpZD0ke3Byb2Nlc3MuZW52LldFQVRIRVJfS0VZfWAsIHsgbW9kZTogJ2NvcnMnIH0pXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgY29uc29sZS5sb2coZGF0YSlcbiAgY29uc29sZS5sb2coYFRlbXA6ICR7ZGF0YS5tYWluLnRlbXB9YClcbiAgY29uc29sZS5sb2coYEZlZWxzIGxpa2U6ICR7ZGF0YS5tYWluLmZlZWxzX2xpa2V9YClcbn1cblxuZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICBjb25zdCBxdWVyeSA9IGdldENpdHkoKVxuICBpZiAocXVlcnkpIHtcbiAgICBnZXRXZWF0aGVyKHF1ZXJ5KVxuICB9XG59KVxuIl0sInNvdXJjZVJvb3QiOiIifQ==