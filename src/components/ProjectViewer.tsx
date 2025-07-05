import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import {
  angularIcon,
  bootstrapIcon,
  flutterIcon,
  javascriptIcon,
  kotlinIcon,
  nextjsIcon,
  reactIcon,
  tailwindIcon,
  typescriptIcon,
} from "@/assets/icons/icons";

export default function ProjectViewer({
  project,
}: {
  project: {
    name: string;
    description: string;
    img: {
      mobile: any;
      desktop: any;
    };
    id: number;
    skills: {
      name: string;
    }[];
    url: string;
    visitButtonText: string;
    openButtonText: string;
    closeButtonText: string;
  };
}) {
  const skillIcons: {
    img?: any;
    name: string;
  }[] = [
    {
      img: angularIcon,
      name: "Angular",
    },
    {
      name: "React",
      img: reactIcon,
    },
    {
      name: "Flutter",
      img: flutterIcon,
    },
    {
      name: "Kotlin",
      img: kotlinIcon,
    },
    {
      name: "Tailwind",
      img: tailwindIcon,
    },
    {
      name: "Bootstrap",
      img: bootstrapIcon,
    },
    {
      name: "TypeScript",
      img: typescriptIcon,
    },
    {
      name: "JavaScript",
      img: javascriptIcon,
    },
    {
      name: "Next.js",
      img: nextjsIcon,
    },
  ];

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [descriptionOpened, setDescriptionOpened] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize.width >= 1024 ? (
    <div className="relative max-w-[70%] xl:max-w-4xl max-h-[60%] xl:max-h-[500px] w-full h-full border-2 border-orange-700">
      {/* En tamaño de escritorio */}
      <figure
        className={
          "flex justify-center h-full w-full relative " +
          (windowSize.width < 1024 ? "hidden" : "")
        }
      >
        {/* Imagen grande */}
        <img
          loading="lazy"
          src={project.img.desktop}
          className={"w-full h-full absolute "}
          alt=""
        />

        {/* Imagen pequeña */}
        <img
          loading="lazy"
          className="h-full min-w-[244px] absolute top-12 left-full -translate-x-5/6 z-20 border-2 border-orange-700"
          style={{ boxShadow: "black -6px -6px 10px" }}
          src={project.img.mobile}
          alt=""
        />

        {/* Description */}
        <div className="project-description">
          <h3 className="text-center">{project.name}</h3>
          <p className="text-center">{project.description}</p>
          {/* skills used */}
          <div className="w-full h-6 flex justify-between items-center gap-2 pt-3">
            <div className="flex gap-2">
              {project.skills.map((skill: { name: string }, i) => (
                <div key={i} className="flex items-center gap-1">
                  <img
                    loading="lazy"
                    src={
                      skillIcons.find((icon) => icon.name == skill.name)?.img
                    }
                    alt={skill.name}
                    className="size-6"
                  />
                </div>
              ))}
            </div>
            <a href={project.url} target="_black" className="text-d-violet">
              {project.visitButtonText}
            </a>
            <div className="w-12"></div>
          </div>
        </div>
      </figure>
    </div>
  ) : (
    <div className="relative w-fit">
      {/* En tamaño pequeño */}
      <figure
        className={
          "flex flex-col justify-center h-full w-full relative " +
          (windowSize.width >= 1024 ? "hidden" : "")
        }
      >
        {/* Imagen y sidebutton */}
        <div className="w-fit flex">
          {/* Imagen */}
          <img
            loading="lazy"
            className="w-[244px] aspect-[0.48] border-2 border-orange-700"
            src={project.img.mobile}
            alt=""
          />

          {/* Project description */}
          <div className="description">
            {/* Opened */}
            {descriptionOpened && (
              <div className="description-opened transition-all duration-300">
                <div className="p-3 flex flex-col items-center">
                  {/* skills used */}
                  <div className="w-full h-6 flex items-center gap-2 px-3">
                    {project.skills.map((skill: { name: string }, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <img
                          loading="lazy"
                          src={
                            skillIcons.find((icon) => icon.name == skill.name)
                              ?.img
                          }
                          alt={skill.name}
                          className="size-6"
                        />
                      </div>
                    ))}
                  </div>
                  <h5 className="text-center p-3">{project.name}</h5>
                  <p className="p-3 !text-left">{project.description}</p>
                </div>
                <a href={project.url} target="_black" className="text-d-violet">
                  {project.visitButtonText}
                </a>
                <div
                  className="w-full h-12 flex items-center gap-3 p-3 cursor-pointer text-d-blue"
                  onClick={() => {
                    setDescriptionOpened(false);
                  }}
                >
                  <ChevronLeft className="hover:translate-x-3"></ChevronLeft>
                  <span>{project.closeButtonText}</span>
                </div>
              </div>
            )}

            {/* Closed */}

            {!descriptionOpened && (
              <div className="description-closed transition-all duration-300">
                {/* Expand arrow */}
                <div
                  className="expand-button"
                  onClick={() => {
                    setDescriptionOpened(true);
                  }}
                >
                  <div className="text-d-blue flex items-center gap-3 cursor-pointer">
                    <span className="">{project.openButtonText}</span>
                    <ChevronRight className=" hover:translate-x-3"></ChevronRight>
                  </div>
                </div>

                <div className="w-[244px] border-l-2 absolute top-full -translate-y-full h-12 border-orange-700 flex items-center justify-center transition-all">
                  <h5 className="text-center">{project.name}</h5>
                </div>
              </div>
            )}
          </div>
        </div>
      </figure>
    </div>
  );
}
