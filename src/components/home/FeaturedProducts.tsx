"use client";

import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";

// Mock data for the featured products
const FEATURED_PRODUCTS = [
  {
    id: "1",
    name: "طقم إكسسوارات حمام",
    price: 549,
    oldPrice: 680,
    imageUrl: "https://ext.same-assets.com/2671218306/1545649785.webp",
    category: "HOME",
    slug: "bathroom-accessories-set"
  },
  {
    id: "2",
    name: "فرشاة تنظيف الأماكن الصعبة 2 قطعة",
    price: 39,
    oldPrice: 55,
    imageUrl: "https://ext.same-assets.com/2671218306/1282678478.webp",
    category: "HOME",
    slug: "cleaning-brush-2-pieces"
  },
  {
    id: "3",
    name: "استاند خشب لطقم التوابل 24 قطعة على شكل سلم",
    price: 160,
    oldPrice: 180,
    imageUrl: "https://ext.same-assets.com/2671218306/2250403353.webp",
    category: "HOME",
    slug: "spice-rack-wooden-stand-24-pieces"
  },
  {
    id: "4",
    name: "منشفة الأطباق للمطبخ",
    price: 260,
    oldPrice: 315,
    imageUrl: "https://ext.same-assets.com/2671218306/2387641374.jpeg",
    category: "HOME",
    slug: "kitchen-dish-towel"
  },
  {
    id: "5",
    name: "ترمس حراري بثلاث أكواب",
    price: 169,
    oldPrice: 195,
    imageUrl: "https://ext.same-assets.com/2671218306/3790412471.jpeg",
    category: "HOME",
    slug: "thermal-flask-three-cups"
  },
  {
    id: "6",
    name: "طقم كوفي بورسلين",
    price: 699,
    oldPrice: 850,
    imageUrl: "https://ext.same-assets.com/2671218306/3368088056.webp",
    category: "HOME",
    slug: "porcelain-coffee-set"
  },
  {
    id: "7",
    name: "مضخة صابون الأطباق",
    price: 110,
    oldPrice: 140,
    imageUrl: "https://ext.same-assets.com/2671218306/1563569816.webp",
    category: "HOME",
    slug: "dish-soap-pump"
  },
  {
    id: "8",
    name: "بخاخ زيت زجاج كبير",
    price: 85,
    oldPrice: 105,
    imageUrl: "https://ext.same-assets.com/2671218306/1335484515.webp",
    category: "HOME",
    slug: "large-glass-oil-sprayer"
  }
];

export default function FeaturedProducts() {
  return (
    <section className="hawaaeg-container py-12">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">المنتجات الأحدث</h2>
        <Link
          href="/shop"
          className="text-sm font-medium text-secondary hover:underline"
        >
          عرض المزيد من المنتجات
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {FEATURED_PRODUCTS.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            oldPrice={product.oldPrice}
            imageUrl={product.imageUrl}
            category={product.category}
            slug={product.slug}
          />
        ))}
      </div>
    </section>
  );
}
