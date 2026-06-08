const fs = require("fs");
const graph = JSON.parse(fs.readFileSync("G:/Desktop/dixiLOG/dixiLOG.github.io/.understand-anything/knowledge-graph.json", "utf8"));
console.log(JSON.stringify({project: graph.project, nodes: graph.nodes.length, edges: graph.edges.length}, null, 2));
