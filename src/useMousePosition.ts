import { useEffect, useState } from "react";

export default () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleEvent = (e: any) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleEvent);

    return () => {
      window.removeEventListener("mousemove", handleEvent);
    };
  }, []);

  return position;
};
