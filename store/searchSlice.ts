import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

interface Dictionary {
  word: string;
  meanings: [
    {
      partOfSpeech: string;
      definitions: [
        {
          definition: string;
          example: string;
        }
      ];
      synonyms: string[];
    }
  ];
  phonetic: string;
  phonetics: [
    {
      text: string;
      audio: string;
    }
  ];
  sourceUrls: string[];
}

interface ErrorFetchDataResponse {
  errorObject: object;
}

export const fetchData = createAsyncThunk<
  Dictionary,
  string,
  { rejectValue: ErrorFetchDataResponse }
>("word/fetchData", async (word, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${URL}${word}`);
    return res.data;
  } catch (error) {
    const err = error as AxiosError<ErrorFetchDataResponse>;

    if (!err.response) {
      throw err;
    }
    return rejectWithValue(err.response.data);
  }
});

interface State {
  searchResult: Dictionary[];
  currentSearchTerm: string;
  status: string;
  error: object | undefined;
}

const initialState: State = {
  searchResult: [],
  currentSearchTerm: "",
  status: "idle",
  error: undefined,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm(state, action: PayloadAction<string>) {
      state.currentSearchTerm = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "Loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.searchResult.pop();
        state.searchResult.push(action.payload);
        state.error = undefined;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload;
      });
  },
});

export const { setSearchTerm } = searchSlice.actions;
export default searchSlice.reducer;
