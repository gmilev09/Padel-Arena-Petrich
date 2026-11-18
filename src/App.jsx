import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Courts } from "./components/Courts";
import { Events } from "./components/Events";
import { InstagramSection } from "./components/InstagramSection";
import { Gallery } from "./components/Gallery";
import { Pricing } from "./components/Pricing";
import { CourtlyBooking } from "./components/CourtlyBooking";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="grain min-h-screen text-mist antialiased">
      {/*
        isolation: isolate → <main> става stacking context, така че фоновете с
        отрицателен z-index (видеото в Hero и паралаксът в Courts) се рисуват
        НАД фоновете на външните контейнери, а не под тях.
      */}
      <main className="relative isolate">
        <Navbar />
        <Hero />
        <Marquee />
        <Courts />
        <Marquee reverse />
        <Events />
        <InstagramSection />
        <Gallery />
        <Pricing />
        <CourtlyBooking />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
