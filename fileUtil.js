const fs = require('fs');

function listdir(path) {
    return fs.readdirSync(path);
}

function readfile(path) {
    return fs.readFileSync(path, 'utf-8');
}

module.exports = {
    listdir: listdir,
    readfile: readfile
}