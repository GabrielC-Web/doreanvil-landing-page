import { useEffect, useState } from "react";

export default function ProjectViewer({ project }: { project: any }) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // eslint-disable-next-line react-hooks/rules-of-hooks
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
    <div className="relative max-w-[85%] xl:max-w-5xl max-h-[80%] xl:max-h-[550px] w-full h-full border-2 border-orange-700">
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
          className="h-full absolute top-12 left-full -translate-x-5/6 z-20 border-2 border-orange-700"
          style={{ boxShadow: "black -6px -6px 10px" }}
          src={project.img.mobile}
          alt=""
        />
        <div className="project-description" style={{ marginRight: `260px` }}>
          <h3 className="text-center">{project.name}</h3>
          <p className="text-center">{project.description}</p>
        </div>
      </figure>
    </div>
  ) : (
    <div className="relative w-full max-w-[21rem] max-h-[80%] project-container">
      {/* En tamaño pequeño */}
      <figure
        className={
          "flex justify-center h-full w-full relative " +
          (windowSize.width >= 1024 ? "hidden" : "")
        }
      >
        {/* Imagen */}
        <img className="h-full w-full" src={project.img.mobile} alt="" />

        {/* Texto */}
        <div className="project-description">
          <h4 className="text-center">{project.name}</h4>
          <p className="text-center">{project.description}</p>
        </div>
      </figure>
    </div>
  );
}
