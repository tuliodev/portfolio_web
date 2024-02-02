import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import ThemeButton from "@/components/ThemeButton";
import TranslateButton from "@/components/TranslateButton";
import TranslateString from "@/layouts/components/TranslationString";

export default function Home() {
  const optionsList = ["About", "Skills", "Experience", "Projects", "Contact"];
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  const [currentOption, setCurrentOption] = useState<string | null>("About");

  const translate = TranslateString();

  useEffect(() => {
    setMounted(true);
    setTheme("dark");
  }, []);

  if (!mounted) {
    return null;
  }

  const handleOptionClick = (event: React.MouseEvent<HTMLParagraphElement>) => {
    const target = event.currentTarget as HTMLParagraphElement;

    const value = target.getAttribute("id");

    setCurrentOption(value);
  };

  const renderOption = (param: String | null) => {
    switch (param) {
      case "About":
        return <About />;
      case "Skills":
        return <Skills />;
      case "Experience":
        return <Experience />;
      case "Contact":
        return <Contact />;
      case "Projects":
        return <Projects />;
      default:
        break;
    }
  };

  return (
    <div className="grid grid-cols-12 mt-6 sm:mt-10 m-auto w-11/12 border border-gray-400 border-opacity-25 max-h-screen h-92v bg-white dark:bg-custom-black bg-opacity-50 dark:bg-opacity-15 cursor-none">
      <section className="col-span-12 mt-5 sm:mt-11 ml-5 sm:ml-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-start justify-start">
            <p className="text-xl sm:text-5xl text-custom-black dark:text-white">
              Tulio Resende
            </p>
            <p className="ml-1 sm:ml-3 text-gray-400">{translate("Role")}</p>
          </div>
          <div className="flex flex-col gap-1">
            {optionsList.map((option) => {
              return (
                <p
                  className="dark:text-white text-custom-black ml-1 sm:ml-3 hover:text-gray-400  hover:delay-75 w-fit"
                  id={option}
                  key={option}
                  onClick={handleOptionClick}
                >
                  <a>{translate(option)}</a>
                </p>
              );
            })}
          </div>
          <div className="flex flex-row items-center">
            <ThemeButton />
            <TranslateButton />
          </div>
        </div>
      </section>
      <section className="col-span-10 sm:col-span-10 col-start-2 sm:col-start-7 ">
        {renderOption(currentOption)}
      </section>
    </div>
  );
}
