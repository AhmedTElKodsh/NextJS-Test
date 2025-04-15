"use client";

export default function FeatureSection() {
  return (
    <section className="hawaaeg-container py-12">
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold">
          حوائج
        </h2>
        <p className="text-lg mt-2">
          حيث تلتقي الجودة والأناقة بالسعر المناسب
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-background rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted">
            <svg className="h-6 w-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4l3 3" />
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-2">خدمة عملاء مميزة</h3>
          <p className="text-muted-foreground text-sm">
            ساعات عمل ممتدة ودعم مباشر على مدار الأسبوع من خلال الواتساب
          </p>
        </div>

        <div className="bg-background rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted">
            <svg className="h-6 w-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-2">جودة مضمونة 100%</h3>
          <p className="text-muted-foreground text-sm">
            أفضل جودة منتجات, نضمن لك رضاك التام
          </p>
        </div>

        <div className="bg-background rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted">
            <svg className="h-6 w-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
              <path d="M16 8l2 3h4l-3 5H8" />
              <circle cx="7" cy="20" r="1" />
              <circle cx="17" cy="20" r="1" />
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-2">التوصيل السريع</h3>
          <p className="text-muted-foreground text-sm">
            المنتج يوصل خلال أيام باسرع وقت لكل المحافظات
          </p>
        </div>

        <div className="bg-background rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
          <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-muted">
            <svg className="h-6 w-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M7 15h0M2 9.5h20" />
            </svg>
          </div>
          <h3 className="text-lg font-medium mb-2">خدمة الدفع عند الاستلام</h3>
          <p className="text-muted-foreground text-sm">
            استرد الآن او عند الإستلام من خلال فريق الدعم والمساعدة
          </p>
        </div>
      </div>
    </section>
  );
}
