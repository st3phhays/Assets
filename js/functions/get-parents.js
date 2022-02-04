// Get parents of an element and push to array
function getParents(el) {
    var parents = [],
        node = el;

    while (node != document) {
        parents.push(node.parentNode);
        node = node.parentNode;
    }
    return parents;
}