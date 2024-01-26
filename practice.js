// hello world
console.log('hello world');

// Global object
console.log(global);

// whatever is in this, runs after a set time in ms
global.setTimeout(() => {
	console.log('in the timeout');
	clearInterval(int);
}, 3100);

const int = setInterval(() => {
	console.log('in the interval');	
}, 1000);

// folder path of current js file
console.log(__dirname);
// file path of current js file
console.log(__filename);


