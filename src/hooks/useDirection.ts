import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const tabPaths = ["/", "/projects", "/publications", "/life"];

export function useTransitionDirection() {
  const location = useLocation();
  const [direction, setDirection] = useState(0);
  const prevKey = useRef(location.key);
  const prevIndex = useRef(tabPaths.indexOf(location.pathname));

  useEffect(() => {
    const currIndex = tabPaths.indexOf(location.pathname);

    if (prevKey.current !== location.key) {
      const delta = currIndex - prevIndex.current;
      setDirection(delta === 0 ? 0 : delta > 0 ? 1 : -1);

      prevKey.current = location.key;
      prevIndex.current = currIndex;
    }
  }, [location]);

  return direction;
}
