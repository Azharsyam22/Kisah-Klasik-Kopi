import { useEffect, useState } from "react";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

const menuItems = [
  {
    name: "Kopi Susu Klasik",
    description:
      "Perpaduan espresso, susu segar, dan gula aren yang manis dan lembut.",
    price: "Rp 25.000",
  },
  {
    name: "Espresso",
    description:
      "Shot klasik dengan aroma karamel, untuk rasa yang tegas dan jujur.",
    price: "Rp 22.000",
  },
  {
    name: "Americano",
    description:
      "Ringan namun berkarakter, diseduh perlahan untuk cerita yang panjang.",
    price: "Rp 24.000",
  },
];

const navLinkClass = ({ isActive }) =>
  `transition hover:text-[#C19A6B] ${isActive ? "text-[#8C6239]" : ""}`;

function Navbar({ scrolled, menuOpen, onToggle, onClose }) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#F4ECD8]/95 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink
          to="/"
          className="text-2xl font-bold text-[#8C6239]"
          aria-label="Kisah Klasik Kopi"
          onClick={onClose}
        >
          Kisah Klasik Kopi
        </NavLink>
        <div className="hidden items-center gap-8 font-semibold md:flex">
          <NavLink className={navLinkClass} to="/">
            Beranda
          </NavLink>
          <NavLink className={navLinkClass} to="/cerita">
            Cerita
          </NavLink>
          <NavLink className={navLinkClass} to="/menu">
            Menu
          </NavLink>
          <NavLink className={navLinkClass} to="/filosofi">
            Filosofi
          </NavLink>
        </div>
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-full border border-[#8C6239] p-2 text-[#8C6239]"
          aria-label="Buka menu navigasi"
          onClick={onToggle}
        >
          <span className="block h-0.5 w-5 bg-[#8C6239] mb-1" />
          <span className="block h-0.5 w-5 bg-[#8C6239] mb-1" />
          <span className="block h-0.5 w-5 bg-[#8C6239]" />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-[#E3D4B9] bg-[#F4ECD8] px-6 py-4 shadow-sm">
          <div className="flex flex-col gap-3 font-semibold">
            <NavLink className={navLinkClass} to="/" onClick={onClose}>
              Beranda
            </NavLink>
            <NavLink className={navLinkClass} to="/cerita" onClick={onClose}>
              Cerita
            </NavLink>
            <NavLink className={navLinkClass} to="/menu" onClick={onClose}>
              Menu
            </NavLink>
            <NavLink className={navLinkClass} to="/filosofi" onClick={onClose}>
              Filosofi
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-[#2C1E16] text-[#F4ECD8] py-10 text-center">
      <h2 className="text-2xl font-serif mb-2 text-[#8C6239]">
        Kisah Klasik Kopi
      </h2>
      <p className="font-sans opacity-75">
        © 2026 Kisah Klasik Kopi. All rights reserved.
      </p>
    </footer>
  );
}

function HomePage() {
  return (
    <main className="pt-20">
      <section className="relative flex h-[92vh] items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1920&auto=format&fit=crop"
          alt="Suasana Coffeeshop"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 hero-animate text-[#F4ECD8] p-4 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.5em] text-[#C19A6B] mb-4">
            Kisah Klasik Kopi
          </p>
          <h1 className="text-5xl md:text-7xl mb-6 drop-shadow-lg">
            Kisah Klasik Kopi
          </h1>
          <p className="text-lg md:text-2xl mb-10 opacity-90">
            Menyeduh cerita dan kenangan dalam setiap cangkir.
          </p>
          <NavLink
            to="/menu"
            className="inline-flex items-center justify-center bg-[#8C6239] hover:bg-[#C19A6B] text-[#F4ECD8] px-10 py-4 rounded-full font-bold text-lg transition duration-300 shadow-lg"
          >
            Jelajahi Rasa
          </NavLink>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 reveal">
          <h2 className="text-4xl font-serif text-[#8C6239] mb-6">
            Cerita yang Menghangatkan
          </h2>
          <p className="text-lg leading-relaxed mb-6 opacity-80">
            Kisah Klasik Kopi lahir dari kerinduan pada ritual sederhana: aroma
            panggang, suara seduhan, dan waktu yang berjalan pelan. Kami
            menghadirkan ruang hangat untuk bertemu, bercerita, dan mengisi ulang
            energi.
          </p>
          <p className="text-lg leading-relaxed opacity-80">
            Setiap detail dirancang untuk memikat minat pelanggan — dari
            penyajian, musik latar, hingga keramahan barista yang mengajak Anda
            kembali lagi.
          </p>
        </div>
        <div className="md:w-1/2 reveal">
          <img
            src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop"
            alt="Barista menyeduh kopi"
            className="rounded-2xl shadow-2xl border-4 border-[#EAE0CC]"
          />
        </div>
      </section>

      <section className="bg-[#EAE0CC] py-24">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-[#8C6239] mb-4">
            Pengalaman
          </p>
          <h2 className="text-4xl font-serif text-[#8C6239] mb-6 reveal">
            Kopi, Ruang, dan Cerita
          </h2>
          <p className="mx-auto max-w-3xl text-lg opacity-80 reveal">
            Nikmati sudut baca bernuansa vintage, meja komunitas untuk berbagi
            cerita, serta menu klasik yang dikurasi dengan hati. Di sini, setiap
            kunjungan terasa seperti bab baru dalam kisah Anda.
          </p>
        </div>
      </section>
    </main>
  );
}

function StoryPage() {
  return (
    <main className="pt-24">
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="reveal">
            <p className="text-sm uppercase tracking-[0.4em] text-[#8C6239] mb-3">
              Cerita Kami
            </p>
            <h1 className="text-4xl font-serif text-[#8C6239] mb-6">
              Jejak Aroma dan Kenangan
            </h1>
            <p className="text-lg leading-relaxed mb-6 opacity-80">
              Kami percaya setiap kopi memiliki kisah. Dari biji yang dipetik
              pada pagi berkabut hingga seduhan yang tiba di meja Anda, semua
              dijaga agar tetap otentik dan jujur.
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              Kisah Klasik Kopi tumbuh sebagai rumah kedua bagi mereka yang
              mencari ketenangan dan rasa yang konsisten.
            </p>
          </div>
          <div className="reveal">
            <img
              src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop"
              alt="Cerita kopi klasik"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#EAE0CC] py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                title: "Biji Terpilih",
                desc: "Dipilih dari kebun yang merawat tanah dan tradisi, untuk rasa yang hangat dan seimbang.",
              },
              {
                title: "Seduhan Klasik",
                desc: "Metode manual untuk menjaga karakter rasa dan aroma yang khas.",
              },
              {
                title: "Ruang Cerita",
                desc: "Interior vintage, pencahayaan hangat, dan musik lembut agar Anda betah berlama-lama.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="reveal rounded-2xl bg-[#F4ECD8] p-6 shadow-lg"
              >
                <h3 className="text-xl font-serif text-[#8C6239] mb-3">
                  {item.title}
                </h3>
                <p className="opacity-80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function MenuPage() {
  return (
    <main className="pt-24">
      <section className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-[#8C6239] mb-3">
            Menu
          </p>
          <h1 className="text-4xl font-serif text-[#8C6239] reveal">
            Pilihan Klasik Kami
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="reveal bg-[#F4ECD8] rounded-2xl overflow-hidden shadow-lg border border-[#8C6239]/20 hover:-translate-y-2 transition duration-300"
            >
              <img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=400&auto=format&fit=crop"
                alt={item.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-3">
                  {item.name}
                </h3>
                <p className="text-md mb-6 opacity-75">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#8C6239]">
                    {item.price}
                  </span>
                  <button className="bg-[#2C1E16] text-[#F4ECD8] px-5 py-2 rounded-lg hover:bg-[#8C6239] transition">
                    Pesan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function PhilosophyPage() {
  return (
    <main className="pt-24">
      <section className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="reveal">
            <p className="text-sm uppercase tracking-[0.4em] text-[#8C6239] mb-3">
              Filosofi Kopi
            </p>
            <h1 className="text-4xl font-serif text-[#8C6239] mb-6">
              Ritual yang Mengikat Waktu
            </h1>
            <p className="text-lg leading-relaxed mb-6 opacity-80">
              Bagi kami, kopi bukan sekadar minuman — ia adalah ritual yang
              mengikat waktu, cerita, dan orang-orang di sekitarnya. Setiap
              seduhan mengajak Anda berhenti sejenak, bernapas, lalu kembali
              melangkah dengan hati yang hangat.
            </p>
            <p className="text-lg leading-relaxed opacity-80">
              Filosofi Kisah Klasik Kopi berakar pada tiga hal: kejujuran rasa,
              kehangatan ruang, dan ketulusan pelayanan. Itulah yang membuat
              setiap cangkir menjadi undangan untuk kembali.
            </p>
          </div>
          <div className="reveal">
            <img
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1920&auto=format&fit=crop"
              alt="Filosofi kopi"
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#EAE0CC] py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="reveal rounded-2xl bg-[#F4ECD8] p-8 shadow-lg">
              <h2 className="text-2xl font-serif text-[#8C6239] mb-4">
                Kejujuran Rasa
              </h2>
              <p className="opacity-80">
                Setiap resep menjaga karakter biji asli, agar aroma dan rasa
                yang Anda cicipi tetap jernih dan apa adanya.
              </p>
            </div>
            <div className="reveal rounded-2xl bg-[#F4ECD8] p-8 shadow-lg">
              <h2 className="text-2xl font-serif text-[#8C6239] mb-4">
                Kehangatan Ruang
              </h2>
              <p className="opacity-80">
                Ruang yang dirancang seperti ruang keluarga: lampu hangat,
                tekstur kayu, dan sudut nyaman untuk berlama-lama.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function NotFound() {
  return (
    <main className="pt-24">
      <section className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl font-serif text-[#8C6239] mb-4">
          Halaman Tidak Ditemukan
        </h1>
        <p className="opacity-80 mb-8">
          Sepertinya halaman yang kamu cari belum tersedia.
        </p>
        <NavLink
          to="/"
          className="inline-flex items-center justify-center bg-[#8C6239] hover:bg-[#C19A6B] text-[#F4ECD8] px-8 py-3 rounded-full font-semibold transition"
        >
          Kembali ke Beranda
        </NavLink>
      </section>
    </main>
  );
}

function AppLayout() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".reveal"));
    elements.forEach((el) => el.classList.remove("show"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="bg-[#F4ECD8] text-[#2C1E16] min-h-screen">
      <Navbar
        scrolled={scrolled}
        menuOpen={menuOpen}
        onToggle={() => setMenuOpen((prev) => !prev)}
        onClose={() => setMenuOpen(false)}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cerita" element={<StoryPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/filosofi" element={<PhilosophyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
