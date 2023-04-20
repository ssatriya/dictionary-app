import { useSelector, useDispatch } from "react-redux";

import { Inter } from "next/font/google";
import { Lora } from "next/font/google";
import { Inconsolata } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });

import Navbar from "../components/Navbar";

import { RootState } from "../../store/store";
import Search from "@/components/Search";
import Content from "@/components/Content";

export default function Home() {
  const dispatch = useDispatch();
  const font = useSelector((state: RootState) => state.theme.font);

  let currentFont = inter.className;

  if (font === "Sans Serif") {
    currentFont = inter.className;
  }

  if (font === "Serif") {
    currentFont = lora.className;
  }

  if (font === "Mono") {
    currentFont = inconsolata.className;
  }

  return (
    <div className={currentFont}>
      <Navbar />
      <Search />
      <Content />
    </div>
  );
}
