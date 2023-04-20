import React from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";
import Word from "./Word";
import Noun from "./Noun";
import Verb from "./Verb";
import Source from "./Source";
import Error from "./Error";

const Content = () => {
  const result = useSelector((state: RootState) => state.search.searchResult);
  const error = useSelector((state: RootState) => state.search.error);

  const data = result.flatMap((el) => el);

  const nounData = data[0]?.meanings.find((obj) => obj.partOfSpeech === "noun");
  const verbData = data[0]?.meanings.find((obj) => obj.partOfSpeech === "verb");
  const audio = data[0]?.phonetics.find((obj) => obj.audio !== "");

  if (data.length === 0) {
    return null;
  }

  console.log(error);

  if (error) {
    return <Error errorMessage={error} />;
  }

  return (
    <>
      <Word
        word={data[0].word}
        phonetic={data[0].phonetic}
        phonetics={audio?.audio}
      />
      {nounData && <Noun noun={nounData} />}
      {verbData && <Verb verb={verbData} />}
      <Source source={data[0].sourceUrls} />
    </>
  );
};

export default React.memo(Content);
