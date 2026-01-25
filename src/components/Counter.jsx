import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView } from "framer-motion";

export default function Counter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const hasAnimated = useRef(false);
  
  const spring = useSpring(motionValue, {
    damping: 25,
    stiffness: 100,
  });
  
  const display = useTransform(spring, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      motionValue.set(value);
      hasAnimated.current = true;
    }
  }, [isInView, value, motionValue]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
