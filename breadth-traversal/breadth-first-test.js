const Tree = require('./breadth-first-traversal.js');

var a = new Tree('A', ['B', 'C']);
var b = new Tree('B', ['D']);
var c = new Tree('C', ['F']);
var d = new Tree('D', ['E']);
var e = new Tree('E', []);
var f = new Tree('F', []);

a.printLevelOrder();
b.printLevelOrder();
c.printLevelOrder();
d.printLevelOrder();
e.printLevelOrder();
f.printLevelOrder();
