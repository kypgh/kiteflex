// components/HeroSection.js
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero-section py-24 md:py-32 text-white">
      <div className="mx-auto px-4 md:px-6 max-w-7xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          We're here to help
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
          KiteFlex strives to provide not just one brand, but a multitude of
          them. Our goal is to offer you a diverse range of options, ensuring
          maximum flexibility in your choices.
        </p>
        <Link
          href="mailto:info@kiteflex.com"
          className="btn-primary text-lg inline-block"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
