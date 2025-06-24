import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type AnimatedCharProps = {
  children: React.ReactNode;
  delay?: number;
};

export const AnimatedChar = ({ children, delay = 0 }: AnimatedCharProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [controls, inView, children]); // trigger again on prop change

  return (
    <motion.h2
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
      transition={{ duration: 0.25, delay }}
    >
      {children}
    </motion.h2>
  );
};
