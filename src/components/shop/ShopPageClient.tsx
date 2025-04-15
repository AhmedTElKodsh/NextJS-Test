"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FilterX, Search, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Mock data for products - using the same data from FeaturedProducts
const SHOP_PRODUCTS = [
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
  },
  {
    id: "9",
    name: "كوب بيركس بكفر جلد",
    price: 49,
    oldPrice: 75,
    imageUrl: "https://ext.same-assets.com/2671218306/1020051824.jpeg",
    category: "HOME",
    slug: "pyrex-cup-leather-cover"
  },
  {
    id: "10",
    name: "كبسولة حفظ الأعشاب",
    price: 99,
    oldPrice: 165,
    imageUrl: "https://ext.same-assets.com/2671218306/1048380717.jpeg",
    category: "HOME",
    slug: "herb-preservation-capsule"
  },
  {
    id: "11",
    name: "مكبس البرجر",
    price: 99,
    oldPrice: 120,
    imageUrl: "https://ext.same-assets.com/2671218306/2188102176.webp",
    category: "HOME",
    slug: "burger-press"
  },
  {
    id: "12",
    name: "عرض رمضان",
    price: 949,
    oldPrice: 1410,
    imageUrl: "https://ext.same-assets.com/2671218306/934163015.webp",
    category: "HOME",
    slug: "ramadan-offer"
  }
];

// Categories for filter
const CATEGORIES = [
  { id: "all", name: "جميع الفئات" },
  { id: "home-tools", name: "أدوات منزلية" },
  { id: "kitchen", name: "مطبخ" },
  { id: "appliances", name: "أجهزة" },
  { id: "accessories", name: "إكسسوارات" }
];

export default function ShopPageClient() {
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("featured");

  // Filter products based on search and category
  const filteredProducts = SHOP_PRODUCTS.filter(product => {
    const matchesSearch = search
      ? product.name.toLowerCase().includes(search.toLowerCase())
      : true;

    const matchesCategory = selectedCategory === "all" || product.category.toLowerCase() === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "price-low") {
      return a.price - b.price;
    } else if (sortOrder === "price-high") {
      return b.price - a.price;
    } else if (sortOrder === "newest") {
      // In a real app, you would sort by date added
      return parseInt(b.id) - parseInt(a.id);
    }
    // Default: featured or any other value
    return 0;
  });

  return (
    <>
      <Header />

      <div className="hawaaeg-container py-8">
        {/* Page title and breadcrumb */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">المتجر</h1>
          <div className="text-sm text-muted-foreground mt-2">
            <Link href="/" className="hover:text-foreground">
              الرئيسية
            </Link>
            {" / "}
            <span>المتجر</span>
          </div>
        </div>

        {/* Search and filter */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Input
              type="search"
              placeholder="ابحث عن المنتجات..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pr-10"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="hidden md:flex items-center gap-2"
            >
              <SlidersHorizontal className="h-4 w-4" />
              الفلاتر
            </Button>

            <Select defaultValue={sortOrder} onValueChange={setSortOrder}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="ترتيب حسب" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">الأكثر شعبية</SelectItem>
                <SelectItem value="newest">الأحدث</SelectItem>
                <SelectItem value="price-low">السعر: من الأقل للأعلى</SelectItem>
                <SelectItem value="price-high">السعر: من الأعلى للأقل</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Mobile filter toggle */}
        <div className="md:hidden mb-4">
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="w-full flex items-center justify-center gap-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            {showFilters ? "إخفاء الفلاتر" : "عرض الفلاتر"}
          </Button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters sidebar */}
          {showFilters && (
            <div className="w-full md:w-64 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-medium">الفئات</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedCategory("all");
                      setSearch("");
                    }}
                    className="h-8 px-2 text-muted-foreground hover:text-foreground"
                  >
                    <FilterX className="h-4 w-4 mr-1" />
                    إزالة الفلاتر
                  </Button>
                </div>
                <div className="space-y-2">
                  {CATEGORIES.map((category) => (
                    <div key={category.id} className="flex items-center">
                      <button
                        onClick={() => setSelectedCategory(category.id)}
                        className={`text-sm py-1 w-full text-right ${
                          selectedCategory === category.id
                            ? "text-primary font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {category.name}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Products grid */}
          <div className={`flex-1 ${showFilters ? "" : "w-full"}`}>
            <p className="text-muted-foreground mb-6">
              عرض 1-{sortedProducts.length} من أصل {SHOP_PRODUCTS.length} نتيجة
            </p>

            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {sortedProducts.map((product) => (
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
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">لا توجد منتجات</h3>
                <p className="text-muted-foreground mb-6">
                  لم يتم العثور على منتجات تطابق معايير البحث الخاصة بك
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory("all");
                    setSearch("");
                  }}
                >
                  إزالة الفلاتر
                </Button>
              </div>
            )}

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-r-none rounded-l-md border-r-0"
                  disabled
                >
                  السابق
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  className="rounded-none"
                >
                  1
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-none"
                >
                  2
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-none"
                >
                  3
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-l-none rounded-r-md border-l-0"
                >
                  التالي
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
