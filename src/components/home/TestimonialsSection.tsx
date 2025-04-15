"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Mock data for testimonials
const TESTIMONIALS = [
  {
    id: "1",
    name: "حسن محمد",
    comment: "خدمة ممتازة ومنتجات ذات جودة عالية وسعر مناسب، سرعة في التوصيل جعلتني راضٍ لأقصى حد. أنصح جميع من يبحث عن منتجات منزلية بالتعامل مع حوائج.",
    rating: 5,
  },
  {
    id: "2",
    name: "كريم محمد",
    comment: "وجدت منتجات ذات جودة عالية وسعر مناسب، وصلت بسرعة وكانت مطابقة تماماً للوصف. الدفع عند الاستلام سهل التعامل بكل أريحية.",
    rating: 5,
  },
  {
    id: "3",
    name: "عمر حاتم",
    comment: "أول مرة أتعامل مع حوائج وكانت تجربة ممتازة، خدمة عملاء على أعلى مستوى والرد سريع على الاستفسارات. المنتج وصل في الوقت المحدد وبحالة ممتازة.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="hawaaeg-container py-12">
      <h2 className="text-2xl font-bold text-center mb-2">آراء عملائنا</h2>
      <p className="text-muted-foreground text-center mb-8">ما يقوله عملاؤنا عن تجربتهم مع حوائج</p>

      <Carousel className="w-full">
        <CarouselContent>
          {TESTIMONIALS.map((testimonial) => (
            <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-4">
              <Card className="border-border bg-background h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center space-x-2 space-x-reverse mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <blockquote className="mt-2 text-base flex-grow">
                    <p className="text-muted-foreground">"{testimonial.comment}"</p>
                  </blockquote>

                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="font-medium text-primary">{testimonial.name}</p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4 space-x-2 space-x-reverse">
          <CarouselPrevious className="relative inset-0 translate-y-0" />
          <CarouselNext className="relative inset-0 translate-y-0" />
        </div>
      </Carousel>
    </section>
  );
}
