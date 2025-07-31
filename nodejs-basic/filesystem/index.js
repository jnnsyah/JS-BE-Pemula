const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, 'text.txt');

// Cara Asynchronous
const callbackReadFile = (error, data) => {
    if (error) {
        console.log("Gagal membuka file");
        return;
    }

    console.log("Isi file (Async):", data);
}

console.log("Ini membaca menggunakan Asynchronous");
fs.readFile(filePath, 'utf-8', callbackReadFile);

// Cara Synchronous
const data = fs.readFileSync(filePath, 'utf-8');
console.log("Ini membaca menggunakan cara Synchronous");
console.log("Isi file (Sync):", data);