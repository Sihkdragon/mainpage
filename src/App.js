/**
 * @file This file include the Project
 * @copyright Ditotisi Rasyid Sumpena 2022
 * @contact ditolord@gmail.com, instagram.com/ditotisi
 */

import React from "react";
import Jam from "./components/molecules/Jam";
import Shortcut from "./components/molecules/Shortcut";
import Todo from "./components/molecules/Todo";
export default function App() {
  return (
    <div className="bg-mainbg bg-fixed object-fill min-h-screen gap-y-4 text-white flex flex-col pt-10 items-center bg-repeat bg-cover">
      <Jam />
      <Shortcut />
      <Todo />
    </div>
  );
}
