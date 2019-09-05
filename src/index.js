"use strict";

import starWarsNames from './starwars-names.json';
const uniqueRandomArray = require('unique-random-array');


module.exports = {
    all: starWarsNames,
    random : uniqueRandomArray(starWarsNames)
}
