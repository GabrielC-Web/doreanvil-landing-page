import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProjectsSection() {
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
    // <section id="projects" className="py-12 bg-gray-100 projects-container">
    //   <div className="w-full mx-auto px-6 text-center">
    //     <h3 className="text-sm font-bold uppercase text-gray-500 tracking-widest mb-12">
    //       Solutions trusted by leading financial institutions
    //     </h3>

    //     <motion.div
    //       className="w-full flex items-center gap-3 horizontal-slider-wrapper"
    //       style={{ x }}
    //     >
    //       <div className="box bg-violet-800"></div>
    //       <div className="box bg-yellow-400"></div>
    //       <div className="box bg-blue-700"></div>
    //       <div className="box bg-pink-500"></div>
    //     </motion.div>
    //   </div>
    // </section>
    <section ref={galleryContainerRef} className="img-group-container">
      <div>
        <motion.ul className="img-group" style={{ x }}>
          <li className="img-container">
            <img src="/photos/cityscape/1.jpg" />
            <h3>#001</h3>
          </li>
          <li className="img-container">
            <img src="/photos/cityscape/2.jpg" />
            <h3>#002</h3>
          </li>
          <li className="img-container">
            <img src="/photos/cityscape/3.jpg" />
            <h3>#003</h3>
          </li>
          <li className="img-container">
            <img src="/photos/cityscape/4.jpg" />
            <h3>#004</h3>
          </li>
          <li className="img-container">
            <img src="/photos/cityscape/5.jpg" />
            <h3>#005</h3>
          </li>
        </motion.ul>
      </div>
    </section>
  );
}
