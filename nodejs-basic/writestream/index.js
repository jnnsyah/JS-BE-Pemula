const fs = require('fs');

const readStream = fs.createReadStream('input.txt', {
    highWaterMark : 15
});

const writeStream = fs.createWriteStream('output.txt');

readStream.on('readable', () => {
    writeStream.write(`${readStream.read()}\n`);
})