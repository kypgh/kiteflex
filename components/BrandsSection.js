// components/BrandsSection.js
import BrandCard from "./BrandCard";

export default function BrandsSection({ title, brands, className = "" }) {
  return (
    <section className={`py-16 ${className}`}>
      <div className="mx-auto px-4 md:px-6 max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <BrandCard key={index} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
}
