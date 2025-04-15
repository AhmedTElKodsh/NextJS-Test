import ProductDetails from "@/components/product/ProductDetails";

// Generate static paths for all products
export const generateStaticParams = () => {
  // This would typically come from a CMS or API
  const slugs = ["bathroom-accessories-set"];
  return slugs.map((slug) => ({ slug }));
};

export default function ProductPage({ params }: { params: { slug: string } }) {
  return <ProductDetails slug={params.slug} />;
}
