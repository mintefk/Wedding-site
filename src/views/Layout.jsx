import { motion } from "framer-motion";
import Header from "./Header";
import useLenis from "../lib/useLenis";

export default function Layout({ children, couple }) {
  useLenis();

  return (
    <>
      <Header couple={couple} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="pt-32"
      >
        {children}
      </motion.main>
    </>
  );
}