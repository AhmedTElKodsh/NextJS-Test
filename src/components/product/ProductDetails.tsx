"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Heart, Minus, Plus, Star } from "lucide-react";
import FeaturedProducts from "@/components/home/FeaturedProducts";

// Mock data for products
const PRODUCTS = [
  {
    id: "1",
    name: "طقم إكسسوارات حمام",
    price: 549,
    oldPrice: 680,
    description: "حوائج يقدم لك طقم الوايت المصنوع من مادة بوب مستوردة, بأعلى جودة ممكن, شكل راقي بكل ألوان حياتك 🌹 باسكت مغطى خشب ران فرشة حمام بالقاعدة ديسبنسر صابون حامل فرش اسنان صابونة",
    imageUrl: "https://ext.same-assets.com/2671218306/1545649785.webp",
    images: [
      "https://ext.same-assets.com/2671218306/1545649785.webp",
      "https://ext.same-assets.com/2671218306/2590593347.webp",
      "https://ext.same-assets.com/2671218306/3546907025.webp",
      "https://ext.same-assets.com/2671218306/892764564.webp",
    ],
    category: "HOME",
    slug: "bathroom-accessories-set",
    rating: 5,
    stock: 12,
    features: [
      "مصنوع من مادة بوب مستوردة بأعلى جودة",
      "تصميم عصري وأنيق",
      "سهل التنظيف ومقاوم للماء",
      "متوفر باللون الأسود والذهبي",
    ]
  }
];

export default function ProductDetails({ slug }: { slug: string }) {
  const [quantity, setQuantity] = useState(1);

  // In a real app, we would fetch the product data based on the slug
  const product = PRODUCTS.find(p => p.slug === slug) || PRODUCTS[0];
  const [selectedImage, setSelectedImage] = useState(product.imageUrl);

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <Header />

      <div className="hawaaeg-container py-8">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm">
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            الرئيسية
          </Link>
          {" / "}
          <Link href="/product-category/home-tools" className="text-muted-foreground hover:text-foreground">
            {product.category}
          </Link>
          {" / "}
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Product images */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-white mb-4">
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`aspect-square relative rounded border-2 overflow-hidden ${
                    selectedImage === image ? "border-primary" : "border-transparent"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="w-full md:w-1/2">
            <div className="sticky top-28">
              <h1 className="text-2xl font-bold mb-2">{product.name}</h1>

              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < product.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground mr-2">
                  (5 تقييمات)
                </span>
              </div>

              <div className="flex items-center space-x-4 space-x-reverse mb-6">
                <span className="text-2xl font-bold">{product.price} EGP</span>
                {product.oldPrice && (
                  <span className="text-muted-foreground line-through">
                    {product.oldPrice} EGP
                  </span>
                )}
              </div>

              <div className="border-t border-b border-border py-4 my-4">
                <p className="text-muted-foreground">
                  {product.description}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-2">المميزات:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center mb-6">
                <span className="text-muted-foreground ml-4">الكمية:</span>
                <div className="flex items-center border border-border rounded-md">
                  <button
                    onClick={decreaseQuantity}
                    className="p-2 text-primary hover:bg-muted transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>

                  <span className="px-4">{quantity}</span>

                  <button
                    onClick={increaseQuantity}
                    className="p-2 text-primary hover:bg-muted transition-colors"
                    disabled={quantity >= product.stock}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <span className="text-muted-foreground mr-4">
                  متبقي {product.stock} قطعة
                </span>
              </div>

              <div className="flex space-x-4 space-x-reverse">
                <Button
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  إضافة إلى السلة
                </Button>

                <Button
                  variant="outline"
                  className="p-2 border-border"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              <div className="mt-6 text-sm text-muted-foreground">
                <p>يتم تسليم المنتجا خلال من 3 الى 5 أيام</p>
                <p>الشحن مجانى لطلبات فوق 999 جنية</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-muted py-10">
        <div className="hawaaeg-container">
          <h2 className="text-2xl font-bold mb-8">منتجات مشابهة</h2>
          <FeaturedProducts />
        </div>
      </div>

      <Footer />
    </>
  );
}
