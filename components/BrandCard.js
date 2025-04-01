// app/components/BrandCard.js
import Image from "next/image";
import Link from "next/link";

export default function BrandCard({ brand }) {
  const { name, logo, description, website } = brand;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="h-24 flex items-center justify-center mb-4">
          <Link
            href={website}
            target="_blank"
            className="relative w-full h-full"
          >
            <Image
              src={logo}
              alt={name}
              fill
              style={{ objectFit: "contain" }}
              className="max-h-full"
            />
          </Link>
        </div>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600 mb-4 text-center">{description}</p>
      </div>
    </div>
  );
}
