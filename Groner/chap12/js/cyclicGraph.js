import {Graph} from "./graph";
import {DFS} from "./depthFirstSearchApp";

let graph = new Graph(true);
let myVertices = ["A", "B", "C", "D", "E", "F"];
for (let i = 0; i < myVertices.length; i++){
    graph.addVertex(myVertices[i]);
}
graph.addEdge("A","C");
graph.addEdge("A","D");
graph.addEdge("B","D");
graph.addEdge("B","E");
graph.addEdge("C","F");
graph.addEdge("F","E");
const result = DFS(graph);

const fTimes = result.finished;
let s = "";
for (let count = 0; count < myVertices.length; count++){
    let max = 0;
    let maxName = null;
    for (let i = 0; i < myVertices.length; i++){
        if (fTimes[myVertices[i]] > max){
            max = fTimes[myVertices[i]];
            maxName = myVertices[i];
        }
    }
    s += " = " + maxName;
    delete fTimes[maxName];
}
console.log(s);




