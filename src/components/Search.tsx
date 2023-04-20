import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { fetchData } from "../../store/searchSlice";
import { AppDispatch, RootState } from "../../store/store";

import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const currentSearch = useSelector(
    (state: RootState) => state.search.currentSearchTerm
  );

  const submitHandler = (e: React.SyntheticEvent) => {
    e.preventDefault();

    console.log(searchTerm);

    if (searchTerm !== "") {
      dispatch(fetchData(searchTerm));
    }
  };

  useEffect(() => {
    setSearchTerm(currentSearch);
  }, [currentSearch]);

  return (
    <form onSubmit={submitHandler}>
      <div className="mt-[51.5px] relative flex items-center">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <Input
          type="text"
          placeholder="Search for any word..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          className="h-16 bg-off-white-1 rounded-2xl border-none outline-none px-6 py-5 focus-visible:ring-transparent text-xl font-bold text-dark-gray-2 placeholder:text-dark-gray-2 placeholder:text-opacity-25"
        />
        <Button
          type="submit"
          variant="default"
          className="h-[64px] w-[64px] rounded-2xl absolute right-0 bg-transparent hover:bg-transparent dark:bg-transparent"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path
              fill="none"
              stroke="#A445ED"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
            />
          </svg>
        </Button>
      </div>
    </form>
  );
};

export default Search;
