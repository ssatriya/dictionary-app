import React, { useRef } from "react";

import { Button } from "./ui/button";

const Word = (props: { word: string; phonetic: string; phonetics: string }) => {
  const audio = document.getElementById("track") as HTMLAudioElement;

  const playTrack = async () => {
    audio.play();
  };

  // console.log(props.phonetics);

  return (
    <div className="h-[114px] flex justify-between items-center mt-[45px]">
      <div>
        <div className="text-[64px] font-bold leading-[77.45px] text-soft-black dark:text-white">
          {props.word}
        </div>
        <div className="text-2xl text-primary-purple">{props.phonetic}</div>
      </div>

      <audio id="track" src={props.phonetics}></audio>

      <Button
        type="button"
        variant="default"
        className="h-[75px] w-[75px] bg-green-500 p-0 rounded-full bg-transparent hover:bg-transparent dark:bg-transparent"
        onClick={playTrack}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="75"
          height="75"
          viewBox="0 0 75 75"
          className=" fill-primary-purple hover:fill-primary-purple"
        >
          <g fillRule="evenodd">
            <circle cx="37.5" cy="37.5" r="37.5" opacity=".25" />
            <path d="M29 27v21l21-10.5z" />
          </g>
        </svg>
      </Button>
    </div>
  );
};

export default Word;
