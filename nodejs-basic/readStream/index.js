const fs = require('fs');
const stream = fs.createReadStream('./yapping.txt', {
  highWaterMark: 10 // baca 10 byte per chunk
});

stream.on('readable', () => {
  readNextChunk();
});

function readNextChunk() {
  const chunk = stream.read();
  if (chunk !== null) {
    console.log(`[CHUNK]: ${chunk.toString()}`);

    // Kasih delay sebelum baca chunk berikutnya
    setTimeout(() => {
      readNextChunk(); // lanjut baca chunk berikutnya
    }, 500);
  }
}

stream.on('end', () => {
    console.log('Sudah selesai baca');
})