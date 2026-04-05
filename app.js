const requestSender = require('./requestSender');

async function main() {
    const fulldata = await requestSender.sendJsonRequest();
    console.log('data in app.js: ' + fulldata);
}

main();