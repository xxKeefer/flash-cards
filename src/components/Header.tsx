import { useState } from "react";
import { useDarkMode } from "usehooks-ts";

export const Header = () => {
  const { isDarkMode, toggle } = useDarkMode({ localStorageKey: "dark-mode" });

  return (
    <header
      data-theme="dark"
      className="flex w-full items-center justify-between gap-2 bg-base-300 p-3"
    >
      <div className="flex items-center gap-1 px-4">
        <SwapDot color="primary" char="K" emoji="🧙‍♂️" />
        <SwapDot color="secondary" char="E" emoji="💻" />
        <SwapDot color="accent" char="E" emoji="✨" />
        <SwapDot color="primary" char="F" emoji="🦄" />
        <SwapDot color="secondary" char="E" emoji="🌈" />
        <SwapDot color="accent" char="R" emoji="⚡" />
      </div>
      <button
        onClick={toggle}
        className="btn btn-circle btn-ghost font-emoji text-2xl"
      >
        {isDarkMode ? "🌞" : "🌚"}
      </button>
    </header>
  );
};

type SwapDotProps = {
  char: string;
  emoji: string;
  color: "primary" | "secondary" | "accent"; //todo get auto complete on this
};
const SwapDot = ({ char, color, emoji }: SwapDotProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const active = isHovered ? "swap-active" : "";
  const colourMap: Record<"primary" | "secondary" | "accent", string> = {
    primary: "bg-primary text-primary-content",
    secondary: "bg-secondary text-secondary-content",
    accent: "bg-accent text-accent-content",
  };
  return (
    <span
      className={`swap swap-flip ${active}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`swap-on flex items-center justify-center rounded-full ${colourMap[color]} h-10 w-10 p-2 font-emoji text-xl`}
      >
        {emoji}
      </span>
      <span
        className={`swap-off flex items-center justify-center rounded-full ${colourMap[color]} h-10 w-10 p-2 text-2xl font-bold`}
      >
        {char}
      </span>
    </span>
  );
};
