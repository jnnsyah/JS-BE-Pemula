Merupakan teknik pemisahan kode menjadi modul-modul yang bersifat independen namun bisa saling digunakan untuk membuat program kompleks.

# Export dan Impor
Untuk menghubungkan modul-modul yang terpisah kita bisa memanfaatkan teknik export dan import
1. Export
Menggunakan 
    - module.exports = var/func
    - module.exports = { var/func, var/func, ... }

2. Import
menggunakan require('modul')
    - const http = require('http');

# Jenis-jenis modul
1. Core Modules : Modul bawaan node.js
2. Local Modules : Modul buatan sendiri, modul yang ada di projek kita
3. Third-Party Modules : Modul pihak ketiga, bisa di-install melalui NPM