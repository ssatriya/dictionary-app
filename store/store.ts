import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./themeSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
