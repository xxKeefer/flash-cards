import { useEffect, useState } from "react";
import { useListFromPattern } from "~/api";
import { FlashCard } from "~/components";
import { PATTERNS } from "~/constants/sounds";
const SAMPLE_SIZE = 20;

export const TwoCards = () => {
  const { data } = useListFromPattern(PATTERNS.THREE_LETTERS);

  const [list, setList] = useState<string[]>([]);
  const [item, setItem] = useState(0);

  useEffect(() => {
    data !== undefined && setList(shuffle(data).slice(0, SAMPLE_SIZE));
  }, [data]);

  if (data === undefined) {
    return (
      <div className="flex flex-1 items-center justify-center gap-2 bg-base-100">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <span className="loading loading-spinner loading-lg text-secondary"></span>
        <span className="loading loading-spinner loading-lg text-accent"></span>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col">
      <progress
        className="progress progress-secondary my-2 w-full"
        value={item}
        max={SAMPLE_SIZE}
      ></progress>

      <div className="flex flex-1 items-center justify-center gap-2 bg-base-100">
        {item < SAMPLE_SIZE && list.length > 0 ? (
          <>
            <FlashCard
              onClick={() => setItem((prev) => prev + 1)}
              side={"left"}
            >
              {list[item].slice(0, 1)}
            </FlashCard>
            <FlashCard
              onClick={() => setItem((prev) => prev + 1)}
              side={"right"}
            >
              {list[item].slice(1, list[item].length)}
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
              onClick={() => {
                setList(shuffle(data).slice(0, SAMPLE_SIZE));
                setItem(0);
              }}
              className="btn btn-success btn-lg btn-block"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
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
