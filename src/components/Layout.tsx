import { ReactNode, useEffect, useState } from "react";
import { Roboto } from "next/font/google";

import AnimatedCursor from "react-animated-cursor";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
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
      {children}
    </main>
  );
}
