const http = require('http');
const path = require('path');

function sendRequest() {
    const options = {
        hostname: 'httpbin.org',
        path: '/get',
        port: 80,
        method: 'GET',
    };

const request = http.request(options, (response) => {
    console.log('getting data from server');
    let data = '';
    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        console.log(data);
    });
});
request.end();
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
        port: 80,
        method: 'GET'
    };
    dataToReturn = '';

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