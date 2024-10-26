import { LinkedList } from "./LinkedList.js";

const list = LinkedList();
list.append(32);
list.append(33);
list.append(34);
list.append(35);
list.prepend(31);
list.prepend(30);
console.log("string: ", list.toString());
