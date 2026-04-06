const http = require('http');
const https = require('https');

function sendRequest() {

    dataToReturn = '';

    const options = {
        hostname: 'localhost',
        path: '/api/users',
        port: 3000,
        method: 'GET',
    };

const request = http.request(options, (response) => {
    console.log('response received from server');
    fulldata = '';
    
    response.on('data', (chunk) => {
        fulldata += chunk;
    });

    response.on('end', () => {
        dataToReturn = fulldata;
    });
});
    request.end();
    console.log('done');
    return dataToReturn;
}

function sendJsonRequest() {
    const options = {
        hostname: 'httpbin.org',
        path: '/json',
        port: 80,
        method: 'GET'
    };

    return new Promise((resolve, reject) => {
        const request = http.request(options, (response) => {

            console.log('getting JSON data from server');
            let fulldata = '';

            response.on('data', (chunk) => {
                fulldata += chunk;
            });

            response.on('end', () => {
                resolve(fulldata);
            });

            response.on('error', (err) => {
                console.error('Error :', err);
                reject(err);
            });
        });

        request.end();
    });
}

function sendAsyncJsonRequest() {
    const options = {
        hostname: 'httpbin.org',
        path: '/json',
        method: 'GET'
    };

    return new Promise((resolve, reject) => {

    const request = http.request(options, (response) => {

        let fulldata = '';

        response.on('data', (chunk) => {
            fulldata += chunk;
        });

        response.on('end', () => {
            resolve(fulldata);
        });

        response.on('error', (err) => {
            console.error('Error :', err);
            reject(err);

        });
    });
    request.end();
});
}
module.exports = {
    sendRequest: sendRequest,
    sendJsonRequest: sendJsonRequest,
    sendAsyncJsonRequest: sendAsyncJsonRequest
}