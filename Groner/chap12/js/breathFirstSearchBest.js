import {initializedColor} from "./colors";

const BFS = (graph, starVertex) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializedColor(vertices);
    const queue = new Queue();
    const distances = {};
    const predecessors = {};
    queue.enqueue(starVertex);
    for (let i = 0; i < vertices.length; i++){
        distances[vertices[i]] = 0;
        predecessors[vertices[i]] = null;
    }
    while (!queue.isEmpty()){
        const u = queue.dequeue();
        const neighbors = adjList.getAdjList(u);
        color[u]= Colors.GREY;
        for (let i = 0; i < neighbors.length; i++){
            const w = neighbors[i];
            if(color[w] === Colors.WHITE){
                color[w] = Colors.GREY;
                distances[w] = distances[u] + 1;
                predecessors[w] = u;
                queue.enqueue(w);
            }
        }
        color[u] = Colors.BLACK;
    }
    return {
        distances,
        predecessors
    };
};

const fromVertex = myVertices[0];
for (let i = 1; i < myVertices.length; i++){
    const toVertex = myVertices[i];
    const path = new Stack();
    for (let v = toVertex;
         v!==fromVertex;
         v = shortesPathA.predecessors[v]){
        path.push(v);
    }
    path.push(fromVertex);
    let s = path.pop();
    while (!path.isEmpty());
    s += " - " + path.pop();
}
console.log(s);

