const http = require('http');

const PORT = 3000;

counter = 0;

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const server = http.createServer((request, response) => {
    console.log("Request URL: " + request.url);
    console.log("Request Method: " + request.method);
    
    if (request.url === '/' && request.method === 'GET') {
        counter++;
        console.log("Request received at");
        response.end(`<html><body><h1>Hello</h1></body></html>`);
    } 

    else if (request.url === '/api/users' && request.method === 'GET') {
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(users));
    }

    else if (request.url === '/api/users/1' && request.method === 'GET') {
        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(users[0]));
    }

    else if (request.url === '/api/users' && request.method === 'POST') {
        console.log("creating new user");
    }

    else if (request.url === '/test') {
        response.end(`<html><body><h1>Test Page</h1></body></html>`);
    }
    else{
        response.statusCode = 404;
        response.end(`<html><body><h1>404</h1></body></html>`);
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
