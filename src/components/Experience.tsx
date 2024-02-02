import {
  AmazonwebservicesOriginalIcon,
  DockerPlainIcon,
  GraphqlPlainIcon,
  JavascriptPlainIcon,
  JestPlainIcon,
  KubernetesPlainIcon,
  LaravelPlainIcon,
  NestjsPlainIcon,
  NextjsLineIcon,
  NodejsPlainIcon,
  PhpPlainIcon,
  PostgresqlPlainIcon,
  ReactOriginalIcon,
  TailwindcssPlainIcon,
  TypescriptPlainIcon,
} from "react-devicons";

import TranslateString from "@/layouts/components/TranslationString";

export default function Experience() {
  const translate = TranslateString();
  const experienceData = [
    {
      companyName: "Grupo Adriano Corbuccio",
      startDate: "set 2022",
      endDate: "ago 2023",
      description: translate("AdrianoCourbuccioDescription"),
      skills: [
        <ReactOriginalIcon color="gray" size="1.2em" />,
        <NextjsLineIcon color="gray" size="1.2em" />,
        <TailwindcssPlainIcon color="gray" size="1.2em" />,
        <NodejsPlainIcon color="gray" size="1.2em" />,
        <NestjsPlainIcon color="gray" size="1.2em" />,
        <KubernetesPlainIcon color="gray" size="1.2em" />,
        <GraphqlPlainIcon color="gray" size="1.2em" />,
        <DockerPlainIcon color="gray" size="1.2em" />,
        <PostgresqlPlainIcon color="gray" size="1.2em" />,
        <LaravelPlainIcon color="gray" size="1.2em" />,
        <JavascriptPlainIcon color="gray" size="1.2em" />,
        <TypescriptPlainIcon color="gray" size="1.2em" />,
        <PhpPlainIcon color="gray" size="1.2em" />,
      ],
    },
    {
      companyName: "Wejam Digital",
      startDate: "mar 2021",
      endDate: "set 2022",
      description: translate("WejamDescription"),
      skills: [
        <NodejsPlainIcon color="gray" size="1.2em" />,
        <DockerPlainIcon color="gray" size="1.2em" />,
        <PostgresqlPlainIcon color="gray" size="1.2em" />,
        <JestPlainIcon color="gray" size="1.2em" />,
        <JavascriptPlainIcon color="gray" size="1.2em" />,
        <TypescriptPlainIcon color="gray" size="1.2em" />,
        <PhpPlainIcon color="gray" size="1.2em" />,
        <AmazonwebservicesOriginalIcon color="gray" size="1.2em" />,
      ],
    },
    {
      companyName: "Phooto",
      startDate: "jun 2020",
      endDate: "set 2020",
      description: translate("PhootoDescription"),
      skills: [
        <ReactOriginalIcon color="gray" size="1.2em" />,
        <JavascriptPlainIcon color="gray" size="1.2em" />,
      ],
    },
  ];

  return (
    <div className="overflow-y-scroll h-40v no-scrollbar flex flex-col gap-4 w-3/4">
      {experienceData.map((experience) => {
        return (
          <div
            key={experience.companyName}
            className="dark:text-white text-custom-black flex flex-col gap-2 border-b border-zinc-900"
          >
            <p className="text-2xl">{experience.companyName}</p>
            <p className="text-gray-400 text-xs">
              {experience.startDate} - {experience.endDate}
            </p>
            <p className="text-sm pb-2">{experience.description}</p>
            <div className="flex flex-wrap gap-2 items-center pb-4">
              {experience.skills.map((skill) => {
                return <span>{skill}</span>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
