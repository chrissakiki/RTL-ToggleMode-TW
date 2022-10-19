import React from "react";
import { useTheme } from "next-themes";
import { BsMoon, BsFillMoonFill } from "react-icons/bs";

const Sample = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [rtl, setRtl] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <div
      dir={rtl ? "rtl" : "ltr"}
      className="flex flex-col gap-10 bg-white dark:bg-black w-[90%] p-5 h-[300px] rounded-md shadow-2xl md:w-[70%]"
    >
      <div className="flex-cc gap-8">
        <span className="text cursor-pointer">
          {currentTheme === "light" ? (
            <BsFillMoonFill onClick={() => setTheme("dark")} />
          ) : (
            <BsMoon onClick={() => setTheme("light")} />
          )}
        </span>
        <span
          onClick={() => setRtl((prev) => !prev)}
          className="text border border-blue-500 py-1 px-7 rounded-lg cursor-pointer"
        >
          {!rtl ? "RTL" : "LTR"}
        </span>
      </div>
      <div className="">
        <h1 className="text font-bold">Title</h1>
        <p className="text ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          eaque corrupti autem quasi quam atque impedit, voluptatem assumenda
          minima aut.
        </p>
      </div>
    </div>
  );
};

export default Sample;
