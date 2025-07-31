Node.js juga memiliki pola event-driven atau memiliki alur berdasarkan suatu kejadian. Seperti contoh : 
    -Ketika berjalan kemudian hujan, gunakan payung
    -Ketika ponsel berdering, angkatan ponsel
    -Ketika merasa lapar, makan

Dengan cara tradisional (imperatif). Agar komputer dapat melakukan sesuatu kita perlu menuliskan intruksi secara runtun beserta langkah-langkahnya, kemudian komputer membaca kode secara urut seperti yang telah kita definisikan.

Jika polanya masih seperti itu, kita akan sulit membangun program untuk menangani suatu kejadian, untuk maka harus ada yang namanya pola event-driven

Di node.js kita bisa menggunakan EventEmitter class dari modul events untuk mengelola suatu kejadian

# Menggunakan EventEmitter
    const { EventEmitter } = require('events');

    const myEventEmitter = new EventEmitter();

# Fungsi on() dan emit() pada EventEmitter
    myEventEmitter.on('event', driven)
Berfungsi untuk menginisiasi kejadiannya, kalo event bakal ngelakuin apa (driven)

    MyEventEmitter.emit('event', param driven);
Berfungsi untuk membangkitkan event yang sudah diinisiasi