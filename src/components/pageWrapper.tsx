import { motion } from "framer-motion";

const variants = {
  initial: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    transition: { duration: 0.3 },
  }),
};

export default function PageWrapper({
  children,
  direction,
}: {
  children: React.ReactNode;
  direction: number;
}) {
  return (
    <motion.div
      className="absolute w-full"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={direction}
    >
      {children}
    </motion.div>
  );
}
