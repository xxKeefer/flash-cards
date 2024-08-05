import { Github, Linkedin, TwitterX } from "react-bootstrap-icons";
import { LINKS } from "~/constants/routes";
export const Footer = () => {
  return (
    <footer
      data-theme="dark"
      className="flex w-full items-center justify-between gap-2 bg-base-300 p-3"
    >
      <div className="flex items-center gap-1 px-4">
        <div className="flex items-center gap-1">
          <Dot color="primary" />
          <Dot color="secondary" />
          <Dot color="accent" />
          <Dot color="primary" />
          <Dot color="secondary" />
          <Dot color="accent" />
        </div>
        <span className="pl-3 text-sm">
          Daniel John Keefer, &copy; Copyright {new Date().getFullYear()}
        </span>
      </div>
      <div className="flex items-center gap-1 px-4">
        <button
          className="btn btn-circle btn-primary btn-sm text-xl"
          onClick={() => window.open(LINKS.LINKEDIN, "_blank")}
        >
          <Linkedin />
        </button>
        <button
          className="btn btn-circle btn-secondary btn-sm text-2xl"
          onClick={() => window.open(LINKS.GITHUB, "_blank")}
        >
          <Github />
        </button>
        <button
          className="btn btn-circle btn-accent btn-sm text-xl"
          onClick={() => window.open(LINKS.TWITTER, "_blank")}
        >
          <TwitterX />
        </button>
      </div>
    </footer>
  );
};
type DotProps = {
  color: "primary" | "secondary" | "accent"; //todo get auto complete on this
};
const Dot = ({ color }: DotProps) => {
  const colourMap: Record<DotProps["color"], string> = {
    primary: "bg-primary text-primary-content",
    secondary: "bg-secondary text-secondary-content",
    accent: "bg-accent text-accent-content",
  };
  return (
    <span
      className={`${colourMap[color]} flex aspect-square min-h-3 min-w-3 justify-center rounded-full align-middle`}
    ></span>
  );
};
