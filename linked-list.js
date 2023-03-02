/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const ListNode = (value = null, nextNode = null) => ({
  value,
  nextNode,
});

const LinkedList = () => {
  let head = null;
  let size = 0;

  const append = (value) => {
    const newNode = ListNode(value);
    if (head === null) {
      head = newNode;
    } else {
      let pointer = head;
      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode;
      }
      pointer.nextNode = newNode;
    }
    size += 1;
    return newNode;
  };

  const prepend = (value) => {
    const newNode = ListNode(value);
    if (head === null) {
      head = newNode;
    } else {
      newNode.nextNode = head;
      head = newNode;
    }
    size += 1;
    return newNode;
  };

  const tail = (pointer = head) => {
    if (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
      return tail(pointer);
    }
    return pointer;
  };

  const at = (index, pointer = head) => {
    if (index !== 0) {
      pointer = pointer.nextNode;
      return at(index - 1, pointer);
    }
    return pointer;
  };

  const pop = (pointer = head) => {
    if (pointer.nextNode.nextNode != null) {
      pointer = pointer.nextNode;
      return pop(pointer);
    }
    pointer.nextNode = null;
    size -= 1;
    return pointer.nextNode;
  };

  const contains = (value, pointer = head) => {
    if (pointer === null) {
      return false;
    }
    if (pointer.value !== value) {
      pointer = pointer.nextNode;
      return contains(value, pointer);
    }
    if (pointer.value === value) {
      return true;
    }
    return false;
  };

  const find = (value, pointer = head, index = 0) => {
    if (pointer === null) {
      return null;
    }
    if (pointer.value !== value) {
      pointer = pointer.nextNode;
      index += 1;
      return find(value, pointer, index);
    }
    if (pointer.value === value) {
      return index;
    }
    return null;
  };

  const toString = (pointer = head, string = "") => {
    if (head === null) {
      return "";
    }
    if (pointer != null) {
      string += `( ${pointer.value} ) -> `;
      pointer = pointer.nextNode;
      return toString(pointer, string);
    }
    string += "null";
    return string;
  };

  const insertAt = (value, index, pointer = head, oldNode = at(index)) => {
    if (pointer.nextNode !== oldNode && oldNode !== head) {
      pointer = pointer.nextNode;
      return insertAt(value, index, pointer);
    }
    if (oldNode === head) {
      const newNode = ListNode(value);
      newNode.nextNode = oldNode;
      head = newNode;
      size += 1;
      return newNode;
    }
    const newNode = ListNode(value);
    newNode.nextNode = oldNode;
    const beforeNode = pointer;
    beforeNode.nextNode = newNode;
    size += 1;
    return newNode;
  };

  const removeAt = (
    index,
    afterNode = at(index + 1),
    currentNode = at(index)
  ) => {
    if (currentNode.nextNode === null) {
      const beforeNode = at(index - 1);
      beforeNode.nextNode = null;
      size -= 1;
    }
    if (index - 1 < 0) {
      head = afterNode;
      size -= 1;
      return head;
    }
    const beforeNode = at(index - 1);
    beforeNode.nextNode = afterNode;
    size -= 1;
    return head;
  };

  return {
    get size() {
      return size;
    },
    get head() {
      return head;
    },
    append,
    prepend,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

const list = LinkedList();
console.log(list.append(1));
console.log(list.append(2));
console.log(list.append(3));
console.log(list.prepend(0));
console.log(list.tail());
console.log(list.toString());
