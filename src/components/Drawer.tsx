import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useDarkMode } from "usehooks-ts";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
};

export const Drawer = ({ open, setOpen, children }: Props) => {
  const { isDarkMode, toggle } = useDarkMode({ localStorageKey: "dark-mode" });
  const navigate = useNavigate();
  return (
    <div className="drawer drawer-end flex-1">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={open}
      />
      <div className="drawer-content flex px-2">{children}</div>
      <div className="drawer-side">
        <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
          <li>
            <button
              onClick={() => setOpen(false)}
              className="btn btn-ghost text-3xl"
            >
              <span className="font-emoji text-2xl">❌</span> Close Menu
            </button>
          </li>
          <li>
            <button onClick={toggle} className="btn btn-ghost text-3xl">
              {isDarkMode ? (
                <span>
                  <span className="font-emoji text-2xl">🌞</span> Light Mode
                </span>
              ) : (
                <span>
                  <span className="font-emoji text-2xl">🌚</span> DarkMode
                </span>
              )}
            </button>
          </li>
          <li>
            <a onClick={() => navigate("/")} className="btn btn-ghost text-3xl">
              <span className="font-emoji text-2xl"> 1️⃣</span> One Card
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/two-cards")}
              className="btn btn-ghost text-3xl"
            >
              <span className="font-emoji text-2xl"> 2️⃣</span> Two Cards
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
