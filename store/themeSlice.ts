import { createSlice } from "@reduxjs/toolkit";

interface State {
  font: string;
  darkMode: string;
}

const initialState: State = {
  font: "Mono",
  darkMode: "off",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setFont(state, action) {
      state.font = action.payload;
      localStorage.setItem("font", JSON.stringify(state.font));
    },
    setDarkMode(state, action) {
      state.darkMode = action.payload;

      localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
    },
  },
});

export const { setFont, setDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
