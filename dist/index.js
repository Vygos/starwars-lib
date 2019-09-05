"use strict";

var _starwarsNames = require('./starwars-names.json');

var _starwarsNames2 = _interopRequireDefault(_starwarsNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uniqueRandomArray = require('unique-random-array');

module.exports = {
    all: _starwarsNames2.default,
    random: uniqueRandomArray(_starwarsNames2.default)
};