import "./globals.css";
import Head from 'next/head';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <title>
          Priscilla Goessens, Developpeuse front end
        </title>
        <meta name="description" content="Priscilla Goessens Portfolio" key="desc" />
      </Head>
      <body >{children}</body>
    </html>
  );
}
