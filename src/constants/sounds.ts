// implement list numbers from cards
export const SOUNDS = {
  SINGLES: ["t", "c", "f", "d", "s", "b", "v", "m", "n", "p", "h", "g"],
  DOUBLES: [
    "od",
    "ed",
    "ad",
    "om",
    "ot",
    "op",
    "it",
    "ig",
    "an",
    "in",
    "ip",
    "on",
    "em",
    "et",
    "og",
    "eg",
    "at",
    "ap",
    "im",
    "am",
    "ob",
    "eb",
    "ab",
    "en",
    "ib",
    "id",
    "ep",
  ],
};

export const PATTERNS = {
  THREE_LETTERS: `^(${SOUNDS.SINGLES.join("|")})(${SOUNDS.DOUBLES.join("|")})$`,
};
