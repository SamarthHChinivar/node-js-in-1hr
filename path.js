const path = require('path');

const a = path.basename('./world/sparta');
console.log(a);

const b = path.extname('./world/sparta.jsx');
console.log(b);

const c = path.dirname('./world/continents/countries/states');
console.log(c);

d = 'tendulkar';
const e = path.join('./world/continents/countries/states', d);
console.log(e);