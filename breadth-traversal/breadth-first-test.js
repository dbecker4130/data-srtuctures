const Tree = require('./breadth-first-traversal.js');

var a = new Tree('A', [new Tree('B', [new Tree ('D')]), new Tree('C')]);

a.printLevelOrder();
