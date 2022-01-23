import React, { useEffect, useState } from "react";
import logolist from "../assets/list.png";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
export default function Todo() {

  const [kelas, setKelas] = useState("invisible");
  const [item, SetItem] = useState("");

  const listClicked = async () => {
    const { value: text } = await Swal.fire({
      input: 'textarea',
      inputLabel: 'Add To Do Item',
      inputPlaceholder: 'Type your To Do Item here...',
      inputAttributes: {
        'aria-label': 'Type your To Do Item here'
      },
      showCancelButton: true
    })
    SetItem(text);
  }

  useEffect(() => {
    localStorage.setItem("todoitem", item);
  }, []);
  return (
    <div className="h-2/5 w-full flex justify-center mt-5">
      <div className="todocontainer bg-transparent w-5/12 h-1/4  rounded-md border-solid border-4 border-gray-300 overflow-hidden">
        <div className="w-full h-full  px-2 flex items-center bg-[#363333] bg-opacity-50">
          <button
            className="todocheck w-8 h-8 border border-solid border-gray-200 rounded-full mr-5 flex justify-center items-center opacity-100"
            onClick={function clickHandle() {
              kelas == "invisible"
                ? setKelas("visible")
                : setKelas("invisible");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={"h-6 w-6 " + kelas}
              id="checklist"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
          <div className="todoname">{item}</div>
        </div>
      </div>
        <button className="block bg-gray-400" onClick={listClicked}>
          <img
            src={logolist}
            className="absolute w-12 h-15 right-8 bottom-8 rounded-md hover:bg-gray-400"
          ></img>
        </button>
    </div>
  );
}

function AddToDoItem(todolist){

}
