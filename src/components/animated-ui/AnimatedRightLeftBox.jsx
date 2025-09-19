"use client";

import AnimatedBox from "./AnimatedBox";

export default function AnimatedRightLeftBox({ onLeftClick, onRightClick }) {
  return (
    <AnimatedBox className="flex items-center justify-between">
      <button
        onClick={onLeftClick}
        className="px-4 py-2 rounded-[var(--radius-md)] border"
      >
        ← Prev
      </button>
      <button
        onClick={onRightClick}
        className="px-4 py-2 rounded-[var(--radius-md)] border"
      >
        Next →
      </button>
    </AnimatedBox>
  );
}
