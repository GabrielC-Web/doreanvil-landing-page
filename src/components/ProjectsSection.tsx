import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedChar } from "./AnimatedChar";
import "../styles/projects.css";
import ProjectViewer from "./ProjectViewer";
import destokImg from "../assets/projects/smiley-face-sphere-1920x1080-22767.jpg";
import mobileImg from "../assets/projects/smiley-face-sphere-720x1280-22767.jpg";
import { ProjectItemModel, ProjectsModel } from "@/models/texts.model";

export default function ProjectsSection({
  projects,
}: {
  projects: ProjectsModel;
}) {
  //* Title
  const text: any = projects.title.split(" ");

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

  const projectImages = [
    {
      img: {
        mobile: mobileImg,
        desktop: destokImg,
      },
      id: 1,
    },
    {
      img: {
        mobile: mobileImg,
        desktop: destokImg,
      },
      id: 2,
    },
    {
      img: {
        mobile: mobileImg,
        desktop: destokImg,
      },
      id: 3,
    },
    {
      img: {
        mobile: mobileImg,
        desktop: destokImg,
      },
      id: 4,
    },
  ];

  //? Projects

  //* Creates the benefits array matching the icons with the text
  const projectsList: any[] = projects.projects.map(
    (project: ProjectItemModel) => {
      return {
        name: project.name,
        description: project.description,
        img: projectImages.find((img) => img.id == project.id)?.img,
        id: project.id,
      };
    }
  );

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
            {projectsList.map((project, i) => (
              <div key={i} className="box">
                <ProjectViewer project={project}></ProjectViewer>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
