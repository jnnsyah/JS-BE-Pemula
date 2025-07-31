writeStream di Node.js digunakan untuk menulis data ke file secara bertahap (streaming). Cocok banget buat menulis data besar atau dari input terus-menerus tanpa harus menampung semuanya di memori.

# Kapan menggunakan writeStream ?
- Menyalin file besar
- Merekam log (logging)
- Menyimpan data hasil stream (misal dari readstream)
- Menulis data secara terus-menerus (misal hasil sensor, API)

# Menulis writeStream
    const fs = require('fs');

    const writableStream = fs.createWriteStream('output.txt');

    writableStream.write('Halo Dunia!\n');
    writableStream.write('Baris kedua\n');
    writableStream.end(); // Harus dipanggil di akhir

# Event Penting
- finish : setelah end() dipanggil dan data ditulis
- error : Jika terjadi kesalahan saat menulis
- drain : Jika buffer penuh lalu siap menampung data

# Kombinasi writeStream dan readStream
    const fs = require('fs');

    const readable = fs.createReadStream('input.txt');
    const writable = fs.createWriteStream('output.txt');

    readable.pipe(writable);

- pipe() otomatis ambil data dari readable lalu lempar ke writable
- Sangat efisien untuk salin file besar

# Properti dan Opsi Penting
- flags : Mode ('w' untuk tulis dan 'a' untuk append)
- encoding : format
- highWaterMark : Ukuran buffer