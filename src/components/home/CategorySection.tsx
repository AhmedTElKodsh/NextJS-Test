"use client";

import Link from "next/link";
import Image from "next/image";

// Mock data for categories
const CATEGORIES = [
  {
    id: "1",
    name: "أدوات منزلية",
    slug: "home-tools",
    imageUrl: "https://ext.same-assets.com/2671218306/1335484515.webp",
  },
  {
    id: "2",
    name: "أجهزة",
    slug: "appliances",
    imageUrl: "https://ext.same-assets.com/2671218306/1563569816.webp",
  },
  {
    id: "3",
    name: "مطبخ",
    slug: "kitchen",
    imageUrl: "https://ext.same-assets.com/2671218306/2387641374.jpeg",
  },
  {
    id: "4",
    name: "ألعاب",
    slug: "toys",
    imageUrl: "https://ext.same-assets.com/2671218306/2188102176.webp",
  },
  {
    id: "5",
    name: "صحة وجمال",
    slug: "healthbeauty",
    imageUrl: "https://ext.same-assets.com/2671218306/3790412471.jpeg",
  },
  {
    id: "6",
    name: "أدوات",
    slug: "tools",
    imageUrl: "https://ext.same-assets.com/2671218306/1989307060.webp",
  },
];

export default function CategorySection() {
  return (
    <section className="bg-muted py-12">
      <div className="hawaaeg-container">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">تسوق حسب الفئات</h2>
          <p className="text-muted-foreground mt-2">
            استكشف مجموعتنا المتنوعة من المنتجات عالية الجودة
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/product-category/${category.slug}`}
              className="group block"
            >
              <div className="bg-background rounded-lg overflow-hidden flex flex-col items-center p-4 transition-all hover:shadow-md">
                <div className="relative w-24 h-24 mb-4">
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    fill
                    className="object-contain transition-transform group-hover:scale-110"
                    unoptimized
                  />
                </div>
                <h3 className="text-sm font-medium text-center">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
