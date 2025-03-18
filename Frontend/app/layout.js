import Header from "../components/Header";
import "./styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container m-auto">
        <Header />
        {children}
      </body>
    </html>
  );
}
