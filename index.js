const http = require('http');
const fs = require('fs');

const port = 2000;
const host = 'localhost';
const home = fs.readFileSync('./index.html');

// const batman = fs.readFileSync('./superheros/batman.html');
// const superman = fs.readFileSync('./superheros/superman.html');

console.log(__dirname);
console.log(__filename);

const server = http.createServer((req, res) => {
    console.log(req.url);

    if(req.url === '/'){
        return res.end(home);
    }

    if(req.url === '/about'){
        return res.end('<h1>About Page</h1>');
    }

    if(req.url === '/contact'){
        return res.end('<h1>Contact Page</h1> <br/> <a href="https://samarth-portfolio-website.000webhostapp.com" target="_blank"> Samarth H Chinivar </a>');
    }

    // if(req.url === '/batman'){
    //     return res.end(batman);

    // }

    // if(req.url === '/superman'){
    //     return res.end(superman);
    // }
    
    else{
        return res.end('<h1>404 Page Not Found</h1>');
    }
});



server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});