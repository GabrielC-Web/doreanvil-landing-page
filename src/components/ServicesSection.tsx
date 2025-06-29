import { ServicesModel } from "@/models/texts.model";
import angularIcon from "../assets/angular-icon-1.svg";
import bootstrapIcon from "../assets/bootstrap-5-1.svg";
import flutterIcon from "../assets/flutter-logo.svg";
import javascriptIcon from "../assets/javascript-1.svg";
import kotlinIcon from "../assets/kotlin-2.svg";
import reactIcon from "../assets/react-2.svg";
import tailwindIcon from "../assets/tailwind-css-2.svg";
import typescriptIcon from "../assets/typescript.svg";
import "../styles/services.css";
import { AnimatedChar } from "./AnimatedChar";

export default function ServicesSection({
  services,
}: {
  services: ServicesModel;
}) {
  //* Title
  const text: any = services.title.split(" ");

  // //? Skills

  const skills: { name: string; image: string }[] = [
    {
      name: "Angular",
      image: angularIcon,
    },
    {
      name: "React",
      image: reactIcon,
    },
    {
      name: "Flutter",
      image: flutterIcon,
    },
    {
      name: "Kotlin",
      image: kotlinIcon,
    },
    {
      name: "Tailwind",
      image: tailwindIcon,
    },
    {
      name: "Bootstrap",
      image: bootstrapIcon,
    },
    {
      name: "Typescript",
      image: typescriptIcon,
    },
    {
      name: "Javascript",
      image: javascriptIcon,
    },
  ];

  return (
    <section id="services" className="h-fit min-h-svh">
      <div className="container mx-auto max-w-5xl h-fit flex flex-col items-center justify-evenly px-6">
        <div className="mb-16">
          <div className="h2-container">
            {/* Title */}
            {text.map((el: string, i: number) => (
              <AnimatedChar key={i} delay={i / 10}>
                {el}
              </AnimatedChar>
            ))}
          </div>

          {/* Subtitle */}
          {/* <div className="text-center w-full">
            <motion.p
              whileInView="visible"
              ref={ref}
              animate={controls}
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.25,
                delay: text.length / 10,
              }}
            >
              {props.text.subtitle}
            </motion.p>
          </div> */}
        </div>

        {/* Skills/technologies */}
        <div className="w-full flex flex-wrap justify-center sm:justify-start gap-6">
          {skills.map((skill: any, i: number) => (
            <div key={i} className="skill-box">
              <img src={skill.image} className="size-20" alt="" />
              <span className="text-white ">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
