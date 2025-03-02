import React, { useState, useEffect } from "react";
import { FaMousePointer } from "react-icons/fa";
import cn from "clsx";
import { BsCursorFill } from "react-icons/bs";

interface Ripple {
  id: number;
}

interface CursorProps {
  size?: number;
  color?: string;
  rippleColor?: string;
  pointerClassName?: string;
}

const Cursor: React.FC<CursorProps> = ({
  size = 24,
  color = "#fff",
  rippleColor = "#fff",
  pointerClassName,
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const triggerRipple = () => {
    const newRipple: Ripple = { id: Date.now() };
    setRipples((prevRipples) => [...prevRipples, newRipple]);

    setTimeout(() => {
      setRipples((prevRipples) =>
        prevRipples.filter((ripple) => ripple.id !== newRipple.id)
      );
    }, 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      triggerRipple();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {/* Cursor Icon */}
      <div>
        <BsCursorFill
          className={cn(pointerClassName)}
          size={size}
          color={color}
        />
      </div>

      {/* Ripple Effects */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "40px",
            height: "40px",
            border: `2px solid ${rippleColor}`,
            borderRadius: "50%",
            pointerEvents: "none",
            animation: "rippleEffect 1s ease-out",
            zIndex: 1, // Ensure the ripple is below the cursor
          }}
        ></div>
      ))}
    </div>
  );
};

export default Cursor;
