import {
  AmazonwebservicesOriginalIcon,
  AzurePlainIcon,
  BitbucketOriginalIcon,
  Css3PlainIcon,
  DockerPlainIcon,
  GithubOriginalIcon,
  GitlabPlainIcon,
  GitPlainIcon,
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
  RedisPlainIcon,
  TailwindcssPlainIcon,
  TypescriptPlainIcon,
} from "react-devicons";

export default function Skills() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="dark:text-white text-custom-black">Frontend</h1>
      <div className="flex flex-wrap gap-2 hover:opacity-50 ">
        <ReactOriginalIcon color="gray" size="1.5em" />
        <TailwindcssPlainIcon color="gray" size="1.5em" />
        <NextjsLineIcon color="gray" size="1.5em" />
        <JestPlainIcon color="gray" size="1.5em" />
        <Html5PlainIcon color="gray" size="1.5em" />
        <Css3PlainIcon color="gray" size="1.5em" />
        <JavascriptPlainIcon color="gray" size="1.5em" />
        <TypescriptPlainIcon color="gray" size="1.5em" />
      </div>
      <h1 className="dark:text-white text-custom-black">Backend</h1>
      <div className="flex flex-wrap gap-2 hover:opacity-50 ">
        <NodejsPlainIcon color="gray" size="1.5em" />
        <NestjsPlainIcon color="gray" size="1.5em" />
        <GraphqlPlainIcon color="gray" size="1.5em" />
        <PostgresqlPlainIcon color="gray" size="1.5em" />
        <MysqlPlainIcon color="gray" size="1.5em" />
        <MongodbPlainIcon color="gray" size="1.5em" />
        <JestPlainIcon color="gray" size="1.5em" />
        <RedisPlainIcon color="gray" size="1.5em" />
        <KubernetesPlainIcon color="gray" size="1.5em" />
        <JavascriptPlainIcon color="gray" size="1.5em" />
        <TypescriptPlainIcon color="gray" size="1.5em" />
      </div>
      <h1 className="dark:text-white text-custom-black">DevOps</h1>
      <div className="flex flex-wrap gap-2 hover:opacity-50 ">
        <AmazonwebservicesOriginalIcon color="gray" size="1.5em" />
        <AzurePlainIcon color="gray" size="1.5em" />
        <DockerPlainIcon color="gray" size="1.5em" />
        <KubernetesPlainIcon color="gray" size="1.5em" />
      </div>
      <h1 className="dark:text-white text-custom-black">Versionamento</h1>
      <div className="flex flex-wrap gap-2 hover:opacity-50 ">
        <BitbucketOriginalIcon color="gray" size="1.5em" />
        <GitPlainIcon color="gray" size="1.5em" />
        <GithubOriginalIcon color="gray" size="1.5em" />
        <GitlabPlainIcon color="gray" size="1.5em" />
      </div>
    </div>
  );
}
