"use client";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../../redux/store/store";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="container m-auto ">
        <Provider store={store}>
          <Header />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
