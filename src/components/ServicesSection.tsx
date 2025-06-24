import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function ServicesSection(props: { text: any }) {
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

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-16">
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

          {/* Subtitle */}
          <div className="text-center w-full">
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
          </div>
        </div>
      </div>
    </section>
  );
}
