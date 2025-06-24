import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

export default function ProjectsSection(props: { text: any }) {
  //? Title animation

  //* Title
  const text: any = props.text.title.split(" ");

  //* Title animation
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      const timeout: any = setTimeout(() => {
        controls.start({ opacity: 1 });
        clearTimeout(timeout);
      }, 500);
    }
  }, [controls, inView]);

  //? Projects animation

  const galleryContainerRef = useRef(null);

  // Use useScroll to track scroll progress within the target element
  const { scrollYProgress } = useScroll({
    target: galleryContainerRef,
    offset: ["start start", "end end"], // When the start of the target hits the start of the viewport, and when the end of the target hits the end of the viewport
  });

  // Imagine you have 4 image containers for this example
  const numberOfItems = 4; // This should match the number of .img-container elements

  // Animate the horizontal translation of the image group
  // The original JS uses translateX(-${items.length - 1}00vw)
  // In Framer Motion, we can use useTransform to map scroll progress to a translateX value
  const x = useTransform(
    scrollYProgress,
    [0, 1], // Input range (scroll progress from 0 to 1)
    [`0vw`, `-${(numberOfItems - 1) * 100}vw`] // Output range (translateX from 0 to -X00vw)
  );

  return (
    <section ref={galleryContainerRef} className="py-12  projects-container">
      <div className="">
        <div className="h2-container">
          {/* Title */}
          {text.map((el: string, i: number) => (
            <motion.h2
              whileInView="visible"
              ref={ref}
              animate={controls}
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
              key={i}
            >
              {el}{" "}
            </motion.h2>
          ))}
        </div>

        {/* Projects */}
        <motion.div
          className="w-full flex items-center gap-3 horizontal-slider-group"
          style={{ x }}
        >
          <div className="box ">
            <div className="w-[400px] h-[300px] bg-violet-800"></div>
          </div>
          <div className="box">
            <div className="w-[400px] h-[300px] bg-yellow-400"></div>
          </div>
          <div className="box">
            <div className="w-[400px] h-[300px] bg-blue-700"></div>
          </div>
          <div className="box">
            <div className="w-[400px] h-[300px] bg-pink-500"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
