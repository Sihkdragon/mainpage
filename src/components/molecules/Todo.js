import Swal from "sweetalert2";
import logolist from "../../assets/list.png";
import TodoHandle from "./TodoHandle";
import { useAtom } from "jotai";
import { Data } from "../../databases";
export default function Todo() {
  const [items, setItems] = useAtom(Data);
  const listClicked = async () => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Add To Do Item",
      inputPlaceholder: "Type your To Do Item here...",
      inputAttributes: {
        "aria-label": "Type your To Do Item here",
      },
      showCancelButton: true,
    });

    if (text) items.length < 1 ? setItems([text]) : setItems([...items, text]);
  };

  return (
    <div className="h-full w-1/2 mt-5">
      <section className="max-w-xl  mx-auto">
        {items &&
          items.map((item, index) => {
            return <TodoHandle item={item} key={index} keynumb={index} />;
          })}
      </section>
      <button className="block bg-gray-900" onClick={listClicked}>
        <img
          alt="Add To Do Task"
          src={logolist}
          className="fixed w-12 h-15 right-8 bottom-8 rounded-md bg-gray-700 hover:bg-gray-400"
        ></img>
      </button>
    </div>
  );
}
