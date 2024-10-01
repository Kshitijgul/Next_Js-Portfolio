import "@/styles/globals.css";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import Header from "../components/Header";

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <div className="Main">
        {/* <div className="header">
          <Link href="/">Home </Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div> */}
 
        <AnimatePresence mode="wait">
          <Component key={router.route} {...pageProps} />;
        </AnimatePresence>
      </div>
    </>
  );
}
