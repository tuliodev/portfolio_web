import { useState } from "react";

import { MagicMotion } from "react-magic-motion";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import ThemeButton from "@/components/ThemeButton";

export default function Home() {
  const optionsList = ["Sobre", "Habilidades", "Experiência", "Contato"];

  const [currentOption, setCurrentOption] = useState<string | null>("Sobre");

  const handleOptionClick = (event: React.MouseEvent<HTMLParagraphElement>) => {
    const target = event.currentTarget as HTMLParagraphElement;

    const value = target.getAttribute("id");

    setCurrentOption(value);
  };

  const renderOption = (param: String | null) => {
    switch (param) {
      case "Sobre":
        return <About />;
      case "Habilidades":
        return <Skills />;
      case "Experiência":
        return <Experience />;
      case "Contato":
        return <Contact />;
      default:
        break;
    }
  };

  return (
    <MagicMotion>
      <div className="grid grid-cols-12 mt-6 sm:mt-10 m-auto w-11/12 border border-gray-400 border-opacity-25 max-h-screen h-92v dark:bg-custom-black bg-white  dark:bg-opacity-80 bg-opacity-50 cursor-none">
        <section className="col-span-12 mt-5 sm:mt-11 ml-5 sm:ml-6">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-start justify-start">
              <p className="text-xl sm:text-5xl dark:text-white text-custom-black">
                Tulio Resende
              </p>
              <p className="ml-1 sm:ml-3 text-gray-400">Fullstack Developer</p>
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
                    <a>{option}</a>
                  </p>
                );
              })}
            </div>
            <ThemeButton />
          </div>
        </section>
        <section className="col-span-10 sm:col-span-10 col-start-2 sm:col-start-7 ">
          {renderOption(currentOption)}
        </section>
      </div>
    </MagicMotion>
  );
}
