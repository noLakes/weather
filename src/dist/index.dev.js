"use strict";

var form = document.querySelector('form.search');
var temp = document.querySelector('.temp');
var max = document.querySelector('.max');
var min = document.querySelector('.min');
var location = document.querySelector('.location');
var time = document.querySelector('.time');
var description = document.querySelector('.description');
var feelsLike = document.querySelector('.feels-like');
var wind = document.querySelector('.wind');
var sunRise = document.querySelector('.sunrise');
var sunSet = document.querySelector('.sunset');
form.addEventListener('submit', function (e) {
  return e.preventDefault();
});

function getInput() {
  return form.querySelector('input[type="text"]').value;
}

function clearForm() {
  form.querySelector('input[type="text"]').value = '';
} // converts current time (or target time) from local timezone to target offsets timezone


function getLocationDate(offset) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();
  var localTime = date.getTime();
  var localOffset = date.getTimezoneOffset() * 60000;
  var utc = localTime + localOffset;
  var locationTime = utc + offset * 1000;
  return new Date(locationTime);
}

function shortDate(date) {
  return date.toLocaleString('en', {
    timeStyle: 'short'
  });
}

function unixDate(unix) {
  return new Date(Number(unix) * 1000);
}

function between(val, a, b) {
  return val >= a && val <= b;
} // returns description of wind conditions using Beaufort wind chart descriptors


function getWindCondition(speed) {
  var metric = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  // normalizes to mph
  if (metric) speed = speed / 0.44704;
  speed = Math.round(speed);
  var wind = '';

  if (speed === 0) {
    wind = 'calm';
  } else if (between(speed, 1, 3)) {
    wind = 'light air';
  } else if (between(speed, 4, 7)) {
    wind = 'light breeze';
  } else if (between(speed, 8, 12)) {
    wind = 'gentle breeze';
  } else if (between(speed, 13, 18)) {
    wind = 'moderate breeze';
  } else if (between(speed, 19, 24)) {
    wind = 'fresh breeze';
  } else if (between(speed, 25, 31)) {
    wind = 'strong breeze';
  } else if (between(speed, 32, 38)) {
    wind = 'near gale';
  } else if (between(speed, 39, 46)) {
    wind = 'gale';
  } else if (between(speed, 47, 54)) {
    wind = 'severe gale';
  } else if (between(speed, 55, 63)) {
    wind = 'storm';
  } else if (between(speed, 64, 73)) {
    wind = 'violent storm';
  } else if (between(speed, 74, 999)) {
    wind = 'hurricane';
  }

  return wind;
}

function fillInfo(data) {
  temp.innerHTML = Math.round(data.main.temp) + '°';
  max.innerHTML = Math.round(data.main.temp_max);
  min.innerHTML = Math.round(data.main.temp_min);
  location.innerHTML = "".concat(data.name, ", ").concat(data.sys.country);
  time.innerHTML = "".concat(shortDate(getLocationDate(Number(data.timezone))));
  description.innerHTML = "".concat(data.weather['0'].description);
  feelsLike.innerHTML = "feels like ".concat(Math.round(data.main.feels_like));
  wind.innerHTML = getWindCondition(Number(data.wind.speed));
  sunRise.innerHTML = shortDate(getLocationDate(data.timezone, unixDate(data.sys.sunrise)));
  sunSet.innerHTML = shortDate(getLocationDate(data.timezone, unixDate(data.sys.sunset)));
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