put the root node in the queue
while there are still nodes in the queue
pop a random node off the queue
set that node's type to "path"
set its edgeNode's type to "path"
get the node's candNeighbors
remove any that already have parents
set their parent to the active node
push them to the queue
draw the node
draw its edgeNode
reinvoke function
