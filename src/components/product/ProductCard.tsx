"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  category: string;
  slug: string;
}

export default function ProductCard({
  id,
  name,
  price,
  oldPrice,
  imageUrl,
  category,
  slug,
}: ProductCardProps) {
  return (
    <div className="product-card group relative">
      {/* Wishlist button */}
      <button
        className="absolute top-2 right-2 z-10 bg-white bg-opacity-80 p-1.5 rounded-full hover:bg-opacity-100 transition-all"
        aria-label="Add to wishlist"
      >
        <Heart className="h-4 w-4 text-primary" />
      </button>

      {/* Product image */}
      <Link href={`/product/${slug}`} className="block aspect-square overflow-hidden">
        <div className="w-full h-full relative transition-all group-hover:scale-105">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      </Link>

      {/* Product info */}
      <div className="p-4 bg-background">
        <div className="text-xs uppercase text-muted-foreground mb-1">
          {category}
        </div>

        <Link href={`/product/${slug}`}>
          <h3 className="font-medium text-primary text-sm line-clamp-2 min-h-[40px]">
            {name}
          </h3>
        </Link>

        <div className="flex justify-between items-center mt-2">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 space-x-reverse">
              <span className="font-bold text-primary">{price} EGP</span>
              {oldPrice && (
                <span className="text-muted-foreground text-xs line-through">
                  {oldPrice} EGP
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Add to cart button */}
        <Button
          variant="default"
          className="w-full mt-3 bg-primary text-primary-foreground hover:bg-primary/90"
          size="sm"
        >
          إضافة إلى السلة
        </Button>
      </div>
    </div>
  );
}
