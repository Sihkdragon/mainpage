import React from "react";
import Jam from "./components/molecules/Jam";
import Shortcut from "./components/molecules/Shortcut";
import Todo from "./components/molecules/Todo";
export default function App() {
  return (
    <div className="bg-mainbg object-fill h-screen text-white flex flex-col justify-center items-center bg-no-repeat bg-cover">
      <Jam />
      <Shortcut />
      <Todo />
    </div>
  );
}
