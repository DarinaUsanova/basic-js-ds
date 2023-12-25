const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }
  add( data ) {
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }

    let currentNode = this.rootNode;
    while (currentNode) {
      if (data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else if (data > currentNode.data) {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      } else {
        return; 
    }
   }
  }

  has( data ) {
    return this.find(data) !== null;
  }

  find( data ) {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      } else if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;
  }

  remove( data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(current, data) {
    if (!current) {
      return null;
    }
    if (data === current.data) {
      if (!current.left && !current.right) {
        return null;
      }
      if (!current.left) {
        return current.right;
      }
      if (!current.right) {
        return current.left;
      }
      const tempNode = this.findMin(current.right);
      current.data = tempNode.data;
      current.right = this.removeNode(current.right, tempNode.data);
      return current;
    } else if (data < current.data) {
      current.left = this.removeNode(current.left, data);
      return current;
    } else {
      current.right = this.removeNode(current.right, data);
      return current;
    }
  }

  findMin(node) {
    while (node.left) {
      node = node.left;
    }
    return node;
  }

  min() {
    if (!this.rootNode) {
      return null;
    }
    let currentNode = this.rootNode;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }
    let currentNode = this.rootNode;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};