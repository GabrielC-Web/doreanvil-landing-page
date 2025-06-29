import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import angularIcon from "../assets/angular-icon-1.svg";
import {
  bootstrapIcon,
  flutterIcon,
  javascriptIcon,
  kotlinIcon,
  reactIcon,
  tailwindIcon,
  typescriptIcon,
} from "@/assets/icons";

export default function ProjectViewer({ project }: { project: any }) {
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
    <div className="relative max-w-[85%] xl:max-w-4xl max-h-[70%] xl:max-h-[500px] w-full h-full border-2 border-orange-700">
      {/* En tamaño de escritorio */}
      <figure
        className={
          "flex justify-center h-full w-full relative " +
          (windowSize.width < 1024 ? "hidden" : "")
        }
      >
        {/* Imagen grande */}
        <img
          src={project.img.desktop}
          className={"w-full h-full absolute "}
          alt=""
        />

        {/* Imagen pequeña */}
        <img
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
          <div className="w-full h-6 flex items-center gap-2 ">
            {project.skills.map((skill: { name: string }) => (
              <div className="flex items-center gap-1">
                <img
                  src={skillIcons.find((icon) => icon.name == skill.name)?.img}
                  alt={skill.name}
                  className="size-6"
                />
              </div>
            ))}
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
            className="w-[244px] aspect-[0.48] border-2 border-orange-700"
            src={project.img.mobile}
            alt=""
          />

          {/* Project description */}
          <div className="description">
            {/* Opened */}
            {descriptionOpened && (
              <div className="description-opened transition-all duration-300">
                <div className="p-3">
                  {/* skills used */}
                  <div className="w-full h-6 flex items-center gap-2 px-3">
                    {project.skills.map((skill: { name: string }) => (
                      <div className="flex items-center gap-1">
                        <img
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
                  <p className="p-3">{project.description}</p>
                </div>
                <a href="" className="text-d-blue">
                  Visit
                </a>
                <div
                  className="w-full h-12 flex items-center gap-3 p-3 cursor-pointer text-white"
                  onClick={() => {
                    setDescriptionOpened(false);
                  }}
                >
                  <ChevronLeft className="text-white hover:translate-x-3"></ChevronLeft>
                  <span>Close</span>
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
                  <div className="text-white flex items-center gap-3 cursor-pointer">
                    <span className="">Open</span>
                    <ChevronRight className="text-white hover:translate-x-3"></ChevronRight>
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
