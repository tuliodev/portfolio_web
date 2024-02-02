import { useState } from "react";

import i18n from "@/config/i18n";

export default function TranslateButton() {
  const [currentLanguage, setCurrentLanguage] = useState<string>("pt");

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };
  return (
    <button
      className="dark:text-white text-custom-black ml-1 sm:ml-3 w-fit transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-150 mt-0.5 sm:mt-1 "
      onClick={toggleLanguage}
    >
      {currentLanguage === "pt" ? <p>🇧🇷</p> : <p>🇺🇸</p>}
    </button>
  );
}
