import BinarySearchTree from "./binarySearchTree";
import {defaultCompare} from "./util";

//Adelson-Velski e Landi Tree
class AVLTree extends BinarySearchTree{
    constructor(compareFn = defaultCompare) {
        super(compareFn);
        this.compareFn = compareFn;
        this.root = null;
    }

    getNodeHeight(node){
        if (node = null){
            return -1;
        }
        return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right))+1;
    }

    getBalanceFactor(node){

        const BalanceFactor = {
            UNBALANCED_RIGHT: 1,
            SLIGHTLY_UNBALANCED_RIGHT: 2,
            BALANCED: 3,
            SLIGHTLY_UNBALANCED_LEFT: 4,
            UNBALANCED_LEFT: 5
        };

        const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
        switch(heightDifference){
            case -2:
                return BalanceFactor.UNBALANCED_RIGHT;
            case -1:
                return BalanceFactor.SLIGHTHLY_UNBALANCED_RIGHT;
            case 1:
                return BalanceFactor.SLIGHTHLY_UNBALANCED_LEFT;
            case 2:
                return BalanceFactor.UNBALANCED_LEFT;
            default:
                return BalanceFactor.BALANCED;
        }
    }

    //Rotations
    rotationLL(node){
        const tmp = node.left;
        node.left = tmp.right;
        tmp.right = node;
        return tmp;
    }
    rotationRR(node){
        const tmp = node.right;
        node.right = tmp.left;
        tmp.left = node;
        return tmp;
    }
    rotationLR(node){
        node.left = this.rotationRR(node.left);
        return this.rotationLL(node);
    }
    rotationRL(node){
        node.right = this.rotationLL(node.right);
        return this.rotationRR(node);
    }

    //insert node in AVL
    insert(key){
        this.root = this.insertNode(this.root, key);
    }
    insertNode(node, key) {
        //insert a node with in a BST
        if (node == null) {
            return new Node(key);
        } else if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
            node.left = this.insertNode(node.left, key);
        } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
            node.right = this.insertNode(node.right, key);
        } else {
            return node;
        }
        //tree balance, if necessary
        const balanceFactor = this.getBalanceFactor(node);
        if (balanceFactor === balanceFactor.UNBALANCED_LEFT) {
            if (this.compareFn(key, node.left.key) === Compare.LESS_THAN) {
                node = this.rotationLL(node);
            } else {
                return this.rotationLR(node);
            }
        }
        if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
            if (this.compareFn(key, node.right.key) === Compare.BIGGER_THAN) {
                node = this.rotationRR(node);
            } else {
                return this.rotationRL(node);
            }
        }
        return node;
    }

}