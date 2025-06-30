import { AboutModel } from "@/models/texts.model";
import { AnimatedChar } from "./AnimatedChar";
import me from "../assets/me.jpeg";
import cvES from "../assets/CV GABRIEL CARREÑO.pdf";
import cvEN from "../assets/CV GABRIEL CARREÑO (ENGLISH).pdf";

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
          <img
            src={about.img}
            alt="Image of Gabriel Carreño"
            className="w-full max-w-[300px] aspect-square border-2 border-d-orange"
          />
          <h3 className="text-center">{about.name}</h3>
          <span className="text-d-blue">{about.role}</span>
          <button
            className="themed-button !text-2xl !p-3"
            onClick={() => {
              downloadCV();
            }}
          >
            {about.buttonText}
          </button>
          <p className="!text-left whitespace-pre-wrap max-w-xl">
            {about.description}
          </p>
        </div>
      </div>
    </div>
  );
}
