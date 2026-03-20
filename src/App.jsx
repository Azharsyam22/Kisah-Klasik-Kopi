import { useEffect, useState } from "react";
import {
  HashRouter,
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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <NavLink
          to="/"
          className="text-xl font-bold text-[#8C6239] sm:text-2xl"
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
        <div className="md:hidden border-t border-[#E3D4B9] bg-[#F4ECD8] px-4 py-4 shadow-sm sm:px-6">
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
      <h2 className="text-xl font-serif mb-2 text-[#8C6239] sm:text-2xl">
        Kisah Klasik Kopi
      </h2>
      <p className="font-sans opacity-75 text-sm sm:text-base">
        © 2026 Kisah Klasik Kopi. All rights reserved.
      </p>
    </footer>
  );
}

function HomePage() {
  return (
    <main className="pt-10 md:pt-20">
      <section className="relative flex min-h-[80vh] items-center justify-center text-center sm:min-h-[88vh] md:h-[92vh]">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1920&auto=format&fit=crop"
          alt="Suasana Coffeeshop"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 hero-animate text-[#F4ECD8] p-4 max-w-3xl hero-copy">
          <p className="hero-kicker text-xs uppercase tracking-[0.3em] text-[#C19A6B] mb-4 sm:text-sm sm:tracking-[0.5em]">
            Kisah Klasik Kopi
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl mb-6 drop-shadow-lg">
            Kisah Klasik Kopi
          </h1>
          <p className="text-base sm:text-lg md:text-2xl mb-10 opacity-90">
            Menyeduh cerita dan kenangan dalam setiap cangkir.
          </p>
          <NavLink
            to="/menu"
            className="inline-flex items-center justify-center bg-[#8C6239] hover:bg-[#C19A6B] text-[#F4ECD8] px-8 py-3 rounded-full font-bold text-base transition duration-300 shadow-lg sm:px-10 sm:py-4 sm:text-lg"
          >
            Jelajahi Rasa
          </NavLink>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12 sm:px-6 sm:py-24 mobile-panel">
        <div className="md:w-1/2 reveal">
          <h2 className="text-3xl font-serif text-[#8C6239] mb-6 sm:text-4xl">
            Cerita yang Menghangatkan
          </h2>
          <p className="text-base leading-relaxed mb-6 opacity-80 sm:text-lg">
            Kisah Klasik Kopi lahir dari kerinduan pada ritual sederhana: aroma
            panggang, suara seduhan, dan waktu yang berjalan pelan. Kami
            menghadirkan ruang hangat untuk bertemu, bercerita, dan mengisi ulang
            energi.
          </p>
          <p className="text-base leading-relaxed opacity-80 sm:text-lg">
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

      <section className="bg-[#EAE0CC] py-16 sm:py-24">
        <div className="container mx-auto px-4 text-center sm:px-6 mobile-shell">
          <p className="text-sm uppercase tracking-[0.4em] text-[#8C6239] mb-4">
            Pengalaman
          </p>
          <h2 className="text-3xl font-serif text-[#8C6239] mb-6 reveal sm:text-4xl">
            Kopi, Ruang, dan Cerita
          </h2>
          <p className="mx-auto max-w-3xl text-base opacity-80 reveal sm:text-lg">
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
    <main className="pt-10 md:pt-24">
      <section className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 mobile-panel">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="reveal">
            <p className="text-sm uppercase tracking-[0.4em] text-[#8C6239] mb-3">
              Cerita Kami
            </p>
            <h1 className="text-3xl font-serif text-[#8C6239] mb-6 sm:text-4xl">
              Jejak Aroma dan Kenangan
            </h1>
            <p className="text-base leading-relaxed mb-6 opacity-80 sm:text-lg">
              Kami percaya setiap kopi memiliki kisah. Dari biji yang dipetik
              pada pagi berkabut hingga seduhan yang tiba di meja Anda, semua
              dijaga agar tetap otentik dan jujur.
            </p>
            <p className="text-base leading-relaxed opacity-80 sm:text-lg">
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

      <section className="bg-[#EAE0CC] py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 mobile-shell">
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
                <p className="opacity-80 text-sm sm:text-base">{item.desc}</p>
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
    <main className="pt-10 md:pt-24">
      <section className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 mobile-panel">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-[#8C6239] mb-3">
            Menu
          </p>
          <h1 className="text-3xl font-serif text-[#8C6239] reveal sm:text-4xl">
            Pilihan Klasik Kami
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="reveal bg-[#F4ECD8] rounded-2xl overflow-hidden shadow-lg border border-[#8C6239]/20 hover:-translate-y-2 transition duration-300"
            >
              <img
                src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=400&auto=format&fit=crop"
                alt={item.name}
                className="w-full h-48 object-cover sm:h-56"
              />
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-serif font-bold mb-3 sm:text-2xl">
                  {item.name}
                </h3>
                <p className="text-sm mb-6 opacity-75 sm:text-base">
                  {item.description}
                </p>
                <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
                  <span className="text-xl font-bold text-[#8C6239] sm:text-2xl">
                    {item.price}
                  </span>
                  <button className="bg-[#2C1E16] text-[#F4ECD8] px-4 py-2 rounded-lg text-sm hover:bg-[#8C6239] transition w-full sm:w-auto sm:px-5 sm:text-base">
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
    <main className="pt-10 md:pt-24">
      <section className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 mobile-panel">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="reveal">
            <p className="text-sm uppercase tracking-[0.4em] text-[#8C6239] mb-3">
              Filosofi Kopi
            </p>
            <h1 className="text-3xl font-serif text-[#8C6239] mb-6 sm:text-4xl">
              Ritual yang Mengikat Waktu
            </h1>
            <p className="text-base leading-relaxed mb-6 opacity-80 sm:text-lg">
              Bagi kami, kopi bukan sekadar minuman — ia adalah ritual yang
              mengikat waktu, cerita, dan orang-orang di sekitarnya. Setiap
              seduhan mengajak Anda berhenti sejenak, bernapas, lalu kembali
              melangkah dengan hati yang hangat.
            </p>
            <p className="text-base leading-relaxed opacity-80 sm:text-lg">
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

      <section className="bg-[#EAE0CC] py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 mobile-shell">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="reveal rounded-2xl bg-[#F4ECD8] p-8 shadow-lg">
              <h2 className="text-xl font-serif text-[#8C6239] mb-4 sm:text-2xl">
                Kejujuran Rasa
              </h2>
              <p className="opacity-80 text-sm sm:text-base">
                Setiap resep menjaga karakter biji asli, agar aroma dan rasa
                yang Anda cicipi tetap jernih dan apa adanya.
              </p>
            </div>
            <div className="reveal rounded-2xl bg-[#F4ECD8] p-8 shadow-lg">
              <h2 className="text-xl font-serif text-[#8C6239] mb-4 sm:text-2xl">
                Kehangatan Ruang
              </h2>
              <p className="opacity-80 text-sm sm:text-base">
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
    <main className="pt-10 md:pt-24">
      <section className="container mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 mobile-panel">
        <h1 className="text-3xl font-serif text-[#8C6239] mb-4 sm:text-4xl">
          Halaman Tidak Ditemukan
        </h1>
        <p className="opacity-80 mb-8 text-sm sm:text-base">
          Sepertinya halaman yang kamu cari belum tersedia.
        </p>
        <NavLink
          to="/"
          className="inline-flex items-center justify-center bg-[#8C6239] hover:bg-[#C19A6B] text-[#F4ECD8] px-6 py-3 rounded-full font-semibold text-sm transition sm:px-8 sm:text-base"
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
  const [bottomNavVisible, setBottomNavVisible] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      const isScrollingUp = currentY < lastY - 6;
      const isScrollingDown = currentY > lastY + 6;

      if (isScrollingUp) {
        setBottomNavVisible(true);
      } else if (isScrollingDown) {
        setBottomNavVisible(false);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
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
    <div className="bg-[#F4ECD8] text-[#2C1E16] min-h-screen app-shell">
      <div className="hidden md:block">
        <Navbar
          scrolled={scrolled}
          menuOpen={menuOpen}
          onToggle={() => setMenuOpen((prev) => !prev)}
          onClose={() => setMenuOpen(false)}
        />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cerita" element={<StoryPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/filosofi" element={<PhilosophyPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <nav
        className={`mobile-bottom-nav md:hidden ${
          bottomNavVisible ? "is-visible" : "is-hidden"
        }`}
        aria-label="Navigasi utama"
      >
        <NavLink className="mobile-nav-link" to="/">
          <span className="mobile-nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                d="M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1h-4.5a.5.5 0 0 1-.5-.5V16a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4.5a.5.5 0 0 1-.5.5H5a1 1 0 0 1-1-1v-9.5Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Beranda
        </NavLink>
        <NavLink className="mobile-nav-link" to="/cerita">
          <span className="mobile-nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                d="M6 5.5h8a3 3 0 0 1 3 3V19H9a3 3 0 0 0-3 3V5.5Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 19h8a3 3 0 0 1 3 3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Cerita
        </NavLink>
        <NavLink className="mobile-nav-link" to="/menu">
          <span className="mobile-nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                d="M4 7h16M4 12h16M4 17h10"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          Menu
        </NavLink>
        <NavLink className="mobile-nav-link" to="/filosofi">
          <span className="mobile-nav-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                d="M12 4.5a5 5 0 0 1 5 5c0 2.4-1.6 3.8-3 4.7-1 .7-1.7 1.4-2 2.3"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 19h4"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="19.5" r="0.5" fill="currentColor" />
            </svg>
          </span>
          Filosofi
        </NavLink>
      </nav>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppLayout />
    </HashRouter>
  );
}
