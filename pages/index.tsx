import type { NextPage } from "next";
import Sample from "../components/Sample";
import { ThemeProvider } from "next-themes";

const Home: NextPage = () => {
  return (
    <div className="bg-white h-screen flex-cc flex-col">
      <ThemeProvider attribute="class">
        <Sample />
      </ThemeProvider>
    </div>
  );
};

export default Home;
