const pug = require('pug');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, './work.json');

fs.readFile(filePath, 'UTF-8', (err, data) => {
    const json = JSON.parse(data);

    const compiledFunc = pug.compileFile('./templates/container.pug');
    const output = compiledFunc({
        stats: json.stats,
        tests: json.tests
    });

    const outputPath = path.join(__dirname, './outout.html');

    fs.writeFile(outputPath, output, (err) => {
        if (err) {
            console.log('OOPS');
        } else {
            console.log('DONE');
        }
    })
})
