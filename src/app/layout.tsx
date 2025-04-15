import type { Metadata } from "next"
import "./globals.css"
import ClientBody from "./ClientBody"

export const metadata: Metadata = {
  title: "Hawaaeg - حوائج",
  description: "Hawaaeg - Online Store for Home Products and Accessories",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <ClientBody>
          <div className="bg-primary text-primary-foreground py-1 text-center text-sm">
            توصيل لجميع أنحاء الجمهورية
          </div>
          <main>{children}</main>
        </ClientBody>
      </body>
    </html>
  )
}
