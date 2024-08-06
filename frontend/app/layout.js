import "./globals.css";

export const metadata = {
  title: "Priscilla Goessens, Developpeuse front end",
  description: "Priscilla Goessens Developpeuse front end, basée dans la metropole Lilloise, Portfolio. Creatrice de site web et d'application en react, next, html, css, javascript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body >{children}</body>
    </html>
  );
}
