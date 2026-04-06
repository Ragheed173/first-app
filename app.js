const requestSenderAxios = require('./requestSenderAxios');
const chalk = require('chalk');

async function main() {
    // const data = await requestSenderAxios.sendRequest();
    // console.log('data in app.js:', data);
    // return data;
    console.log('hello');
    console.log(chalk.red('hello'));
}

main();