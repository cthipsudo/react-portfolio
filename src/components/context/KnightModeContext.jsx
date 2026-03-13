// context/KnightModeContext.js
import { createContext, useContext, useState, useRef } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import useSound from "use-sound";
import soundEffect from "/sounds/trumpet.mp3";

const KnightModeContext = createContext();
gsap.registerPlugin(useGSAP, SplitText);

export function KnightModeProvider({ children }) {
  const [knightMode, setKnightMode] = useState(false);
  const [soundPlayed, setSoundPlayed] = useState(false);
  const [play] = useSound(soundEffect, { volume: 0.2 });

  const toggleKnightMode = () => {
    const split = SplitText.create(".knightSplit", { type: "lines" });

    gsap.to(split.lines, {
      y: -20,
      autoAlpha: 0,
      duration: 0.3,
      onComplete: () => {
        split.revert();
        gsap.set(".knightSplit", { autoAlpha: 0 });
        setKnightMode((prev) => {
          if (!soundPlayed) play();
          setSoundPlayed(true);
          return !prev;
        }); // then trigger entrance
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
    <KnightModeContext.Provider value={{ knightMode, toggleKnightMode }}>
      {children}
    </KnightModeContext.Provider>
  );
}

// Custom hook for convenience
export function useKnightMode() {
  return useContext(KnightModeContext);
}
