import { useEffect, useState } from "react";
import { ClassNames } from "../../utils/classNames";
import { ArrowUpIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset < 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-7 right-4 ">
      <button
        type="button"
        onClick={ScrollToTop}
        className={ClassNames(
          isVisible
            ? "opacity-0"
            : "opacity-70 inline-flex items-center bg-yellow-300 p-3 rounded-full"
        )}
      >
        <motion.div
        animate={{y:[1.1,5,1]}}
        transition={{repeat: Infinity , duration:2}}
        >
          <ArrowUpIcon className="w-10 h-10"></ArrowUpIcon>
        </motion.div>
      </button>
    </div>
  );
};
