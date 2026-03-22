import { useEffect, useRef, useState } from "react";

const LazyCard = ({ children }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // once visible, stop observing
        }
      },
      { rootMargin: "100px" } // start loading 100px before it enters viewport
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="min-h-[200px]">
      {visible ? children : (
        // placeholder skeleton while not visible
        <div className="h-full w-full rounded-2xl border border-gray-100 bg-gray-50 animate-pulse min-h-[220px]" />
      )}
    </div>
  );
};

export default LazyCard;
