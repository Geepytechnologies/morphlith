"use client";
// ScalingElement.tsx
import React, { useEffect, useState } from "react";

const ScalingElement: React.FC = () => {
  const [scale, setScale] = useState<number>(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newScale = 1 + scrollY / 500; // Adjust the divisor for speed
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="scaling-element"
      style={{ transform: `scale(${scale})` }}
    ></div>
  );
};

export default ScalingElement;
