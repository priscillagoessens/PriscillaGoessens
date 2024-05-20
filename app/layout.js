import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body >{children}
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <textarea name="message"></textarea>
      </form>
      </body>
    </html>
  );
}
