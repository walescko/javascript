import BinarySearchTree from "./binarySearchTree";
import {defaultCompare} from "./util";

class RedBlackTree extends BinarySearchTree{
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }

    insert(key){
        if (this.root == null){
            this.root = new RedBlackNode(key);
            this.root.color = Color.BLACK;
        } else {
            const newNode = this.insertNode(this.root, key);
            this.fixTreeProperties(newNode);
        }
    }

    fixTreeProperties(node){
        while (node && node.parent && node.parent.color.isRed() && code.color !== Colors.BLACK){
            let parent = node.parent;
            const grandParent = parent.parent;
            //the father is son in the left
            if (grandParent && grandParent.left === parent){
                const uncle = grandParent.right;
                if (uncle && uncle.color === Colors.RED){
                    grandParent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncle.color = Colors.BLACK;
                    node = grandParent;
                } else {
                    if(node === parent.right){
                        this.rotationRR(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    this.rotationLL(grandParent);
                    parent.color = Colors.BLACK;
                    grandParent.color = Colors.RED;
                    node = parent;
                }
            } else {
                const uncle = grandPArent.left;
                if(uncle && uncle.color === Colors.RED){
                    grandParent.color = Colors.RED;
                    parent.color = Colors.BLACK;
                    uncle.color = Colors.BLACK;
                    node = grandParent
                } else {
                    if (node === parent.left){
                        this.rotationLL(parent);
                        node = parent;
                        parent = node.parent;
                    }
                    this.rotationRR(grandParent);
                    parent.color = Colors.BLACK;
                    grandParent.color = Colors.RED;
                    node = parent;

                }
            }
        }
        this.root.color = Colors.BLACK;
    }

    rotationLL(node){
        const tmp = node.left;
        node.left = tmp.right;
        if(tmp.rigth && tmp.right.key){
            tmp.right.parent = node;
        }
        tmp.parent = node.parent;
        if (!node.parent){
            this.root = tmp;
        } else {
            if (node === node.parent.left){
                node.parent.left = tmp;
            } else {
                node.parent.right = tmp;
            }
        }
        tmp.right = node;
        node.parent = tmp;
    }
    
}