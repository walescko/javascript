import {Colors, initializedColor} from "./colors";

const depthFirstSearch = (graph, callback) => {
    const vertices = graph.getVertices();
    const adjList = graph.getAdjList();
    const color = initializedColor(vertices);
    for (let i = 0; i < vertices.length; i++){
        if (color[vertical[i]] === Colors.WHITE){
            depthFirstSearch(vertices[i], color, adjList, callback);
        }
    }
    };

const depthFirstSearchVisit = (u, color, adjList, callback) => {
    color[u] = Colors.GREY;
    if (callback) {
        callback(u);
    }
    const neighbors = adjList.get(u);
    for (let i = 0; i < neighbors.length; i++){
        const w = neighbors[i];
        if (color[w] === Colors.WHITE){
            depthFirstSearchVisit(w, color, adjList, callback);
        }
    }
    color[u] = Colors.BLACK;
};

depthFirstSearch(graph, printVertex);
