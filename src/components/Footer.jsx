import React, { useContext } from "react";
import AppContext from "./AppContext";

const THEME = [
  "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
  "bg-gradient-to-r from-cyan-500 to-blue-500",
  "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%",
];

const Footer = ({ appContext, setAppContext }) => {
  return (
    <div className="fixed bottom-0 ml-[-28px] w-screen pb-5 flex justify-center gap-2">
      <select
        id="language"
        className="w-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => {
          setAppContext((appContext) => ({
            ...appContext,
            lang: e.target.value,
          }));
        }}
      >
        <option value="en">
          {appContext.lang === "en" ? "English" : "Tiếng Anh"}
        </option>
        <option value="vn">
          {appContext.lang === "en" ? "Vienamese" : "Tiếng Việt"}
        </option>
      </select>
      <select
        id="theme"
        className="w-auto bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => {
          setAppContext((appContext) => ({
            ...appContext,
            theme: e.target.value,
          }));
        }}
      >
        <option value={THEME[0]}>
          {appContext.lang === "en" ? "Theme 1" : "Chủ đề 1"}
        </option>
        <option value={THEME[1]}>
          {appContext.lang === "en" ? "Theme 2" : "Chủ đề 2"}
        </option>
        <option value={THEME[2]}>
          {appContext.lang === "en" ? "Theme 3" : "Chủ đề 3"}
        </option>
      </select>
    </div>
  );
};

export default Footer;
