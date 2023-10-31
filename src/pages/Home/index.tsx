import { useState } from "react";

import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  const optionsList = ["Home", "Skills", "Info", "Contact"];

  const [currentOption, setCurrentOption] = useState<string | null>("Home");

  const handleOptionClick = (event: React.MouseEvent<HTMLParagraphElement>) => {
    const target = event.currentTarget as HTMLParagraphElement;

    const value = target.getAttribute("id");

    setCurrentOption(value);
  };

  const renderOption = (param: String | null) => {
    switch (param) {
      case "Home":
        return <About />;
      case "Skills":
        return <Skills />;
      case "Info":
        return (
          <div>
            <h1 className="text-white">Info</h1>
          </div>
        );
      case "Contact":
        return (
          <div>
            <h1 className="text-white">Contact</h1>
          </div>
        );
      default:
        break;
    }
  };

  return (
    <div className="grid grid-cols-12 mt-6 sm:mt-10 m-auto w-11/12 border border-gray-400 h-92v bg-custom-black">
      <section className="col-span-12 mt-5 sm:mt-11 ml-2 sm:ml-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-start justify-start">
            <p className="text-xl sm:text-5xl text-white">Tulio Resende</p>
            <p className="ml-1 sm:ml-3 text-gray-400">Fullstack Developer</p>
          </div>
          <div className="flex flex-col gap-1">
            {optionsList.map((option) => {
              return (
                <p
                  className="text-white ml-1 sm:ml-3 hover:text-gray-400 cursor-pointer hover:delay-75 w-fit"
                  id={option}
                  onClick={handleOptionClick}
                >
                  {option}
                </p>
              );
            })}
          </div>
        </div>
      </section>
      <section className="col-span-10 sm:col-span-10 col-start-2 sm:col-start-7 ">
        {renderOption(currentOption)}
      </section>
    </div>
  );
}
