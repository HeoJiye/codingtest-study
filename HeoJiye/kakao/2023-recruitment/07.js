function solution(edges, target) {
  var answer = [];

  var allEdges = {};
  edges.forEach((e) => {
    var [a, b] = e;
    if (!allEdges[a]) allEdges[a] = [];
    allEdges[a].push(Number(b));
    allEdges[a].sort((a, b) => a - b);
  });
  var curEdges = {};
  for (var [idx, value] of Object.entries(allEdges)) {
    curEdges[idx] = 0;
  }

  //var best;
  function search(tree, curEdges, path) {
    if (cancel(tree)) return;
    if (path.length > 0) {
      tree = drop(tree, curEdges, path[path.length - 1]);
      curEdges = switchEdge(curEdges);
    }

    if (tree.join("") === target.join("")) {
      return path;
    }

    return (
      search(tree, curEdges, [...path, 1]) ??
      search(tree, curEdges, [...path, 2]) ??
      search(tree, curEdges, [...path, 3])
    );
  }
  function drop(tree, curEdges, num) {
    var newTree = [...tree];
    var node = 1;
    while (allEdges[node]) {
      node = allEdges[node][curEdges[node]];
    }
    newTree[node - 1] += num;
    return newTree;
  }
  function switchEdge(curEdges) {
    var newEdges = { ...curEdges };
    for (var [node, value] of Object.entries(newEdges)) {
      newEdges[node] += 1;
      if (newEdges[node] >= allEdges[node].length) newEdges[node] = 0;
    }
    return newEdges;
  }
  function cancel(tree) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] > target[i]) return true;
    }
    return false;
  }
  return search(new Array(target.length).fill(0), curEdges, []) ?? [-1];
}
