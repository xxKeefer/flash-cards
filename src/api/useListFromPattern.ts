import { useQuery } from "@tanstack/react-query";

type ListFromPatternResponse = {
  query: Query;
  results: Results;
};

type Results = {
  total: number;
  data: string[];
};

type Query = {
  limit: number;
  page: number;
};

const request = async (pattern: string): Promise<string[]> => {
  const response = await fetch(
    `https://wordsapiv1.p.rapidapi.com/words/?letterPattern=${pattern}&partOfSpeech=verb`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
        "x-rapidapi-key": import.meta.env.VITE_WORDS_API_KEY,
        Accept: "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data: ListFromPatternResponse = await response.json();
  return data.results.data;
};
export const useListFromPattern = (pattern: string) => {
  return useQuery({
    queryKey: ["wordLength", pattern],
    queryFn: () => request(pattern),
  });
};
