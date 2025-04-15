"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <div className="hawaaeg-container pb-6">
      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        {/* Brand and Description section */}
        <div className="md:w-1/3">
          <Image
            src="https://ext.same-assets.com/2671218306/2625151046.svg"
            alt="Hawaaeg Logo"
            width={140}
            height={60}
            className="h-12 w-auto mb-4 invert"
            unoptimized
          />
          <p className="text-primary-foreground text-sm mb-4">
            حوائج فيه كل المنتجات اللي بتبحث فيها بأعلى جودة
            <br />
            انت تستحق تجربة تسوق لن لها مثيل
          </p>
        </div>

        {/* Features section */}
        <div className="flex justify-center items-center mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="mb-2">
                <svg className="h-10 w-10 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2" />
                  <path d="M2 10h20" />
                  <path d="M6 15h4" />
                  <path d="M14 15h4" />
                </svg>
              </div>
              <h4 className="text-primary-foreground font-medium text-sm">خدمة الدفع عند الاستلام</h4>
              <p className="text-xs text-primary-foreground/80 mt-1">استرد الآن او عند الإستلام</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-2">
                <svg className="h-10 w-10 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4l3 3" />
                </svg>
              </div>
              <h4 className="text-primary-foreground font-medium text-sm">خدمة عملاء مميزة</h4>
              <p className="text-xs text-primary-foreground/80 mt-1">متاح دائمًا على مدار أيام الأسبوع</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-2">
                <svg className="h-10 w-10 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              </div>
              <h4 className="text-primary-foreground font-medium text-sm">جودة مضمونة 100%</h4>
              <p className="text-xs text-primary-foreground/80 mt-1">أفضل جودة منتجات</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-2">
                <svg className="h-10 w-10 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
                  <path d="m16 8 2 3h4l-3 5H8" />
                  <circle cx="7" cy="20" r="1" />
                  <circle cx="17" cy="20" r="1" />
                </svg>
              </div>
              <h4 className="text-primary-foreground font-medium text-sm">التوصيل السريع</h4>
              <p className="text-xs text-primary-foreground/80 mt-1">المنتج يوصل خلال أيام باسرع وقت</p>
            </div>
          </div>
        </div>
      </div>

      {/* Links sections */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8 mt-8">
        <div>
          <h3 className="text-primary-foreground font-bold mb-4">روابط هامة</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/who-us" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">
                من نحن
              </Link>
            </li>
            <li>
              <Link href="/terms-and-conditions" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">
                الشروط والأحكام
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">
                سياسة الخصوصية
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-primary-foreground font-bold mb-4">التصنيفات</h3>
          <div className="grid grid-cols-2 gap-2">
            <ul className="space-y-2">
              <li>
                <Link href="/product-category/appliances" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">
                  أجهزة
                </Link>
              </li>
              <li>
                <Link href="/product-category/toys" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">
                  ألعاب
                </Link>
              </li>
              <li>
                <Link href="/product-category/tools" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">
                  أدوات
                </Link>
              </li>
              <li>
                <Link href="/product-category/kitchen" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">
                  مطبخ
                </Link>
              </li>
              <li>
                <Link href="/product-category/home-tools" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">
                  أدوات منزلية
                </Link>
              </li>
              <li>
                <Link href="/product-category/baby" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">
                  أطفال
                </Link>
              </li>
            </ul>

            <ul className="space-y-2">
              <li>
                <Link href="/product-category/accessories" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">
                  إكسسوارات
                </Link>
              </li>
              <li>
                <Link href="/product-category/electronics" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">
                  إلكترونيات
                </Link>
              </li>
              <li>
                <Link href="/product-category/healthbeauty" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">
                  صحة وجمال
                </Link>
              </li>
              <li>
                <Link href="/product-category/officestationary" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">
                  قرطاسية
                </Link>
              </li>
              <li>
                <Link href="/product-category/fashion" className="text-primary-foreground/80 hover:text-primary-foreground text-sm">
                  موضة
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-primary-foreground font-bold mb-4">سوشيال ميديا</h3>
          <div className="flex items-center space-x-4 space-x-reverse">
            <Link
              href="https://www.facebook.com/profile.php?id=61566508693971"
              target="_blank"
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-full"
            >
              <Facebook className="h-5 w-5 text-primary-foreground" />
            </Link>
            <Link
              href="https://www.instagram.com/hawaaeg1/"
              target="_blank"
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-full"
            >
              <Instagram className="h-5 w-5 text-primary-foreground" />
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=201080908442"
              target="_blank"
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-full"
            >
              <Phone className="h-5 w-5 text-primary-foreground" />
            </Link>
          </div>
          <p className="text-primary-foreground/80 text-sm mt-4">
            للتعاون معنا او الامور العامة
          </p>
          <Link href="tel:201080908442" className="text-primary-foreground hover:underline">
            00201080908442
          </Link>
        </div>
      </div>

      {/* Payment methods and copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-primary-foreground/20">
        <div className="flex space-x-3 space-x-reverse mb-4 md:mb-0">
          <Image
            src="https://ext.same-assets.com/2671218306/518699830.svg"
            alt="Cash on Delivery"
            width={50}
            height={30}
            className="h-8 bg-white p-1 rounded"
            unoptimized
          />
          <Image
            src="https://ext.same-assets.com/2671218306/377041767.svg"
            alt="Visa"
            width={50}
            height={30}
            className="h-8 bg-white p-1 rounded"
            unoptimized
          />
          <Image
            src="https://ext.same-assets.com/2671218306/191878657.svg"
            alt="Mastercard"
            width={50}
            height={30}
            className="h-8 bg-white p-1 rounded"
            unoptimized
          />
        </div>

        <div className="text-center md:text-right">
          <p className="text-xs text-primary-foreground/80">
            All Copyrights belong to Hawaaeg, 2025.
          </p>
          <p className="text-xs text-primary-foreground/80 mt-1">
            Online Store Powered by hawaaeg
          </p>
        </div>
      </div>
    </div>
  );
}
