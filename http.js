const http = require('http');
// const fs = require('fs');

const port = 2000;
const host = 'localhost';
// const home = fs.readFileSync('index.html');

// console.log(__dirname);
// console.log(__filename);

const server = http.createServer((req, res) => {
    console.log(req.url);

    if(req.url === '/'){
        return res.end(home);
    }

    if(req.url === '/about'){
        return res.end('<h1>About Page</h1>');
    }

    if(req.url === '/contact'){
        return res.end('<h1>Contact Page</h1>');
    }

    if(req.url === '/service'){
        return res.end('<h1>Service Page</h1>');
    }
    
    else{
        return res.end('<h1>404 Page Not Found</h1>');
    }
});



server.listen(port, host, () => {
    console.log(`Server is running on ${host} on port ${port}`);
});