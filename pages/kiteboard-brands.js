// app/kiteboard-brands/page.js
import HeroSection from "../components/HeroSection";
import BrandsSection from "../components/BrandsSection";
import CallToAction from "../components/CallToAction";
import {
  mainBrands,
  accessoryBrands,
  techBrands,
  foilBrands,
} from "../data/brands";

export const metadata = {
  title: "Kiteboard Brands | KiteFlex",
  description:
    "Discover top kiteboarding brands available at KiteFlex. We offer a wide range of quality gear for kitesurfers of all levels.",
};

export default function KiteboardBrandsPage() {
  return (
    <>
      <HeroSection />

      <BrandsSection
        title="Brands We Offer"
        brands={mainBrands}
        className="bg-white"
      />

      <div className="bg-gray-100 py-16">
        <div className="mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            More Great Brands
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
            At KiteFlex, we believe in providing the complete experience.
            Explore our selection of accessories, tech, and complementary
            brands.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {accessoryBrands.map((brand, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-16 flex items-center justify-center mb-4 relative">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-full"
                  />
                </div>
                <p className="text-gray-600 text-sm text-center">
                  {brand.description.substring(0, 120)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Technology & Gear
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techBrands.map((brand, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="h-20 flex items-center justify-center mb-4 relative">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-full"
                    />
                  </div>
                  <p className="text-gray-600 mb-4 text-center">
                    {brand.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="mx-auto px-4 md:px-6 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Hydrofoil Brands
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16">
            Experience the future of watersports with our premium hydrofoil
            brands
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {foilBrands.map((brand, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg bg-white transform transition-transform duration-300 hover:scale-105"
              >
                <div className="p-6">
                  <div className="h-16 flex items-center justify-center mb-6 relative">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-full"
                    />
                  </div>
                  <p className="text-gray-600 text-sm text-center">
                    {brand.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
