// returns the "object" 
const xyz = require('./people'); // or import * as xyz from './people'
// import piplup, and ages as eiges
const {piplup, ages: eiges} = require('./people'); // or import { piplup, ages as eiges } from './people.js';

/* to import a library, on the library file, it must be explicitly said to export what we want 
once done, the "object" can be used */
console.log(xyz);
console.log(typeof(xyz));

console.log(piplup);
console.log(eiges);

// node js also has some modules built in.
const os = require('os'); // or import os from 'os'

console.log(os);
