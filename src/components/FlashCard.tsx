import { ReactNode } from "react";

const classes = {
  left: {
    border: "border-l-8 border-primary",
    text: "text-right",
  },
  right: {
    border: "border-r-8 border-accent",
    text: "text-left",
  },
};

type Props = {
  children: ReactNode;
  side?: keyof typeof classes;
  onClick?: () => void;
};
export const FlashCard = ({ children, side = "left", onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`card w-full max-w-72 ${classes[side].border} bg-base-300 shadow-xl`}
    >
      <div className="card-body">
        <p className={`font-hand ${classes[side].text} select-none text-8xl`}>
          {children}
        </p>
      </div>
    </div>
  );
};
