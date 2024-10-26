# Linked List Implementation in JavaScript

This repository contains a simple implementation of a singly linked list in JavaScript. It provides various methods to manipulate and interact with the linked list data structure.

## Features

- **Append**: Add a new node to the end of the list.
- **Prepend**: Add a new node to the beginning of the list.
- **Get Size**: Retrieve the total number of nodes in the list.
- **Get Head**: Get the first node of the list.
- **Get Tail**: Get the last node of the list.
- **Access Node**: Retrieve a node at a specific index.
- **Pop**: Remove the last node from the list and return its value.
- **Contains**: Check if a specific value exists in the list.
- **Find**: Get the index of a node containing a specific value.
- **To String**: Represent the linked list as a string.

## Installation

To use this linked list implementation, clone the repository and include the `LinkedList.js` and `Node.js` files in your project:

```bash
git clone https://github.com/yourusername/your-repo-name.git
```

## Usage

1. Import the linked list factory:

```javascript
import { LinkedList } from './LinkedList.js';
```

2. Create an instance of the linked list:

```javascript
const myList = LinkedList();
```

3. Use the methods to manipulate the linked list:

```javascript
myList.append(10);
myList.prepend(5);
console.log(myList.getSize()); // Output: 2
console.log(myList.toString()); // Output: ( 5 ) -> ( 10 ) -> null
```

## Example

Here’s an example of how to use the linked list:

```javascript
import { LinkedList } from './LinkedList.js';

const myList = LinkedList();

myList.append(1);
myList.append(2);
myList.prepend(0);

console.log(myList.toString()); // Output: ( 0 ) -> ( 1 ) -> ( 2 ) -> null
console.log(myList.getSize()); // Output: 3
console.log(myList.find(1)); // Output: 1
console.log(myList.pop()); // Output: 2
console.log(myList.toString()); // Output: ( 0 ) -> ( 1 ) -> null
```

## Contributing

Feel free to submit issues or pull requests if you have suggestions for improvements or new features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
