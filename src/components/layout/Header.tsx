"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, User, Search } from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="hawaaeg-container py-4">
        <div className="flex items-center justify-between">
          {/* Cart and user section */}
          <div className="flex items-center space-x-4 space-x-reverse">
            <Link
              href="/cart"
              className="flex flex-col items-center text-primary hover:text-primary/80 transition-colors"
            >
              <div className="relative">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </div>
              <span className="text-xs mt-1">السلة</span>
            </Link>

            <Link
              href="/wishlist"
              className="flex flex-col items-center text-primary hover:text-primary/80 transition-colors"
            >
              <Heart className="h-6 w-6" />
              <span className="text-xs mt-1">المفضلة</span>
            </Link>

            <Link
              href="/account"
              className="flex flex-col items-center text-primary hover:text-primary/80 transition-colors"
            >
              <User className="h-6 w-6" />
              <span className="text-xs mt-1">حسابي</span>
            </Link>
          </div>

          {/* Search section */}
          <div className="relative flex-1 mx-8">
            <div className="relative">
              <Input
                type="search"
                placeholder="ابحث عن المنتجات"
                className="w-full rounded-full pr-10 border-border bg-background/60"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          {/* Logo section */}
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src="https://ext.same-assets.com/2671218306/2625151046.svg"
                alt="Hawaaeg Logo"
                width={140}
                height={60}
                className="h-12 w-auto"
                unoptimized
              />
            </Link>
          </div>
        </div>

        {/* Navigation menu */}
        <nav className="mt-4">
          <ul className="flex space-x-6 space-x-reverse justify-center text-sm">
            <li>
              <Link
                href="/product-category/home-tools"
                className="hover:text-secondary transition-colors"
              >
                أدوات منزلية
              </Link>
            </li>
            <li>
              <Link
                href="/product-category/appliances"
                className="hover:text-secondary transition-colors"
              >
                أجهزة
              </Link>
            </li>
            <li>
              <Link
                href="/product-category/kitchen"
                className="hover:text-secondary transition-colors"
              >
                مطبخ
              </Link>
            </li>
            <li>
              <Link
                href="/product-category/toys"
                className="hover:text-secondary transition-colors"
              >
                ألعاب
              </Link>
            </li>
            <li>
              <Link
                href="/product-category/healthbeauty"
                className="hover:text-secondary transition-colors"
              >
                صحة وجمال
              </Link>
            </li>
            <li>
              <Link
                href="/product-category/tools"
                className="hover:text-secondary transition-colors"
              >
                أدوات
              </Link>
            </li>
            <li>
              <Link
                href="/product-category/officestationary"
                className="hover:text-secondary transition-colors"
              >
                قرطاسية
              </Link>
            </li>
            <li>
              <Link
                href="/product-category/baby"
                className="hover:text-secondary transition-colors"
              >
                أطفال
              </Link>
            </li>
            <li>
              <Link
                href="/product-category/electronics"
                className="hover:text-secondary transition-colors"
              >
                إلكترونيات
              </Link>
            </li>
            <li>
              <Link
                href="/product-category/accessories"
                className="hover:text-secondary transition-colors"
              >
                إكسسوارات
              </Link>
            </li>
            <li>
              <Link
                href="/product-category/fashion"
                className="hover:text-secondary transition-colors"
              >
                موضة
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
