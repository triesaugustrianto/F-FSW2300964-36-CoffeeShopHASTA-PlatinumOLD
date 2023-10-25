import { Outlet } from "react-router";
import { NavBar } from "../../components";

function Home() {
  return (
<<<<<<< HEAD
    <div className="home-page">
      <h1 className="px-5 Pt-5">Selamat Datang di HastaCoffee!</h1>
      <p className="px-5">
        Selamat datang di HastaCoffee, tempat yang penuh dengan cita rasa kopi
        yang luar biasa dan nuansa yang menyenangkan. Kami bangga menjadi tujuan
        pilihan Anda untuk kopi berkualitas tinggi dan pengalaman kafe yang
        unik. Kami ingin mengajak Anda menjelajahi dunia rasa kopi yang luar
        biasa dan menikmati suasana yang hangat di kafe kami.
      </p>
      <h2 className="px-5 pt-4">Menu Kami</h2>
      <p className="px-5">
        Kami menghadirkan beragam pilihan menu kopi, mulai dari espresso yang
        kuat hingga kopi pour-over yang lembut. Selain kopi, kami juga
        menawarkan berbagai macam teh, minuman khusus, dan camilan yang lezat.
        Jangan lupa untuk mencoba kue-kue segar kami yang selalu menggoda
        selera.
      </p>
      <h2 className="px-5 pt-4">Tempat yang Nyaman</h2>
      <p className="px-5">
        Kafe kami didesain dengan nuansa yang nyaman dan hangat. Anda akan
        menemukan meja-meja yang luas untuk berkumpul dengan teman atau bekerja
        secara produktif. Kami juga menyediakan Wi-Fi gratis agar Anda dapat
        tetap terhubung. Terdapat juga sudut santai untuk membaca buku atau
        sekadar bersantai.
      </p>
      <h2 className="px-5 pt-4">Acara dan Aktivitas</h2>
      <p className="px-5">
        Kami sering mengadakan acara-acara khusus, mulai dari pertunjukan musik
        hingga kelas barista. Kunjungi halaman acara kami untuk melihat jadwal
        terbaru dan bergabunglah dengan kami dalam perayaan komunitas kami.
      </p>
      <h2 className="px-5 pt-4">Lokasi Kami</h2>
      <p className="px-5">
        Kafe HastaCoffee terletak di Jl. Salah Alamat no. 121, Bandung. Kami
        siap melayani Anda setiap hari dari jam 08.00 hingga 24.00. Kami
        menantikan kunjungan Anda!
      </p>
=======
    <div className="container-fluid">
      <div className="container">
        <NavBar />
        <Outlet />
      </div>
>>>>>>> 9de06d3fe17851686aa7c4241df9e9235712433f
    </div>
  );
}

export default Home;
