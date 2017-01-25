'use strict';

module.exports = Tree;

function Tree(val) {
  this.val = val;
  this.children = [];
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
