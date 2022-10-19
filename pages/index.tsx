import type { NextPage } from "next";
import Sample from "../components/Sample";
import { ThemeProvider } from "next-themes";

const Home: NextPage = () => {
  return (
    <ThemeProvider attribute="class">
      <div className="bg-white h-screen flex-cc flex-col">
        <Sample />
      </div>
    </ThemeProvider>
  );
};

export default Home;
