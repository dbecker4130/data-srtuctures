'use strict';

module.exports = Tree;

function Tree(val, children) {
  this.val = val;
  this.children = children || [];
}

Tree.prototype.printLevelOrder = function() {
  let q = [this];
  while(q.length > 0) {
    let tree = q.shift();
    tree.children.forEach(children => {
      q.push(children);
    });
    console.log(tree.val);
  }
};
