import TranslateString from "@/layouts/components/TranslationString";

export default function About() {
  const translate = TranslateString();
  return (
    <p className="dark:text-white text-custom-black w-3/4">
      {translate("AboutText")}
    </p>
  );
}
