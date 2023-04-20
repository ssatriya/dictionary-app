import React from "react";

import { Separator } from "./ui/separator";

interface Props {
  partOfSpeech: string;
  definitions: [
    {
      definition: string;
      example: string;
    }
  ];
  synonyms: string[];
}

const Verb = (props: { verb: Props }) => {
  return (
    <>
      <div className="flex justify-center items-center gap-5 w-full mt-10">
        <p className="text-2xl italic font-bold">{props.verb.partOfSpeech}</p>{" "}
        <Separator aria-orientation="horizontal" className="bg-dark-gray-2" />
      </div>
      <div>
        <div className="mt-10 font-normal text-xl text-light-gray">Meaning</div>
        <ul className="mt-[25px] ml-[25px] flex flex-col gap-[13px] list-disc">
          {props.verb.definitions.map((def, i) => (
            <li className="text-primary-purple" key={i}>
              <p className=" text-lg font-normal text-soft-black ml-5 dark:text-white">
                {def.definition}
              </p>
              <p className="text-lg font-normal text-light-gray ml-5 mt-[13px]">
                {def.example && `"${def.example}"`}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default React.memo(Verb);
