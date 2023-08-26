import { motion } from "framer-motion";
import { wordAnimations } from "./animation/animationEverything";

export default function WordAnimation({ words }) {
  return (
    <>
      {words.split(" ").map((word, idx) => {
        return (
          <span key={idx} className="inline-block">
            <motion.span
              variants={wordAnimations}
              custom={idx}
              whileInView="animate"
              viewport={{ once: true }}
              initial="initial"
              className="inline-block"
            >
              {word + "\u00A0"}
            </motion.span>
          </span>
        );
      })}
    </>
  );
}
