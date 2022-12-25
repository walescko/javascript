const Colors = {
    WHITE: 0,
    GREY: 1,
    BLACK: 2
};

const initializedColor = vertices => {
    const color ={};
    for (let i = 0; i < vertices.length; i++){
        color[vertices[i]] = Colors.WHITE;
    }
    return color;
};

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