import { createSlice } from "@reduxjs/toolkit";

interface State {
  font: string;
  darkMode: boolean;
}

const initialState: State = {
  font: "Mono",
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setFont(state, action) {
      state.font = action.payload;
      localStorage.setItem("font", JSON.stringify(state.font));
    },
    setDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { setFont, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
