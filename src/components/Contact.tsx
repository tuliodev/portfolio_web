import {
  GithubOriginalIcon,
  GooglePlainIcon,
  LinkedinPlainIcon,
} from "react-devicons";

export default function Contact() {
  const data = [
    {
      url: "https://www.linkedin.com/in/tulio-resende-08ba441a7",
      component: <LinkedinPlainIcon color="gray" size="2em" />,
      content: "Tulio Resende",
    },
    {
      url: "https://github.com/tuliodev",
      component: <GithubOriginalIcon color="gray" size="2em" />,
      content: "tuliodev",
    },
    {
      url: "mailto:resendetuliodev@gmail.com",
      component: <GooglePlainIcon color="gray" size="2em" />,
      content: "resendetuliodev@gmail.com",
    },
  ];

  return (
    <div className="flex flex-col gap-3 max-w-full sm:w-5/6">
      {data.map((data) => {
        return (
          <div className=" border border-opacity-25 border-gray-600 p-4 opcaity-1">
            <div className="flex flex-wrap items-center gap-3 hover:opacity-25  ">
              <a href={data.url} target="_blank" rel="noopener noreferrer">
                {" "}
                {data.component}
              </a>
              <a
                href={data.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 text-xs"
              >
                {data.content}
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
