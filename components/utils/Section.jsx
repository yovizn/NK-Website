import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef } from "react";

export default function Section({ theme, setTheme, children, id, className }) {
  let container = useRef(null);

  let { scrollYProgress } = useScroll({
    target: container,
    offset: ["start center", "end center"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value > 0 && value < 1) {
      setTheme(theme);
    }
  });

  return (
    <section
      className={`transition-colors duration-500 ${className}`}
      ref={container}
      id={id}
    >
      {children}
    </section>
  );
}
