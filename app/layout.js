import "./globals.css";

export const metadata = {
  title: "Hala | Welcome",
  description: "A simple Next.js app with Arabic greeting."
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        {children}
      </body>
    </html>
  );
}
