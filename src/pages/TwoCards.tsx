import { useState } from "react";
import { FlashCard } from "~/components";
import { SOUNDS } from "~/constants/sounds";

export const TwoCards = () => {
  const [cardLeft, setCardLeft] = useState(0);
  const [cardRight, setCardRight] = useState(0);
  const [left, setLeft] = useState<string[]>(shuffle(SOUNDS.SINGLES));
  const [right, setRight] = useState<string[]>(shuffle(SOUNDS.DOUBLES));

  const restart = () => {
    setCardLeft(0);
    setCardRight(0);
    setLeft(shuffle(SOUNDS.SINGLES));
    setRight(shuffle(SOUNDS.DOUBLES));
  };

  const handleClick = () => {
    if (cardLeft + 1 < left.length) {
      setCardLeft((prev) => prev + 1);
    } else {
      setCardLeft(0);
      setLeft(shuffle(SOUNDS.SINGLES));
    }
    setCardRight((prev) => prev + 1);
  };

  return (
    <div className="flex flex-1 items-center justify-center gap-2 bg-base-100">
      {cardRight < right.length ? (
        <>
          <FlashCard onClick={handleClick} side={"left"}>
            {left[cardLeft]}
          </FlashCard>
          <FlashCard onClick={handleClick} side={"right"}>
            {right[cardRight]}
          </FlashCard>
        </>
      ) : (
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center gap-2">
            <span className="font-emoji text-6xl">✨</span>
            <span className="font-emoji text-6xl">💯</span>
            <span className="font-emoji text-6xl">🎉</span>
          </div>
          <button
            onClick={() => restart()}
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
