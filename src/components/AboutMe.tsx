import { AboutModel } from "@/models/texts.model";
import cvEN from "../assets/CV GABRIEL CARREÑO (ENGLISH).pdf";
import cvES from "../assets/CV GABRIEL CARREÑO.pdf";
import me from "../assets/me.jpeg";
import { AnimatedChar } from "./AnimatedChar";

export default function AboutMe({ about }: { about: AboutModel }) {
  const title = about.title.split(" ");

  about.img = me;

  const downloadCV = () => {
    // window.open(CV_ROUTE, '_blank');
    const link = document.createElement("a");
    link.href = about.cv == "EN" ? cvEN : cvES;
    link.download = about.cvName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="about" className="h-fit min-h-svh pt-20">
      <div className="container mx-auto">
        {/* Title */}
        <div className="h2-container">
          {title.map((el: string, i: number) => (
            <AnimatedChar key={i} delay={i / 10}>
              {el}
            </AnimatedChar>
          ))}
        </div>

        {/* About me */}
        <div className="flex flex-col justify-center items-center gap-3 ">
          <a href={about.url} target="_blank">
            <img
              loading="lazy"
              src={about.img}
              alt="Image of Gabriel Carreño"
              className="w-full max-w-[300px] aspect-square border-2 border-d-orange aboutme-img"
            />
          </a>
          <h3 className="text-center">{about.name}</h3>
          <a href={about.url} target="_blank">
            <span className="text-d-violet">{about.role}</span>
          </a>

          {/* Boton de descargar */}
          <button
            className="themed-button !text-2xl !p-3 my-5"
            onClick={() => {
              downloadCV();
            }}
          >
            {about.buttonText}
          </button>

          {/* Gran descripción */}
          <p className="!text-left whitespace-pre-wrap max-w-xl">
            {about.description}
          </p>
        </div>
      </div>
    </div>
  );
}
