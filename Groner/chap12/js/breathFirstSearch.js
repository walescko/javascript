import {initializedColor} from "./colors";

export const breathFirstSearch = (graph, starVertex, callback) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializedColor(vertices);
    const queue = new Queue();
    queue.enqueue(starVertex);
    while (!queue.isEmpty()){
        const u = queue.dequeue();
        const neigbors = adjList.get(u);
        color[u] = Colors.GREY;
        for (let i = 0; i < neigbors.length; i++){
            const w = neigbors[i];
            if (color[w] === Colors.WHITE){
                color[w] = Colors.GREY;
                queue.enqueue(w);
          }
        }
    color[u] = Colors.BLACK;
        if (callback){
            callback(u);
        }
    }
};