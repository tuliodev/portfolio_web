import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

import AnimatedCursor from "react-animated-cursor";

import "@/styles/globals.css";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`h-screen ${roboto.className}`}>
      <AnimatedCursor
        innerSize={15}
        outerSize={15}
        color="255, 255 ,255"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={5}
      />
      <Component {...pageProps} />
    </main>
  );
}
