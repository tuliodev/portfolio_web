import {
  AmazonwebservicesOriginalIcon,
  AzurePlainIcon,
  BitbucketOriginalIcon,
  Css3PlainIcon,
  DockerPlainIcon,
  ExpressOriginalIcon,
  GithubOriginalIcon,
  GitlabPlainIcon,
  GraphqlPlainIcon,
  Html5PlainIcon,
  JavascriptPlainIcon,
  JestPlainIcon,
  KubernetesPlainIcon,
  MongodbPlainIcon,
  MysqlPlainIcon,
  NestjsPlainIcon,
  NextjsLineIcon,
  NodejsPlainIcon,
  PostgresqlPlainIcon,
  ReactOriginalIcon,
  TailwindcssPlainIcon,
  TypescriptPlainIcon,
} from "react-devicons";

export default function Skills() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-white">Frontend</h1>
      <div className="flex flex-wrap gap-2">
        <ReactOriginalIcon color="white" size="1.5em" />
        <TailwindcssPlainIcon color="white" size="1.5em" />
        <NextjsLineIcon color="white" size="1.5em" />
        <JestPlainIcon color="white" size="1.5em" />
        <Html5PlainIcon color="white" size="1.5em" />
        <Css3PlainIcon color="white" size="1.5em" />
        <JavascriptPlainIcon color="white" size="1.5em" />
        <TypescriptPlainIcon color="white" size="1.5em" />
      </div>
      <h1 className="text-white">Backend</h1>
      <div className="flex flex-wrap gap-2">
        <NodejsPlainIcon color="white" size="1.5em" />
        <NestjsPlainIcon color="white" size="1.5em" />
        <ExpressOriginalIcon
          color="white"
          size="1.5em"
          className="bg-white p-1"
        />
        <GraphqlPlainIcon color="white" size="1.5em" />
        <PostgresqlPlainIcon color="white" size="1.5em" />
        <MysqlPlainIcon color="white" size="1.5em" />
        <MongodbPlainIcon color="white" size="1.5em" />
        <JestPlainIcon color="white" size="1.5em" />
        <KubernetesPlainIcon color="white" size="1.5em" />
        <JavascriptPlainIcon color="white" size="1.5em" />
        <TypescriptPlainIcon color="white" size="1.5em" />
      </div>
      <h1 className="text-white">DevOps</h1>
      <div className="flex flex-wrap gap-2">
        <AmazonwebservicesOriginalIcon color="white" size="1.5em" />
        <AzurePlainIcon color="white" size="1.5em" />
        <DockerPlainIcon color="white" size="1.5em" />
        <KubernetesPlainIcon color="white" size="1.5em" />
      </div>
      <h1 className="text-white">Versionamento</h1>
      <div className="flex flex-wrap gap-2">
        <BitbucketOriginalIcon color="white" size="1.5em" />
        <GithubOriginalIcon color="white" size="1.5em" />
        <GitlabPlainIcon color="white" size="1.5em" />
      </div>
    </div>
  );
}
