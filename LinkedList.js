import { Node } from "./Node.js";
export const LinkedList = function () {
  let head = null;
  let tail = null;
  let size = 0;
  return {
    append(value) {
      size++;
      let pointer;
      const newNode = Node();
      newNode.value = value;
      if (!head) {
        head = newNode;
        tail = newNode;
      } else {
        pointer = head;
        while (pointer.next !== null) {
          pointer = pointer.next;
        }
        pointer.next = newNode;
        tail = newNode;
      }
    },
    prepend(value) {
      // adds a value to the start of the list
      size++;
      const newNode = Node();
      newNode.value = value;
      if (!head) {
        head = newNode;
        tail = newNode;
      } else {
        newNode.next = head;
        head = newNode;
      }
    },
    getSize() {
      // returns the total number of nodes in the list
      return size;
    },
    getHead() {
      // returns the head of the list
      return head;
    },
    getTail() {
      // returns the tail of the list
      return tail;
    },
    at(index) {
      // returns the node at given index
      if (index < 0 || index >= size) {
        return null;
      }

      let current = head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    },
    pop() {
      // removes the last node from the list
      if (size === 0) {
        return null;
      } else if (size === 1) {
        head = null;
        tail = null;
        size = 0;
      } else {
        size--;
        let pointer = head;
        while (pointer.next !== tail) {
          pointer = pointer.next;
        }
        let removed = tail.value;
        tail = pointer;
        tail.next = null;
        return removed;
      }
    },
    contains(value) {
      // returns if the given value is in the list, or false otherwise
      if (size === 0) {
        return false;
      }
      let pointer = head;
      while (pointer !== null) {
        if (pointer.value === value) {
          return true;
        }
        pointer = pointer.next;
      }
      return false;
    },
    find(value) {
      // returns the index of the node containing value given, returns null if not found
      if (size === 0) {
        return null;
      }
      let pointer = head;
      let index = 0;
      while (pointer !== null) {
        if (pointer.value === value) {
          return index;
        }
        pointer = pointer.next;
        index++;
      }
      return null;
    },
    toString() {
      // represents your LinkedList objects as strings.  The format should be: ( value ) -> ( value ) -> ( value ) -> null
      if (size === 0) {
        return "null";
      }
      let pointer = head;
      let string = "";
      while (pointer !== null) {
        string += `( ${pointer.value} ) -> `;
        pointer = pointer.next;
      }
      string += "null";
      return string;
    },
  };
};
