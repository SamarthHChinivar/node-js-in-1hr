const fs = require('fs');

const a = 'Your the Best';

fs.writeFile('./sample.txt', a, () => {
    console.log('File written');
});

console.log('This is a test');

// File based, Build in, Third party  