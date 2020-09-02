import { useEffect, useState } from "react";

export default () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    const handleEvent = (e: any) =>
      isMounted && setPosition({ x: e.clientX, y: e.clientY });

    let timeout = setTimeout(() => setMount(true), 600);

    window.addEventListener("mousemove", handleEvent);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", handleEvent);
    };
  }, [isMounted]);

  return position;
};
