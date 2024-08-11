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
        readOnly
      />
      <div className="drawer-content flex px-2">{children}</div>
      <div className="drawer-side">
        <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
          <li>
            <button
              onClick={() => setOpen(false)}
              className="btn btn-ghost flex justify-between text-3xl"
            >
              Close Menu <span className="font-emoji text-2xl">❌</span>
            </button>
          </li>
          <li>
            <button
              onClick={toggle}
              className="btn btn-ghost flex justify-between text-3xl"
            >
              {isDarkMode ? (
                <>
                  Light Mode <span className="font-emoji text-2xl">🌞</span>{" "}
                </>
              ) : (
                <>
                  Dark Mode <span className="font-emoji text-2xl">🌚</span>
                </>
              )}
            </button>
          </li>
          <li>
            <a
              onClick={() => navigate("/")}
              className="btn btn-ghost flex justify-between text-3xl"
            >
              One Card <span className="font-emoji text-2xl"> 1️⃣</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate("/two-cards")}
              className="btn btn-ghost flex justify-between text-3xl"
            >
              Two Cards <span className="font-emoji text-2xl"> 2️⃣</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
