import React, { useState } from "react";
import { Data } from "../databases";
import { useAtom } from "jotai";
const Playground = () => {
  const [itemtemp, setItemtemp] = useState();
  const [items, setItems] = useAtom(Data);
  return (
    <div className="bg-white w-full h-3/4 absolute top-0 text-black px-44 py-20">
      <input
        type="text"
        name="tes"
        id=""
        className="border-2 rounded border-black"
        onChange={(e) => setItemtemp(e.target.value)}
      />
      <button
        className="bg-slate-500 rounded px-2 py-1 text-white ml-2"
        onClick={() =>
          !items ? setItems([itemtemp]) : setItems([...items, itemtemp])
        }
      >
        Add
      </button>
      <h1>this is list</h1>
      <ul>
        {items &&
          items.map((item, index) => {
            return <li>{item}</li>;
          })}
      </ul>
    </div>
  );
};

export default Playground;

const save = (item) => {
  item && localStorage.setItem("data", item);
};
const get = () => {
  let data = [];
};
