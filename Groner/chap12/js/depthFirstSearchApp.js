import {Colors, initializedColor} from "./colors";

export const DFS = graph => {
    const vertices = graph.getVertices();
    const adjList = grapg.getAdjList();
    const color = initializedColor(vertices);
    const d = {};
    const f = {};
    const p = {};
    const time = {count : 0};
    for (let i = 0; i < vertices.length; i++){
        f[vertices[i]] = 0;
        d[vertices[i]] = 0;
        p[vertices[i]] = null;
    }
    for (let i = 0; i < vertices.length; i++){
        if (color[vertices[i]] === Colors.WHITE){
            DFSVisit(vertices[i], color, d, f, time, adjList);
        }
    }
    return {
        discovery: d,
        finished: f,
        predecessors: p
    };
};

const DFSVisit = (u, color, d, f, p, time, adjList) => {
    color[u] = Colors.GREY;
    d[u] = ++time.count;
    const neigbors = adjList.get(u);
    for (let i = 0; i < neigbors.length; i++){
        const w = neigbors[i];
        if (color[w] === Colors.WHITE){
            p[w] = u;
            DFSVisit(w, color, d, f, p, time, adjList);
        }
    }
    color[u] = Colors.BLACK
    f[u] = ++time.count;
};
