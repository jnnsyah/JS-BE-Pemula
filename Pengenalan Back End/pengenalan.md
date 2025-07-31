# Back End
Merupakan bagian aplikasi yang menyediakan kebutuhan yang tak terliahat oleh user, yang menangani logika, data, dan komunikasi dengan server.

# Server / Pelayan
Merupakan sebuah sistem yang dapat menyediakan sumber daya berupa data, layanan, atau program untuk disajikan ke komputer lain (client)

Ada beberapa tipe server :
1. File Server > Melayani pengelolaan file/berkas
2. Application Server > Melayani hosting sebuah program atau aplikasi
3. DNS Server > Mengubah nama domain, jadi ip
4. Web Server > Seperti Application server yang dapat diakses oleh client melalui internet maupun intranet
5. Database Serverd > Melayani penyimpanan dan pendistribusian data terstruktur

# Web Server dan Web Service
1. Web Server : Server yang dapat menjalankan program dan dapat diakses melalui internet atau intranet
2. Web Service : Layanan yang dijalankan web server agar kebutuhan bisnis terpenuhi


# Komunikasi Client-Server
Client-Server berkomunikasi dengan pola request-response. Client mengirimkan request dan server mengirimkan response

Informasi yang harus ada sebuah Request HTTP :
1. Request Line : Berisikan method/verb, seperti GET untuk mengambil data, POST untuk menambahkan atau mengirimkan data, PUT untuk update data, atau delete untuk menghapus data. Kemudian path atau alamat yang diminta, dan versi HTTP yang digunakan
2. Header : Memuat informasi seperti format dokument, kunci akses, dll
3. Body (Opsional) : Mengandung data yang dibutuhkan oleh server

Informasi yang harus ada pada sebuah Response HTTP :
1. Status Line : Berisikan versi HTTP yang digunakan; status code berupa 3 digit angka; reason phrase atau status text / pesan berdasarkan status code
2. Header : Mengandung informasi yang dilampirkan terkait response seperti format dokumen
3. Body : Memuat data yang dikirimkan oleh server

# REST Web Service
Respresntational State Transfer merupakan salah satu gaya arsitektur yang dapat diadaptasi ketika membangun web service

Sifat yang menjadi kunci pada REST API
1. Client-Server : Harus bisa merespons permintaan dari client (berhasil/gagal)
2. Stateless : Tidak menyimpan status atau data pengguna antar permintaan
3. Cacheable : Agar respon lebih cepat, sebaiknya menerapkan prinsip cache sehingga setiap permintaan tidak melulu mengambil dari databse
4. Layered : Client tidak seharusnya tau bagaimana server melayani

Hal-hal yang perlu diperhatikan ketika membangun REST API
1. Format Request dan Response
Menggunakan format JSON (JavaScript Object Notation) yang merupakan format standar dalam transaksi data, atau bisa juga menggunakan XML,  namun lebih direkomendasikan menggunakan JSON karna lebih mudah dibaca dan efisien dalam transaksi data

2. HTTP Verbs/Methods
Karna REST API menggunakan HTTP, kita bisa memanfaatkan HTTP verbs untuk menentukan aksi. GET, POST, PUT, DELETE

3. HTTP Response Code
Membangun REST API harus memperhatikan dan menetapkan response code secara benar, status code bernilai 3 digit angka, berikut beberapa status code yang sering digunakan :
- 200 (OK) : Permintaan client berhasil dijalankan oleh server
- 201 (Created) : Server berhasil membuat/menambahkan resource yang diminta client
- 400 (Bad Request) : Permintaan gagal dijalankan karna proses validasi input dari client gagal
- 401 (Unauthorizedd) : Permintaan client gagal dijalankan, biasanya disebabkan karna client belum melakukan proses auth
- 403 (Forbidden) : Permintaan client gagal dijalankan, karna client tidak punya akses ke resource
- 404 (Not Found) : Permintaan gagal, karna resource yang diminta tidak ada
- 500 (Internal Server Error) : Permintaan gagal dijalankan karna server mengalami error (Membangkitkan Exception)
- 503 (Service Unavailable) : Permintaan client gagal dijalankan karena server tidak dapat menangani permintaan

4. URL Design
Aturan umum ketika merancang URL / Path / Endpoint :
- Gunakan kata Benda daripada kata kerja pada endpoint path
- Gunakan kata jamak pada Endpoint untuk resource collection
- Gunakan endpoint berantai untuk resource yang memiliki hirarki/relasi
