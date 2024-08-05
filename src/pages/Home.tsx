import { useState } from "react";
import { FlashCard } from "~/components";
import { SOUNDS } from "~/constants/sounds";

export const Home = () => {
  const [card, setCard] = useState(0);
  const [sounds, setSounds] = useState<string[]>(
    shuffle([...SOUNDS.SINGLES, ...SOUNDS.DOUBLES]),
  );

  const restart = () => {
    setCard(0);
    setSounds(shuffle([...SOUNDS.SINGLES, ...SOUNDS.DOUBLES]));
  };

  return (
    <div className="flex flex-1 items-center justify-center gap-2 bg-base-100">
      {card < sounds.length ? (
        <FlashCard
          onClick={() => setCard((prev) => prev + 1)}
          side={sounds[card].length > 1 ? "right" : "left"}
        >
          {sounds[card]}
        </FlashCard>
      ) : (
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center gap-2">
            <span className="font-emoji text-6xl">✨</span>
            <span className="font-emoji text-6xl">💯</span>
            <span className="font-emoji text-6xl">🎉</span>
          </div>
          <button
            onClick={restart}
            className="btn btn-success btn-lg btn-block"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

function shuffle(array: string[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
