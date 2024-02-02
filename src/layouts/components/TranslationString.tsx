import { useTranslation } from "react-i18next";

const TranslateString = () => {
  const { t } = useTranslation();
  return (text: string) => t(text);
};

export default TranslateString;
