import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypingAnimation = ({ data }) => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: data
        ? data
        : [
            "Full Stack Web Developer",
            "Data Miner",
            "API / Automation Expert",
            "Freelancer",
            "Dev Ops Junior Engineer",
          ], // Strings to display
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return <b className="is-visible" ref={el}></b>;
};
export default TypingAnimation;
