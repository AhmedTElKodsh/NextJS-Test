"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HeroSection() {
  return (
    <div className="hawaaeg-container py-6">
      <Carousel className="w-full overflow-hidden rounded-lg">
        <CarouselContent>
          <CarouselItem>
            <div className="relative aspect-[16/7] w-full overflow-hidden rounded-lg">
              <Image
                src="https://ext.same-assets.com/2671218306/323421550.webp"
                alt="Hero Image"
                fill
                className="object-cover transform scale-105"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white p-8">
                <h1 className="text-4xl font-bold text-center mb-4">
                  حوائج
                </h1>
                <p className="text-xl text-center mb-6">
                  حيث تلتقي الجودة والأناقة بالسعر المناسب
                </p>
                <Button
                  size="lg"
                  className="bg-secondary text-white hover:bg-secondary/90"
                >
                  الحصول على العرض
                </Button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative aspect-[16/7] w-full overflow-hidden rounded-lg">
              <Image
                src="https://ext.same-assets.com/2671218306/934163015.webp"
                alt="Hero Image 2"
                fill
                className="object-cover transform scale-105"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-white p-8">
                <h1 className="text-4xl font-bold text-center mb-4">
                  عروض رمضان
                </h1>
                <p className="text-xl text-center mb-6">
                  اغتنم الفرصة واشتري من أكثر من منتج من حوائج المميزة
                </p>
                <Button
                  size="lg"
                  className="bg-secondary text-white hover:bg-secondary/90"
                >
                  تسوق الآن
                </Button>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
}
