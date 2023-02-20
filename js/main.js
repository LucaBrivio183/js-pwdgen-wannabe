//strict rules

'use strict'

// initialize firstName variable from first user prompt

const firstName = prompt('First Name');

console.log ('First Name:',firstName);


// initialize lastName variable from second user prompt

const lastName = prompt('Last Name');

console.log ('Last Name:',lastName);

// initialize favColor variable from third user prompt

const favColor = prompt('Favorite Color');

console.log ('Favorite Color:',favColor);

//show on screen generated super strong password

document.querySelector('h1').innerHTML = `${firstName}${lastName}${favColor}89`

console.log ('Super Strong Password:',`${firstName}${lastName}${favColor}89`);


