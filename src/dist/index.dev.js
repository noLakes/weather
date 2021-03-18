"use strict";

var form = document.querySelector('form.search');
var temp = document.querySelector('h2.temp');
var location = document.querySelector('h4.location');
var feelsLike = document.querySelector('h4.feels-like');
form.addEventListener('submit', function (e) {
  return e.preventDefault();
});

function getInput() {
  return form.querySelector('input[type="text"]').value;
}

function clearForm() {
  form.querySelector('input[type="text"]').value = '';
}

function fillInfo(data) {
  temp.innerHTML = Math.round(data.main.temp);
  feelsLike.innerHTML = "feels like ".concat(Math.round(data.main.feels_like));
  location.innerHTML = data.name;
}

function getWeather(city) {
  var response, data;
  return regeneratorRuntime.async(function getWeather$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&units=metric&appid=").concat(process.env.WEATHER_KEY), {
            mode: 'cors'
          }));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          data = _context.sent;
          console.log(data);
          return _context.abrupt("return", data);

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
}

function loadWeather(city) {
  var data;
  return regeneratorRuntime.async(function loadWeather$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(getWeather(city));

        case 3:
          data = _context2.sent;
          fillInfo(data);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}

form.querySelector('input[type="submit"]').addEventListener('click', function _callee(e) {
  var query;
  return regeneratorRuntime.async(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          query = getInput();

          if (query) {
            loadWeather(query);
            clearForm();
          }

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  });
});
loadWeather('Bunbury');