import { useEffect, useState } from "react";

export function useActiveSection(selectors: string[], offset = 0) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveId(topMost.target.id);
        }
      },
      {
        rootMargin: "0px 0px -50% 0px", // Prioriza lo que está más al centro del viewport
        threshold: [0.25, 0.5, 0.75, 1], // Detecta varias proporciones de visibilidad
      }
    );

    selectors.forEach((selector) => {
      const el = document.getElementById(selector);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [selectors, offset]);

  return activeId;
}
