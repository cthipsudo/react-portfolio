// context/KnightModeContext.js
import { createContext, useContext, useState, useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

const KnightModeContext = createContext();
gsap.registerPlugin(useGSAP, SplitText);

export function KnightModeProvider({ children }) {
  const [knightMode, setKnightMode] = useState(false);
  const gsapRef = useRef(null);

  const toggleKnightMode = () => {
    const split = SplitText.create(".knightSplit", { type: "lines" });

    gsap.to(split.lines, {
      y: -20,
      autoAlpha: 0,
      duration: 0.3,
      onComplete: () => {
        split.revert();
        gsap.set(".knightSplit", { autoAlpha: 0 });
        setKnightMode((prev) => !prev); // then trigger entrance
      },
    });
  };

  useGSAP(
    () => {
      gsap.set(".knightSplit", { autoAlpha: 1 });

      const split = SplitText.create(".knightSplit", { type: "lines" });

      gsap.from(split.lines, {
        y: 20,
        autoAlpha: 0,
        stagger: 0.05,
        duration: 1,
      });
      return () => split.revert();
    },
    { dependencies: [knightMode] },
  ); // animate in whenever knightMode changes

  return (
    <KnightModeContext.Provider
      value={{ knightMode, toggleKnightMode, gsapRef }}
    >
      {children}
    </KnightModeContext.Provider>
  );
}

// Custom hook for convenience
export function useKnightMode() {
  return useContext(KnightModeContext);
}
