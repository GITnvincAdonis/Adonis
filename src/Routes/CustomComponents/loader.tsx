import { motion } from "framer-motion";
import "./loader.css";
export default function Loader() {
  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        transition={{ delay: 1 }}
        style={{ zIndex: 100 }}
        className=" fixed h-full w-full bg-background  flex items-center justify-center rounded-lg"
      >
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </motion.div>
    </>
  );
}
