import { useRef, useEffect } from "react";

const useAnimationFrame = (callback) => {
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const animate = (time) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback(deltaTime); // Pass delta time to ensure consistent speed
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Start the animation loop when the component mounts
    requestRef.current = requestAnimationFrame(animate);

    // Clean up the animation frame request when the component unmounts
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount
};

export default useAnimationFrame;
