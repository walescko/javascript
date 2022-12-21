import Dictionary from "../../chap08/js/dictionary";

class Graph{
    constructor(isDirected = false) {
        this.isDirected = isDirected;
        this.vertices = [];
        this.adList = new Dictionary();
    }
}