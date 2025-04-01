// components/CallToAction.js
import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="mx-auto px-4 md:px-6 max-w-7xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to start your journey?
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Our team of experts is ready to help you find the perfect gear for
          your kiteboarding adventure. Contact us today for personalized
          recommendations and exclusive offers.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="mailto:info@kiteflex.com"
            className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-full transition-colors duration-300 text-lg"
          >
            Email Us
          </Link>
          <Link
            href="https://shop.kitesurfingcyprus.org/"
            target="_blank"
            className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-medium py-3 px-8 rounded-full transition-colors duration-300 text-lg"
          >
            Visit Our Shop
          </Link>
        </div>
      </div>
    </section>
  );
}
