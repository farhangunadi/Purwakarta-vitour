import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import styles from "../../../styles/Gameplay.module.css";

function ContentMuseum() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupMessage, setPopupMessage] = useState("");
  const [popupImage, setPopupImage] = useState("");

  const componentData = [
    {
      id: 1,
      title: "Pertunjukan Air Mancur Sribaduga",
      content:
        "Pertunjukan air mancur adalah daya tarik utama dari tempat wisata ini. Mengombinasikan pencahayaan dan gerakan air mancur setinggi 6 meter, sangat menarik untuk ditonton. Pertunjukan air mancur dilaksanakan setiap hari Sabtu. Di hari tersebut, pengunjung bisa melihat 2 kali pertunjukan air mancur. Pertunjukan air mancur dilakukan pada malam hari. Pertama bisa dilihat pukul 19.30 WIB. Sedangkan pertunjukan kedua bisa dinikmati pukul 20.30 WIB. Tidak jarang pengunjung sangat ramai ketika atraksi ini berlangsung",
      image:
        "https://www.headlinejabar.com/wp-content/uploads/2016/04/Adv-Situ-Buleud2.jpg",
      boxPosition: "-5.2 1 -44.8",
      textPosition: "-5.1 1 -44.8",
      rotation: "0 90 0",
    },
    {
      id: 2,
      title: "Wisata Gunung Parang Via Ferrata",
      content:
        "Gunung Parang yang terletak di Kabupaten Purwakarta, Jawa Barat, sampai saat ini menjadi satu-satunya tempat untuk mencoba via ferrata. Ini adalah teknik memanjat dengan mendaki tangga besi yang ditancapkan di sepanjang dinding tebing. Jam operasional Gunung Parang dibuka setiap hari Senin sampai dengan Minggu selama 24 jam nonstop.Via ferrata terdiri dari beberapa ketinggian yakni 100 meter, 300 meter, 500 meter, dan 700 meter.Untuk ketinggian 300 meter harganya Rp 225 ribu per orang. Ketinggian 500 dan 700 meter harganya Rp 465 ribu per orang",
      image: "/images/fotoContent/gnParang.jpg",

      boxPosition: "-5.2 1 -53",
      textPosition: "-5.1 1 -53",
      rotation: "0 90 0",
    },
    {
      id: 3,
      title: "Sentra Keramik Plered",
      content:
        "Sentra Keramik Plered merupakan salah satu tempat wisata yang selalu ramai dikunjungi untuk kamu yang ingin menyaksikan, bahkan membeli kerajinan khas andalan Purwakarta yang satu ini.Kerajinan keramik atau gerabah sudah ada sejak beberapa abad yang lalu, di Indonesia sendiri sudah ada sejak zaman kolonial Belanda. Yakni sekitar tahun 1795, di daerah Citalang, yang menjadi pusat pembuatan batu bata dan genteng. Lokasi Sentra Keramik Plered terletak di alamat Jl. Raya Anjun, Kec. Plered, Kab. Purwakarta, Jawa Barat. Jam operasional Sentra Keramik Plered buka setiap hari, mulai pukul 08.00 hingga pukul 18.00. Untuk di weekend ataupun hari libur lainnya dapat buka lebih lama.",
      image: "/images/fotoContent/pengrajinKeramik.jpg",

      boxPosition: "-5.2 1 -61",
      textPosition: "-5.1 1 -61",
      rotation: "0 90 0",
    },
    {
      id: 4,
      title: "Wisata Waduk Jatiluhur",
      content:
        "Waduk Jatiluhur merupakan sebuah bendungan terbesar di Indonesia dengan luas mencapai sekitar 8.300 hektar dan memiliki panorama yang sangat indah. Waduk ini mulai dibangun pada tahun 1957 saat pemerintahan Soekarno. Awalnya waduk ini berfungsi sebagai PLTA (pembangkit listrik tenaga air). Namun kini air dari Waduk Jatiluhur mulai dimanfaatkan untuk banyak hal. Salah satu daya tarik utamanya adalah suasana dan panorama alamnya yang begitu memikat. Suasana damai dan tenang di waduk ini selalu mampu membuat siapapun betah untuk berlama lama di sana. Ditambah dengan budidaya ikan yang telah dikembangkan di kawasan tersebut. Melimpahnya air di Bendungan Jatiluhur, membuat Jatiluhur Water World akhirnya dibangun. Waterboom ini mempunyai 4 tingkatan kolam renang, mulai dari olympic, dangkal, anak anak, serta dewasa. Sehingga berkunjung ke Waduk Jatiluhur memungkinkan semua kalangan bisa bermain lebih dekat dengan airnya.",
      image: "/images/fotoContent/wadukJatiluhur.jpg",

      boxPosition: "-5.2 1 -69",
      textPosition: "-5.1 1 -69",
      rotation: "0 90 0",
    },
    {
      id: 5,
      title: "Wisata Kuliner Purwakarta",
      content:
        "Wisata Kuliner merupakan acara mingguan yang selalu ada di Purwakarta setiap malam minggu. Menyajikan berbagai macam penjual kuliner yang bisa kita nikmati, mulai dari jajanan pasar, kuliner khas purwakarta, masakan modern dan lain sebagainya. Dipadukan dengan acara kebudayaan seperti pertunjukan tari dan musik. Wisata kuliner tidak terdapat tiket masuk untuk pengunjung.",
      image: "/images/fotoContent/wiskul.jpg",

      boxPosition: "-5.2 1 -77.1",
      textPosition: "-5.1 1 -77.1",
      rotation: "0 90 0",
    },
    {
      id: 6,
      title: "Curug Cijalu",
      content:
        "Curug Cijalu berada di kawasan Cagar Alam Gunung Burangrang, maka tak heran jika udaranya sangat sejuk. Ketinggian Curug Cijalu sekitar 70 meter menjulang tinggi ke atas, dengan debit air yang tidak terlalu deras. Curug Cijalu mulai diresmikan dan dibuka untuk umum sejak tanggal 1 September tahun 1984. Untuk menuju lokasi Curug Cijalu kamu harus berjalan kaki sejauh 300 meter dari tempat parkir, dengan trekking yang dibilang mudah meskipun jalannya masih berbatu dan berundak-undak. Meskipun begitu kamu akan disuguhi pemandangan yang luar biasa. Tiket masuk Curug Cijalu dibedakan menjadi tiket orang dan tiket kendaraan. Tiket masuk orang sebesar Rp. 17.500,- per orang",
      image: "/images/fotoContent/",

      boxPosition: "-5.2 1 -85.2",
      textPosition: "-5.1 1 -85.2",
      rotation: "0 90 0",
    },
    {
      id: 7,
      title: "Sate Maranggi",
      content:
        "Sate Maranggi merupakan salah satu makanan khas purwakarta yang banyak diminati oleh wisatawan. Dengan paduan saus kecap pedas dan daging sapi menjadi cita rasa yang sempurna untuk dinikmati. Teradapat berbagai penjual sate maranggi terkenal di purwakarta, diantaranya Sate Maranggi Haji Yetty, Sate Maranggi Ibu Eri, Sate Maranggi Bah Use, Kampoeng Maranggi, dan masih banyak lagi. ",
      image: "/images/fotoContent/sate.jpeg",

      boxPosition: "4.7 1 -44.4",
      textPosition: "4.6 1 -44.4",
      rotation: "0 270 0",
    },
    {
      id: 8,
      title: "Taman Sri Baduga",
      content:
        "Taman Air Mancur Sri Baduga menyandang predikat sebagai taman air mancur terbesar se Asia Tenggara, serta terkenal juga dengan arsitekturnya yang syarat dengan nilai filosofis. Daya tarik yang pertama tentu saja keberadaan Taman Air Mancur nya. Taman Air Mancur Sri Baduga memiliki luas sekitar 4 hektar, dan di tengah danaunya terdapat patung, dan panggung apung tempat pementasan seni. Lokasi Taman Air Mancur Sri Baduga terletak di dekat pusat pemerintahan Kabupaten Purwakarta. Adapun alamat Taman Air Mancur Sri Baduga berada di Jl. K.K Singawinata No.73,  Nagri Kidul, Kecamatan Purwakarta, Kabupaten Purwakarta, Provinsi Jawa Barat. Taman Air Mancur Sri Baduga setiap harinya buka dari pukul 05.00 – 09.00, dan pukul 17.00 – 19.00.",
      image: "/images/fotoContent/tamansribaduga.jpg",

      boxPosition: "4.7 1 -52.4",
      textPosition: "4.6 1 -52.4",
      rotation: "0 270 0",
    },
    {
      id: 9,
      title: "Peta Purwakarta",
      content:
        "Luas wilayah Kabupaten Purwakarta adalah 971,72 km² atau sekira 2,81% dari luas wilayah Provinsi Jawa Barat berpenduduk 845.509 jiwa (Proyeksi jumlah penduduk tahun 2009) dengan laju pertumbuhan penduduk rata-rata sebesar 2,28% per-tahun. Jumlah penduduk laki-laki adalah 420.380 jiwa, sedangkan jumlah penduduk perempuan adalah 425.129 jiwa. Kabupaten Purwakarta memiliki 17 kecamatan, 9 kelurahan dan 183 desa. Pada tahun 2017, jumlah penduduknya mencapai 912.708 jiwa dengan luas wilayah 825,74 km² dan sebaran penduduk 1.105 jiwa/km². Adapun daftar kecatamatannya yaitu Kecamatan Babakancikao, Kecamatan Bojong, Kecamatan Bungursari, Kecamatan Campaka, Kecamatan Cibatu, Kecamatan Darangdan, Kecamatan Jatiluhur ,Kecamatan Kiarapedes, Kecamatan Maniis, Kecamatan Pasawahan, Kecamatan Plered, Kecamatan Pondoksalam, Kecamatan Purwakarta (Ibu kota/pusat pemerintahan kabupaten Purwakarta), Kecamatan Sukasari, Kecamatan Sukatani, Kecamatan Tegalwaru, Kecamatan Wanayasa.",
      image: "/images/fotoContent/peta.jpg",

      boxPosition: "4.7 1 -60.5",
      textPosition: "4.6 1 -60.5",
      rotation: "0 270 0",
    },
    {
      id: 10,
      title: "Kantor Bupati dan Wakil Bupati Purwakarta",
      content:
        "Kompleks kantor bupati berjarak 100meter dari jalan utama Purwakarta. Marka jalan ditanami pohon perdu. Pun halnya dengan kanan kiri jalan. Terlihat hijau. Gerbang kantor bupati beratap ijuk. Di tengahnya ada relief kuningan bergambar harimau. Ada tulisan Dangiang Galuh Pakuan. Di dalam kompleks kantor bupati, tidak terlihat keriuhan. Suasana malah cenderung sepi. Tidak ada lalu lalang PNS berseragam. Tidak ada mobil atau motor berpelat merah bersliweran. Pepohonan lebih dominan, memberi kesan teduh dan asri. Gemericik air dari kolam membuat suasana adem. Sedangkan bangunan tua menambah kesan ciamik. Nyaris seperti tengah berada di tempat wisata, bukan di kantor bupati. Kantor Bupati Purwakarta berlokasi di Jl. Ganda Negara No.11A, Nagri Kidul, Kec. Purwakarta, Kabupaten Purwakarta, Jawa Barat 41111 satu Kawasan dengan Alun alun Purwakarta.",
      image: "/images/fotoContent/kantor.jpg",

      boxPosition: "4.7 1 -68.5",
      textPosition: "4.6 1 -68.5",
      rotation: "0 270 0",
    },
    {
      id: 11,
      title: "Bupati dan Wakil Bupati Purwakarta",
      content:
        "Hj. Anne Ratna Mustika, S.E. atau akrab disapa Ambu Anne (lahir 28 Januari 1982) adalah Bupati Purwakarta periode 2018-2023. Dia adalah bupati wanita pertama Kabupaten Purwakarta. Pada kontestasi pemilihan bupati dan wakil bupati Purwakarta, Anne Ratna Mustika berpasangan dengan H. Aming sebagai Wakil Bupati Purwakarta. Ambu Anne dulunya adalah seorang Mojang Kabupaten Purwakarta tahun 2001 dan mewakili Kabupaten Purwakarta di Pasanggiri Mojang Jajaka Jawa Barat 2001. Sedangkan, H. Aming lahir di Kabupaten Purwakarta pada 10 Juni 1977. Dia resmi menjabat sebagai Wakil Bupati Purwakarta mendampingi Bupati Anne Ratna Mustika diusia 41 tahun. H. Aming mengenyam pendidikan selolah dasarnya di SD Negeri Tajursidang III pada tahun 1990, kemudian dirinya menyelesaikan pendidikan putih birunya dengan mengambil ujian Paket B di Dinas Pendidikan Kabupaten Purwakarta pada tahun 2003 silam.",
      image: "/images/fotoContent/bupati.jpg",

      boxPosition: "4.7 1 -76.7",
      textPosition: "4.6 1 -76.7",
      rotation: "0 270 0",
    },
    {
      id: 12,
      title: "Alun-Alun Purwakarta",
      content:
        "Alun-Alun Purwakarta adalah sarana publik sekaligus objek wisata di Purwakarta. Alun-Alun Purwakarta berhiaskan sejumlah taman yang asri. Diantaranya yaitu Taman Maya Datar dan Taman Pancawarna. Keduanya berada di wilayah selatan alun-alun. Tempat ini merupakan salah satu tujuan rekreasi favorit bagi masyarakat ataupun wisatawan. Kawasan ini selalu ramai oleh berbagai aktivitas rekreasi dan acara. Wisatawan bisa bersantai di taman hingga menilik aneka jenis wayang di sini. Alun-Alun Purwakarta terbuka bagi siapa saja tanpa perlu membayar tiket masuk. Sebagai fasilitas publik dan juga objek wisata, tempat ini tidak memberlakukan tiket. Sehingga alun-alun sangat cocok sebagai destinasi wisata yang murah-meriah. Beralih ke sisi barat, terdapat bangunan megah yang menarik perhatian. Bangunan ini tidak lain adalah Masjid Agung Baing Yusuf. Di samping berfungsi sebagai sarana umum, masjid ini adalah destinasi wisata religi yang populer.",
      image: "/images/fotoContent/alunalun.jpg",

      boxPosition: "4.7 1 -84.7",
      textPosition: "4.6 1 -84.7",
      rotation: "0 270 0",
    },
  ];
  function handleObjectClick(e) {
    setShowPopup(true);
    setPopupTitle(e.target.getAttribute("data-title"));
    setPopupMessage(e.target.getAttribute("data-message"));
    setPopupImage(e.target.getAttribute("data-image"));
  }

  function handleCloseClick() {
    setShowPopup(false);
    setPopupTitle("");
    setPopupMessage("");
    setPopupImage("");
  }

  return (
    <>
      <Head>
        <script src="https://unpkg.com/aframe-event-set-component@4.2.1/dist/aframe-event-set-component.min.js"></script>
      </Head>
      {componentData.map((data) => (
        <>
          <a-box
            id={data.id}
            depth="0.1"
            height="1"
            width="2"
            position={data.boxPosition}
            rotation={data.rotation}
            material="transparent: true; opacity: 1"
            data-title={data.title}
            data-message={data.content}
            data-image={data.image}
            onClick={handleObjectClick}
            color="#432F2F"
            event-set__onMouseEnter="_event:mouseenter;color:#32a852;"
            event-set__onMouseLeave="_event:mouseleave;color:#432F2F;"
          ></a-box>
          <a-text
            position={data.textPosition}
            rotation={data.rotation}
            value="Click for Info"
            align="center"
          ></a-text>
          {showPopup && (
            <div className={styles.popup}>
              <div className={styles.popup_content}>
                <span className={styles.close} onClick={handleCloseClick}>
                  &times;
                </span>
                <div className={styles.content}>
                  <Image
                    className={styles.image_content}
                    src={popupImage}
                    alt="img"
                    width="600"
                    height="600"
                  />
                  <div className={styles.desc_content}>
                    <h1 className={styles.content_text}>{popupTitle}</h1>
                    <p className={styles.content_desc}>{popupMessage}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      ))}
    </>
  );
}

export default ContentMuseum;
