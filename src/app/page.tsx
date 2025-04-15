import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import CategorySection from "@/components/home/CategorySection";
import FeatureSection from "@/components/home/FeatureSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturedProducts />
      <CategorySection />
      <FeatureSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
