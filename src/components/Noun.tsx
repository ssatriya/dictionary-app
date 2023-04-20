import React from "react";
import { useDispatch } from "react-redux";

import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { fetchData, setSearchTerm } from "../../store/searchSlice";
import { AppDispatch } from "../../store/store";

interface Props {
  partOfSpeech: string;
  definitions: [
    {
      definition: string;
    }
  ];
  synonyms: string[];
}

const Noun = (props: { noun: Props }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div className="flex justify-center items-center w-full gap-5 mt-10">
        <p className="text-2xl italic font-bold dark:text-white">
          {props.noun.partOfSpeech}
        </p>{" "}
        <Separator aria-orientation="horizontal" className="bg-dark-gray-2" />
      </div>
      <div>
        <div className="mt-10 font-normal text-xl text-light-gray">Meaning</div>
        <ul className="mt-[25px] ml-[25px] flex flex-col gap-[13px] list-disc">
          {props.noun.definitions.map((def, i) => (
            <li className="text-primary-purple" key={i}>
              <p className=" text-lg font-normal text-soft-black ml-5 dark:text-white">
                {def.definition}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10 flex items-center gap-[22px]">
        <div className="font-normal text-xl text-light-gray">Synonyms</div>
        {props.noun.synonyms.slice(0, 4).map((synonym, i) => (
          <Button
            type="button"
            variant="link"
            className="text-xl text-primary-purple font-bold px-0 py-0"
            key={i}
            onClick={() => {
              dispatch(fetchData(synonym));
              dispatch(setSearchTerm(synonym));
            }}
          >
            {synonym}
          </Button>
        ))}
      </div>
    </>
  );
};

export default React.memo(Noun);
