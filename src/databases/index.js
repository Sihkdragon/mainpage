import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
const Data = atomWithStorage("mainpagelisttodo", []);
const removeData = atom(0);

export { removeData, Data };
