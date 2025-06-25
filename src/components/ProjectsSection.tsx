import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedChar } from "./AnimatedChar";
import "../styles/projects.css";
import ProjectViewer from "./ProjectViewer";
import destokImg from "../assets/projects/smiley-face-sphere-1920x1080-22767.jpg";
import mobileImg from "../assets/projects/smiley-face-sphere-720x1280-22767.jpg";

export default function ProjectsSection(props: { text: any }) {
  //* Title
  const text: any = props.text.title.split(" ");

  //? Projects animation

  const galleryContainerRef = useRef(null);

  // Use useScroll to track scroll progress within the target element
  const { scrollYProgress } = useScroll({
    target: galleryContainerRef,
    offset: ["start start", "end end"],
  });

  // Imagine you have 4 image containers for this example
  const numberOfItems = 4; // This should match the number of .img-container elements

  // Animate the horizontal translation of the image group
  // The original JS uses translateX(-${items.length - 1}00vw)
  // In Framer Motion, we can use useTransform to map scroll progress to a translateX value
  const x = useTransform(
    scrollYProgress,
    [0, 1], // Input range (scroll progress from 0 to 1)
    [`0svw`, `-${(numberOfItems - 1) * 104}svw`] // Output range (translateX from 0 to -X00vw)
  );

  //? Projects

  const projects: {
    name: string;
    description: string;
    img: {
      mobile: string;
      desktop: string;
    };
  }[] = [
    {
      name: "Clothing ecommerce template",
      description:
        "An engaging and sexy template design for an ecommerce focused on clothing business",
      img: {
        mobile: mobileImg,
        desktop: destokImg,
      },
    },
    {
      name: "Clothing ecommerce template",
      description:
        "An engaging and sexy template design for an ecommerce focused on clothing business",
      img: {
        mobile: mobileImg,
        desktop: destokImg,
      },
    },
    {
      name: "Clothing ecommerce template",
      description:
        "An engaging and sexy template design for an ecommerce focused on clothing business",
      img: {
        mobile: mobileImg,
        desktop: destokImg,
      },
    },
    {
      name: "Clothing ecommerce template",
      description:
        "An engaging and sexy template design for an ecommerce focused on clothing business",
      img: {
        mobile: mobileImg,
        desktop: destokImg,
      },
    },
  ];

  return (
    <section className="py-12 ">
      <div className="h2-container">
        {/* Title */}
        {text.map((el: string, i: number) => (
          <AnimatedChar key={i} delay={i / 10}>
            {el}
          </AnimatedChar>
        ))}
      </div>
      <div ref={galleryContainerRef} className="projects-container">
        <div>
          {/* Projects */}
          <motion.div
            className="w-full flex items-center gap-3 horizontal-slider-group"
            style={{ x }}
          >
            {projects.map((project, i) => (
              <div key={i} className="box">
                <ProjectViewer project={project}></ProjectViewer>
              </div>
            ))}
            {/* <div className="box">
              <div className="max-w-5/6 max-h-full w-2xl h-[30rem] bg-violet-800"></div>
            </div>
            <div className="box">
              <div className="max-w-5/6 max-h-full w-2xl h-[30rem] bg-yellow-400"></div>
            </div>
            <div className="box">
              <div className="max-w-5/6 max-h-full w-2xl h-[30rem] bg-blue-700"></div>
            </div>
            <div className="box">
              <div className="max-w-5/6 max-h-full w-2xl h-[30rem] bg-pink-500"></div>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
