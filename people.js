const people = ['yoshi', 'ryu', 'chun-li', 'mario'];
const asdfjkl = [20, 25, 30, 35];

console.log(people);

// this is how you export different objects, the a: b syntax is to export b as the tag a, if only b is put, 
// the tag is the same as the object name
module.exports = {
	piplup: people,
	ages: asdfjkl
};

