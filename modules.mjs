// returns the "object" 
import * as xyz from './people.mjs';
// import piplup, and ages as eiges
import { piplup, ages as eiges } from './people.mjs';

/* to import a library, on the library file, it must be explicitly said to export what we want 
once done, the "object" can be used */
console.log(xyz);
console.log(typeof(xyz));

console.log(piplup);
console.log(eiges);

// node js also has some modules built in.
import os from 'os'; // or import os from 'os'

// prints all of the object
// console.log(os);

// prints the current platform (windows)
console.log(os.platform()); 
// prints the current home directory.
console.log(os.homedir());
