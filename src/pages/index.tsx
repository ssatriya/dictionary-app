import { useSelector } from "react-redux";
import Head from "next/head";

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
    <main className={currentFont}>
      <Head>
        <title>Directory App</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />
      <Search />
      <Content />
    </main>
  );
}
