import BinarySearchTree from "./binarySearchTree";
import {defaultCompare} from "./util";

class RedBlackTree extends BinarySearchTree{
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }

    insert(key: T){
        if (this.root == null){
            this.root = new RedBlackNode(key);
            this.root.color = Color.BLACK;
        } else {
            const newNode = this.insertNode(this.root, key);
            this.fixTreeProperties(newNode);
        }
    }
}