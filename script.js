function tampilHome() {
  const konten = document.getElementById("konten");
  konten.innerHTML = `
<section id="home">
        <h2>Selamat Datang di Semarang Explore</h2>
        <p>
            Jelajahi keindahan dan kekayaan budaya Kota Semarang melalui informasi kuliner khas dan destinasi wisata terbaik yang selalu up-to-date hingga tahun 2025. Dari cita rasa kuliner legendaris hingga tempat wisata ikonik, kami hadir untuk memberikan panduan lengkap agar perjalanan Anda ke Semarang semakin berkesan dan tak terlupakan.
        </p>
        <p>
            Temukan rekomendasi tempat makan favorit, lokasi wisata dengan pemandangan menakjubkan, serta link langsung ke Google Maps untuk memudahkan Anda menuju tujuan. Semarang, kota yang kaya sejarah dan budaya, siap menyambut Anda dengan berbagai pengalaman seru dan lezat.
        </p>

        <h2>Fakta Menarik tentang Semarang</h2>
        <div class="fact-list">
            <p>• Semarang adalah ibu kota Provinsi Jawa Tengah dan merupakan kota pelabuhan utama di pesisir utara Jawa yang strategis untuk jalur perdagangan dan pariwisata.</p>
            <p>• Kota ini dikenal sebagai perpaduan harmonis antara budaya Jawa, Tionghoa, dan Belanda, yang bisa dilihat dari arsitektur bangunan tua dan tradisi kulinernya.</p>
            <p>• Kawasan Kota Lama Semarang terkenal dengan bangunan kolonial Belanda yang masih terawat, menjadikannya destinasi favorit wisata sejarah.</p>
            <p>• Semarang memiliki keberagaman kuliner unik, seperti lumpia, tahu gimbal, dan bandeng presto, yang menjadi ciri khas cita rasa lokal.</p>
            <p>• Setiap tahun, Semarang menyelenggarakan berbagai festival budaya dan seni, termasuk Festival Lumpia yang menarik wisatawan domestik dan mancanegara.</p>
        </div>
    </section>
  `;
}

function tampilKategori(kategori) {
  const konten = document.getElementById("konten");
  let html = "";

  switch(kategori) {
    case 'informasi':
        html = `
        <h2>Informasi Tentang Kota Semarang</h2>
        <p>
            Semarang adalah ibu kota Provinsi Jawa Tengah yang dikenal sebagai pusat perdagangan, budaya, dan pemerintahan. Kota ini memiliki sejarah panjang yang kaya, dengan jejak-jejak budaya Tionghoa, Belanda, dan Jawa yang berpadu harmonis. Keberagaman ini terlihat jelas dalam arsitektur kota, kuliner khas, serta tradisi masyarakatnya.
        </p>
        <p>
            Semarang juga dikenal sebagai kota pelabuhan utama di Pulau Jawa bagian utara, yang menjadikannya pusat aktivitas ekonomi dan transportasi penting. Pelabuhan Tanjung Emas merupakan salah satu pelabuhan tersibuk di Indonesia, menghubungkan Semarang dengan berbagai daerah domestik dan internasional.
        </p>
        <p>
            Dalam beberapa tahun terakhir, Semarang mengalami perkembangan pesat di bidang infrastruktur dan pariwisata. Kota ini memiliki berbagai destinasi wisata menarik seperti Kota Lama dengan suasana tempo dulu, Bukit Cinta, dan Pagoda Avalokitesvara yang memukau, yang selalu menjadi favorit wisatawan lokal maupun mancanegara.
        </p>
        <p>
            Semarang juga dikenal dengan kuliner khasnya yang unik dan beragam, seperti Lumpia, Bandeng Presto, Tahu Gimbal, dan Wingko Babat. Makanan-makanan ini bukan hanya menggugah selera, tetapi juga menjadi bagian penting dari identitas budaya masyarakat Semarang.
        </p>
        <p>
            Selain pariwisata dan kuliner, Semarang berperan penting dalam dunia pendidikan dan budaya. Kota ini memiliki banyak perguruan tinggi ternama dan berbagai kegiatan seni yang rutin diselenggarakan, menjadikan Semarang sebagai kota yang dinamis dan terus berkembang di berbagai sektor.
        </p>
      `;
      break;

    
    case 'berita':
      html = `
        <h2>Berita Kota Semarang</h2>
        <article><h3>1. LRT Semarang Raya Diresmikan 2025</h3><p>Transportasi modern untuk mengurai kemacetan.</p></article>
        <article><h3>2. Pembangunan Tol Semarang-Demak Tahap 2 Dimulai</h3><p>Dipercepat untuk menunjang konektivitas kawasan industri.</p></article>
        <article><h3>3. Tanggul Laut di Tambaklorok Berfungsi Optimal</h3><p>Banjir rob mulai berkurang drastis sejak akhir 2024.</p></article>
        <article><h3>4. Taman Indonesia Kaya Kembali Diresmikan Usai Renovasi</h3><p>Taman publik dengan teater terbuka dan koneksi WiFi.</p></article>
        <article><h3>5. RSUP Dr. Kariadi Tambah Gedung Layanan Darurat</h3><p>Fasilitas modern untuk tangani pasien kritis lebih cepat.</p></article>
        <article><h3>6. Universitas Diponegoro Masuk 3 Besar Nasional</h3><p>Riset teknologi laut dan smart city jadi unggulan.</p></article>
        <article><h3>7. Kampung Tematik Semarang Tambah 5 Lokasi Baru</h3><p>Program pemberdayaan ekonomi berbasis wisata lokal.</p></article>
        <article><h3>8. Kawasan Simpang Lima Bebas Kendaraan Setiap Minggu Pagi</h3><p>Program Car Free Day rutin setiap Minggu pagi.</p></article>
        <article><h3>9. Pemkot Luncurkan Aplikasi "Lapor Hendi 2.0"</h3><p>Untuk menampung aduan masyarakat secara real-time.</p></article>
        <article><h3>10. Pengembangan Smart City 2025 Fokus pada Sensor Banjir</h3><p>Sensor banjir otomatis terpasang di kanal Banjir Timur.</p></article>
      `;
      break;

    case 'event':
      html = `
        <h2>Event Kota Semarang</h2>
        <article><h3>1. Dugderan Festival</h3><p>Tradisi menyambut Ramadan khas Semarang dengan arak-arakan Warak Ngendog.</p></article>
        <article><h3>2. Semarang Night Carnival</h3><p>Festival malam spektakuler penuh kostum futuristik.</p></article>
        <article><h3>3. Semarang Great Sale</h3><p>Diskon besar-besaran dari ribuan UMKM dan pusat perbelanjaan.</p></article>
        <article><h3>4. Festival Kota Lama</h3><p>Pertunjukan budaya dan kuliner di kawasan heritage Kota Lama.</p></article>
        <article><h3>5. Festival Kesenian Pesisir</h3><p>Budaya nelayan dari Tambaklorok, Tanjung Mas, dan sekitarnya.</p></article>
        <article><h3>6. Semarang Expo</h3><p>Ajang pameran produk unggulan dan teknologi daerah.</p></article>
        <article><h3>7. Festival Batik Semarang</h3><p>Menampilkan karya batik khas Lasem dan Batik Semarangan.</p></article>
        <article><h3>8. Pameran Teknologi Mahasiswa UNDIP</h3><p>Teknologi hijau dan smart farming ditampilkan di Java Mall.</p></article>
        <article><h3>9. Festival Reog Semarang</h3><p>Kolaborasi seni reog dan barongan tiap Agustus.</p></article>
        <article><h3>10. Tahun Baru Imlek di Sam Poo Kong</h3><p>Perayaan Cap Go Meh dengan lampion dan barongsai.</p></article>
      `;
      break;

    case 'kuliner':
      html = `
            <h2>Kuliner Khas Semarang</h2>

            <article>
                <h3><a href="https://www.google.com/maps/search/?api=1&query=Lumpia+Semarang" target="_blank" rel="noopener noreferrer">1. Lumpia Semarang</a></h3>
                <p>Camilan khas Semarang yang berbahan dasar kulit lumpia dan isian rebung serta daging ayam atau udang.</p>
            </article>

            <article>
                <h3><a href="https://www.google.com/maps/search/?api=1&query=Tahu+Gimbal+Semarang" target="_blank" rel="noopener noreferrer">2. Tahu Gimbal</a></h3>
                <p>Salad tahu goreng dengan saus kacang dan lontong, dilengkapi telur dan sayuran segar.</p>
            </article>

            <article>
                <h3><a href="https://www.google.com/maps/search/?api=1&query=Bandeng+Presto+Semarang" target="_blank" rel="noopener noreferrer">3. Bandeng Presto</a></h3>
                <p>Ikan bandeng yang dimasak presto hingga lunak, sangat mudah dimakan tulang-tulangnya.</p>
            </article>

            <article>
                <h3><a href="https://www.google.com/maps/search/?api=1&query=Nasi+Gandul" target="_blank" rel="noopener noreferrer">4. Nasi Gandul</a></h3>
                <p>Nasi dengan kuah kaldu daging sapi yang khas, biasa disantap dengan sambal dan empal goreng.</p>
            </article>

            <article>
                <h3><a href="https://www.google.com/maps/search/?api=1&query=Es+Puter+Cong+Lik" target="_blank" rel="noopener noreferrer">5. Es Puter Cong Lik</a></h3>
                <p>Es krim tradisional khas Semarang dengan rasa manis dan segar.</p>
            </article>

            <article>
                <h3><a href="https://www.google.com/maps/search/?api=1&query=Wingko+Babat" target="_blank" rel="noopener noreferrer">6. Wingko Babat</a></h3>
                <p>Kue tradisional berbahan kelapa parut dan gula aren, teksturnya kenyal dan manis.</p>
            </article>

            <article>
                <h3><a href="https://www.google.com/maps/search/?api=1&query=Serabi+Notosuman" target="_blank" rel="noopener noreferrer">7. Serabi Notosuman</a></h3>
                <p>Serabi tradisional khas Semarang dengan tekstur lembut dan topping gula merah cair.</p>
            </article>

            <article>
                <h3><a href="https://www.google.com/maps/search/?api=1&query=Roti+Ganjel+Rel" target="_blank" rel="noopener noreferrer">8. Roti Ganjel Rel</a></h3>
                <p>Roti berbentuk segi empat dengan tekstur lembut dan rasa manis, khas Semarang.</p>
            </article>

            <article>
                <h3><a href="https://www.google.com/maps/search/?api=1&query=Soto+Ayam+Semarang" target="_blank" rel="noopener noreferrer">9. Soto Ayam Semarang</a></h3>
                <p>Soto ayam dengan kuah kuning dan aroma rempah khas Jawa Tengah.</p>
            </article>

            <article>
                <h3><a href="https://www.google.com/maps/search/?api=1&query=Gudeg+Koyor" target="_blank" rel="noopener noreferrer">10. Gudeg Koyor</a></h3>
                <p>Gudeg khas Semarang dengan tambahan koyor (jeroan sapi) yang kaya rasa.</p>
            </article>

            <article>
                <h3><a href="https://www.google.com/maps/search/?api=1&query=Kue+Lekker" target="_blank" rel="noopener noreferrer">11. Kue Lekker</a></h3>
                <p>Pancake tipis yang diisi dengan pisang, cokelat, keju, dan susu kental manis.</p>
            </article>

            <article>
                <h3><a href="https://www.google.com/maps/search/?api=1&query=Bakmi+Gajah+Mungkur" target="_blank" rel="noopener noreferrer">12. Bakmi Gajah Mungkur</a></h3>
                <p>Bakmi khas Semarang dengan cita rasa gurih dan kuah yang nikmat.</p>
            </article>

            <article>
                <h3><a href="https://www.google.com/maps/search/?api=1&query=Gulai+Ikan+Asap" target="_blank" rel="noopener noreferrer">13. Gulai Ikan Asap</a></h3>
                <p>Gulai dengan ikan asap yang khas, kuah gurih dan pedas.</p>
            </article>

            <article>
                <h3><a href="https://www.google.com/maps/search/?api=1&query=Nasi+Kucing+Semarang" target="_blank" rel="noopener noreferrer">14. Nasi Kucing</a></h3>
                <p>Menu sederhana berisi nasi, sambal, dan lauk kecil-kecil yang populer di Semarang.</p>
            </article>

            <article>
                <h3><a href="https://www.google.com/maps/search/?api=1&query=Roti+Bakar+Wajik+Semarang" target="_blank" rel="noopener noreferrer">15. Roti Bakar Wajik</a></h3>
                <p>Roti bakar dengan isian manis wajik, favorit untuk cemilan sore hari.</p>
            </article>


      `;
      break;

    case 'wisata':
      html = `
        <h2>Wisata di Semarang</h2>
        <article>
            <h3><a href="https://www.google.com/maps/search/?api=1&query=Kota+Lama+Semarang" target="_blank" rel="noopener noreferrer">1. Kota Lama Semarang</a></h3>
            <p>Area bersejarah dengan bangunan kolonial Belanda yang ikonik dan suasana klasik.</p>
        </article>

        <article>
            <h3><a href="https://www.google.com/maps/search/?api=1&query=SamPoo+Gong+Temple" target="_blank" rel="noopener noreferrer">2. Klenteng SamPoo Kong</a></h3>
            <p>Klenteng tertua dan terbesar di Semarang dengan arsitektur unik dan sejarah panjang.</p>
        </article>

        <article>
            <h3><a href="https://www.google.com/maps/search/?api=1&query=Lawang+Sewu" target="_blank" rel="noopener noreferrer">3. Lawang Sewu</a></h3>
            <p>Gedung bersejarah peninggalan Belanda yang terkenal dengan ratusan pintunya.</p>
        </article>

        <article>
            <h3><a href="https://www.google.com/maps/search/?api=1&query=Masjid+Agung+Semarang" target="_blank" rel="noopener noreferrer">4. Masjid Agung Jawa Tengah</a></h3>
            <p>Masjid megah dengan arsitektur megah, ikon religi di Semarang.</p>
        </article>

        <article>
            <h3><a href="https://www.google.com/maps/search/?api=1&query=Marina+Beach+Semarang" target="_blank" rel="noopener noreferrer">5. Marina Beach Semarang</a></h3>
            <p>Wisata pantai dengan pemandangan sunset dan fasilitas rekreasi keluarga.</p>
        </article>

        <article>
            <h3><a href="https://www.google.com/maps/search/?api=1&query=Pagoda+Avalokitesvara" target="_blank" rel="noopener noreferrer">6. Pagoda Avalokitesvara</a></h3>
            <p>Pagoda tertinggi di Indonesia dengan arsitektur Tionghoa yang memukau.</p>
        </article>

        <article>
            <h3><a href="https://www.google.com/maps/search/?api=1&query=Umbul+Sidomukti" target="_blank" rel="noopener noreferrer">7. Umbul Sidomukti</a></h3>
            <p>Wisata alam dengan pemandian air panas dan berbagai wahana outdoor.</p>
        </article>

        <article>
            <h3><a href="https://www.google.com/maps/search/?api=1&query=Brown+ Canyon+Semarang" target="_blank" rel="noopener noreferrer">8. Brown Canyon Semarang</a></h3>
            <p>Lokasi wisata alam mirip Grand Canyon dengan tebing-tebing eksotis.</p>
        </article>

        <article>
            <h3><a href="https://www.google.com/maps/search/?api=1&query=Wonderia+Semarang" target="_blank" rel="noopener noreferrer">9. Wonderia</a></h3>
            <p>Taman bermain keluarga dengan berbagai wahana anak-anak dan edukasi.</p>
        </article>

        <article>
            <h3><a href="https://www.google.com/maps/search/?api=1&query=Taman+Lele+Semarang" target="_blank" rel="noopener noreferrer">10. Taman Lele</a></h3>
            <p>Area kuliner dan wisata malam yang ramai dengan berbagai pilihan makanan dan hiburan.</p>
        </article>

        <article>
            <h3><a href="https://www.google.com/maps/search/?api=1&query=Pantai+Marina+Semarang" target="_blank" rel="noopener noreferrer">11. Pantai Marina</a></h3>
            <p>Destinasi wisata pantai dengan berbagai aktivitas air dan pemandangan laut lepas.</p>
        </article>

        <article>
            <h3><a href="https://www.google.com/maps/search/?api=1&query=Gedung+Sasana+Tawang" target="_blank" rel="noopener noreferrer">12. Gedung Sasana Tawang</a></h3>
            <p>Gedung bersejarah untuk pertunjukan seni dan budaya di Semarang.</p>
        </article>

        <article>
            <h3><a href="https://www.google.com/maps/search/?api=1&query=Puri+Maerokoco" target="_blank" rel="noopener noreferrer">13. Puri Maerokoco</a></h3>
            <p>Taman budaya yang menampilkan rumah adat dan budaya dari berbagai daerah di Jawa Tengah.</p>
        </article>

        <article>
            <h3><a href="https://www.google.com/maps/search/?api=1&query=Gedong+Songo" target="_blank" rel="noopener noreferrer">14. Wisata Gedong Songo</a></h3>
            <p>Candi-candi Hindu kuno dengan pemandangan pegunungan yang indah.</p>
        </article>

        <article>
            <h3><a href="https://www.google.com/maps/search/?api=1&query=Kaligarang+Park" target="_blank" rel="noopener noreferrer">15. Kaligarang Park</a></h3>
            <p>Taman rekreasi dengan fasilitas olahraga, taman bermain, dan area piknik.</p>
        </article>
      `;
      break;

    case 'transportasi':
      html = `
        <h2>Transportasi di Semarang</h2>
        <article><h3>1. LRT Semarang</h3><p>Moda transportasi ringan yang menghubungkan pusat kota dengan kawasan pinggiran.</p></article>
        <article><h3>2. Bus Trans Semarang</h3><p>Jalur bus yang menghubungkan berbagai titik penting kota.</p></article>
        <article><h3>3. Angkot Semarang</h3><p>Kendaraan umum mikrolet dengan rute fleksibel.</p></article>
        <article><h3>4. Taksi Online</h3><p>Layanan transportasi berbasis aplikasi populer.</p></article>
        <article><h3>5. Sepeda Motor dan Mobil Pribadi</h3><p>Kendaraan pribadi yang umum dipakai warga Semarang.</p></article>
        <article><h3>6. Terminal Mangkang</h3><p>Terminal utama untuk bus antar kota dan antar provinsi.</p></article>
        <article><h3>7. Stasiun Tawang</h3><p>Stasiun kereta api utama di Semarang.</p></article>
        <article><h3>8. Pelabuhan Tanjung Mas</h3><p>Pelabuhan utama untuk pengiriman dan wisata laut.</p></article>
        <article><h3>9. Jalur Sepeda</h3><p>Peningkatan jalur khusus sepeda di pusat kota.</p></article>
        <article><h3>10. Parkir Elektronik</h3><p>Sistem parkir modern di pusat perbelanjaan dan area publik.</p></article>
      `;
      break;

    case 'teknologi':
      html = `
        <h2>Teknologi dan Inovasi di Semarang</h2>
        <article><h3>1. Startup Semarang Berkembang Pesat</h3><p>Startup di bidang fintech, agritech, dan smart city.</p></article>
        <article><h3>2. Implementasi Smart City</h3><p>Sistem monitoring banjir, lampu jalan otomatis, dan CCTV.</p></article>
        <article><h3>3. Penggunaan Aplikasi Lapor Hendi</h3><p>Masyarakat melaporkan keluhan via aplikasi online.</p></article>
        <article><h3>4. Inkubator Bisnis Teknologi UNDIP</h3><p>Mendukung pengembangan startup mahasiswa dan alumni.</p></article>
        <article><h3>5. Workshop Coding dan Robotik</h3><p>Program pelatihan untuk pelajar dan mahasiswa.</p></article>
        <article><h3>6. Pengembangan IoT di Industri Lokal</h3><p>Automasi produksi berbasis sensor dan data.</p></article>
        <article><h3>7. Implementasi Pembayaran Digital di UMKM</h3><p>Mempermudah transaksi tanpa uang tunai.</p></article>
        <article><h3>8. Pusat Data dan Cloud Komputasi</h3><p>Fasilitas penyimpanan data untuk instansi pemerintah.</p></article>
        <article><h3>9. Drone Pengawas Infrastruktur</h3><p>Penggunaan drone untuk inspeksi jembatan dan gedung.</p></article>
        <article><h3>10. Peluncuran Aplikasi Wisata AR</h3><p>Aplikasi augmented reality untuk tour Kota Semarang.</p></article>
      `;
      break;

    case 'kontak':
      html = `
        <h2>Kontak Kami</h2>
        <p>Nomor Telepon: <a href="tel:+622497123456">+62 8xxx xxxxxxxx</a></p>
        <p>Email: <a href="mailto:info@semarangweb.com">info@semarangweb.com</a></p>
      `;
      break;

    default:
      html = `<h2>Kategori tidak ditemukan.</h2>`;
      break;
  }


  konten.innerHTML = html;
}
