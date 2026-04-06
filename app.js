const requestSenderAxios = require('./requestSenderAxios');

async function main() {
    const data = await requestSenderAxios.sendRequest();
    console.log('data in app.js:', data);
    return data;
}

main();