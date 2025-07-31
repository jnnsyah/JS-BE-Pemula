Node.js merupakan JavaScript runtime yang dapat mengeksekusi kode js di luar browser. Diciptakan pada 2009 oleh Ryan Dahl, dengan Node.js JavaScript menjadi bahasa yang bisa All-Around (Jadi FE, BE, di mobile di dekstop di IOT).

# Membuat Project Node pertama
1. Membuat folder yang akan dijadikan project Node
2. Inisiasi project dengan command $npm init di terminal
3. Isi seluruh pertanyaan yang ada untuk mengisi file package.json
4. Konfirmasi
5. Voila! berhasil wok bikin project node

# Menjalankan JS menggunakan Node.js
1. Menggunakan Node.js REPL (Read-Eval-Print Loop)
Dijalankan di terminal dengan mengetikan $node, berfungsi untuk membaca kode JavaScript, mengevaluasi kode, kemudian mencetak hasil evaluasinya ke console. Kemudian loop, artinya prosesnya selalu berulang.

tips : 
    - tuliskan perintah > .editor untuk menuliskan kode js sebagai editor mode
    - tuliskan perintah > .exit untuk keluar atau CTRL+C

2. Menjalankan file .js di node
Untuk menjalankan file .js menggunakan node kita bisa menggunakan terminal juga dengan perintah $node nama_file.js

# Node.js Global Object
Merupakan semua objek yang berisi semua hal yang bisa diakses di mana saja dalam kode Node.js, tanpa peru import. Ada beberapa objek yang tidak ada di ad JS Native namun ditambahkan oleh Node.js seperti :
    1. global
    2. process
    3. console
    4. setTimeout, clearTimeout, setInterval, clearInterval
atau bisa lihat lengkapnya dengan mengetikan > Object.getOwnPropertyNames(global); di REPL. Objek-objek tersebut dinamakan true-globals. Kemudian ada juga yang namanya pseudo-global atau objek global semu, objek yang tidak ada di Object.getOwnPropertyNames(global), karna bukan member langsung dari objek global, melainkan diturunkan dari cakupan module, seperti contoh :
    1. module : untuk sistem modularisasi di Node.js
    2. _filename : mendapatkan lokasi berkas JS yang dieksekusi
    3. _dirname : mendapatkan root direktori dari berkas js yang dieksekusi
    4. require : untuk mengimpor module JavaScript