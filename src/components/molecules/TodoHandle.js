import React, { useState } from "react";
import { CheckIcon, TrashIcon } from "@heroicons/react/outline";
import { useAtom } from "jotai";
import { Data } from "../../databases";
const TodoHandle = ({ item, keynumb }) => {
  const [kelas, setKelas] = useState("invisible");
  const [RemoveItem, setRemoveItem] = useAtom(Data);
  return (
    <div className="todocontainer bg-transparent w-full h-16 rounded-md border-solid border-4 my-4 border-gray-300 overflow-hidden relative">
      <div className="w-full h-full  px-4 flex items-center bg-[#363333] bg-opacity-50">
        <button
          className="todocheck w-8 h-8 border border-solid border-gray-200 rounded-full mr-5 flex justify-center items-center opacity-100 "
          onClick={function clickHandle() {
            kelas === "invisible" ? setKelas("visible") : setKelas("invisible");
          }}
        >
          <CheckIcon className={"h-6 w-6 " + kelas} />
        </button>
        <div className="font-bold text-lg hover:cursor-default capitalize">
          {item}
        </div>
        <button
          className="w-8 h-8 text-rose-400 hover:text-rose-200 rounded-full flex justify-center items-center opacity-100 ml-auto md:absolute right-3"
          onClick={() => {
            let tempitem = RemoveItem.filter((itemRemove) => {
              return itemRemove !== item;
            });
            setRemoveItem(tempitem);
            console.log(RemoveItem);
          }}
        >
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};

export default TodoHandle;
