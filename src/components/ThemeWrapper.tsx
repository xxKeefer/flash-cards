import { ReactNode } from "react";
import { useDarkMode } from "usehooks-ts";

type Props = { children: ReactNode };

export const ThemeWrapper = ({ children }: Props) => {
  const { isDarkMode } = useDarkMode({ localStorageKey: "dark-mode" });

  return (
    <div
      data-theme={isDarkMode ? "dark" : "light"}
      className="flex h-[100svh] flex-col"
    >
      {children}
    </div>
  );
};
