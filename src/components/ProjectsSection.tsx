import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { AnimatedChar } from "./AnimatedChar";
import "../styles/projects.css";

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
    [`0svw`, `-${(numberOfItems - 1) * 103}svw`] // Output range (translateX from 0 to -X00vw)
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
            <div className="box">
              <div className="w-full h-full max-w-2xl max-h-[30rem] bg-violet-800"></div>
            </div>
            <div className="box">
              <div className="w-full h-full max-w-2xl max-h-[30rem] bg-yellow-400"></div>
            </div>
            <div className="box">
              <div className="w-full h-full max-w-2xl max-h-[30rem] bg-blue-700"></div>
            </div>
            <div className="box">
              <div className="w-full h-full max-w-2xl max-h-[30rem] bg-pink-500"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
