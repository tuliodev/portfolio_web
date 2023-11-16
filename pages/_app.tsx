import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

import AnimatedCursor from "react-animated-cursor";

import "@/styles/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <ThemeProvider attribute="class">
      <main className={`h-screen ${roboto.className}`}>
        {!isMobile && (
          <AnimatedCursor
            innerSize={15}
            outerSize={15}
            color="128, 128, 128"
            outerAlpha={0.4}
            innerScale={0.7}
            outerScale={5}
          />
        )}
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
