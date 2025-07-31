readStream di Node.js digunakan untuk membaca file besar secara bertahap (streaming), bukan sekaligus. Ini efisien untuk file yang sangat besar karena tidak akan memenuhi memori.

Modul yang dipakai: fs (fs.createReadStream)

# Kapan Pakai readStream?
- Saat file terlalu besar untuk dibaca sekaligus (fs.readFile)
- Saat ingin membaca data per bagian/chunk
- Saat ingin mengontrol aliran data (stream control)

# Menulis program readStream
    const fs = require('fs');

    const readableStream = fs.createReadStream('artikel.txt', {
    encoding: 'utf-8',
    highWaterMark: 16 // ukuran chunk dalam byte
    });

    readableStream.on('data', (chunk) => {
        console.log('Chunk:', chunk);
    });

    readableStream.on('end', () => {
        console.log('Selesai dibaca.');
    });

# Properti pada readStream
- encoding : format data
- highWaterMark : Ukuran maksimum chunk (default 64kb)

# Event penting
1. data : Saat ada chunk masuk
2. end : Saat semua data selesai dibaca
3. error : Saat gagal baca file
4. open : File berhasil dibuka
5. readable : Stream sudah siap dibaca

# Perbedaan 'data' dan 'readable'
| `'data'` event         | `'readable'` event           |
| ---------------------- | ---------------------------- |
| Otomatis langsung baca | Kamu manual panggil `read()` |
| Kurang fleksibel       | Lebih fleksibel              |
| Cocok buat cepat       | Cocok buat kontrol detail    |
