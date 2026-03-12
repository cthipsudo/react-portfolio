import { useRef, useEffect, useState } from "react";

const Cursor = () => {
  const [mx, updateMX] = useState(0);
  const [my, updateMY] = useState(0);
  const [rx, updateRX] = useState(0);
  const [ry, updateRY] = useState(0);

  document.addEventListener("mousemove", (e) => {
    updateMX(e.clientX);
    updateMY(e.clientY);
    //console.log("mx:", mx);

    updateRX((pos) => (pos += (mx - pos) * 0.12));
    updateRY((pos) => (pos += (my - pos) * 0.12));
    // updateRX((a) => a + (mx - a) * 0.12);
    // updateRY((b) => b + (my - b) * 0.12);

    //console.log(rx);
    //updateRingPosition();
  });

  useEffect(() => {
    //requestAnimationFrame(animateCursor);

    document.querySelectorAll("a, button, .weapon-card").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursor, { width: 18, height: 18, duration: 0.2 });
        gsap.to(ring, {
          width: 56,
          height: 56,
          borderColor: "rgba(200,146,42,0.7)",
          duration: 0.2,
        });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(cursor, { width: 10, height: 10, duration: 0.2 });
        gsap.to(ring, {
          width: 36,
          height: 36,
          borderColor: "rgba(200,146,42,0.4)",
          duration: 0.2,
        });
      });
    });
  }, []);

  return (
    <>
      <div
        style={{
          left: mx + "px",
          top: my + "px",
        }}
        id="cursor"
      ></div>
      <div
        style={{
          left: rx + "px",
          top: ry + "px",
        }}
        id="cursor-ring"
      ></div>
    </>
  );
};

export default Cursor;
