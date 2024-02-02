import {
  AmazonwebservicesOriginalIcon,
  CodepenPlainIcon,
  DockerPlainIcon,
  GithubOriginalIcon,
  GraphqlPlainIcon,
  JavascriptPlainIcon,
  JestPlainIcon,
  NextjsLineIcon,
  NodejsPlainIcon,
  PhpPlainIcon,
  PostgresqlPlainIcon,
  ReactOriginalIcon,
  TailwindcssPlainIcon,
  TypescriptPlainIcon,
} from "react-devicons";

import TranslateString from "@/layouts/components/TranslationString";

export default function Projects() {
  const translate = TranslateString();
  const experienceData = [
    {
      projectName: "DAO DAPP",
      description: translate("DaoProjectDescription"),
      repository: "https://github.com/tuliodev/dao-d-app",
      projectUrl: "https://dao-token-my-team-88a72bb6.vercel.app/",
      skills: [
        <NextjsLineIcon color="gray" size="1.2em" />,
        <TailwindcssPlainIcon color="gray" size="1.2em" />,
        <NodejsPlainIcon color="gray" size="1.2em" />,
        <GraphqlPlainIcon color="gray" size="1.2em" />,
        <JavascriptPlainIcon color="gray" size="1.2em" />,
        <TypescriptPlainIcon color="gray" size="1.2em" />,
        <p className="text-sm text-gray-400">Solidity</p>,
        <p className="text-sm text-gray-400">Ethers</p>,
        <p className="text-sm text-gray-400">Subgraph</p>,
      ],
    },
    {
      projectName: "Docworking",
      description: translate("DocworkingProjectDescription"),
      repository: "https://github.com/tuliodev/",
      projectUrl: "https://www.docworking.com.br/",
      skills: [
        <ReactOriginalIcon color="gray" size="1.2em" />,
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
      projectName: "Websocket binance app",
      description: translate("BinanceSocketProjectDescription"),
      repository: "https://github.com/tuliodev/frontend-test",
      projectUrl: "https://github.com/tuliodev/frontend-test",
      skills: [
        <ReactOriginalIcon color="gray" size="1.2em" />,
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
  ];

  return (
    <div className="overflow-y-scroll h-40v no-scrollbar flex flex-col gap-4 w-3/4">
      {experienceData.map((project) => {
        return (
          <div
            key={project.projectName}
            className="dark:text-white text-custom-black flex flex-col gap-2 border-b border-zinc-900"
          >
            <p className="text-2xl">{project.projectName}</p>

            <div className="flex flex-wrap gap-2 items-center pb-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.repository}
              >
                <GithubOriginalIcon color="gray" size="1.2em" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={project.projectUrl}
              >
                <CodepenPlainIcon color="gray" size="1.2em" />
              </a>
            </div>
            <p
              className="text-sm pb-2"
              dangerouslySetInnerHTML={{ __html: project.description }}
            ></p>
            <div className="flex flex-wrap gap-2 items-center pb-4">
              {project.skills.map((skill) => {
                return <span>{skill}</span>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
