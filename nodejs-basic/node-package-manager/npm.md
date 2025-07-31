Node Package Manager bisa dibilang mirip seperti playstore-nya Node untuk kita bisa menginstall modul-modul eksternal ke project kita. Modul yang di install akan tersimpan di folder node_modules projek.

# Jenis Pemasangan Modul
1. Global : modul akan tersimpan di folder node_modules pada Node.js di laptop
2. Lokal : modul akan tersimpan di folder node_modules pada project kita secara lokal

# Perintah
$ npm install modul
$ npm uninstall modul

# NPM untuk menjalankan script di package.json
Kita juga bisa menggunakan npm untuk menjalankan script yang terdapat di objek package.json, contoh di package.json terdapat 
"scripts": {
    "start-dev": "NODE_ENV=development node app.js",
    "start": "NODE_ENV=production node app.js"
  }

maka kita bisa menjalankan
    $ npm run nama-script
    $ npm run start-dev > menjalankan perintah "NODE_ENV=development node app.js"