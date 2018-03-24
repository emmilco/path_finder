# Making Mazes

## Perfect and Imperfect Mazes

There are two kinds of mazes.  Some mazes contain loops, making it possible for explorers to visit to the same point twice without retracing their steps. Other, so called **"perfect"** mazes, contain no loops.

Because they contain no loops or cyclical paths, perfect mazes have some interesting properties.  For one, they can be represented as **trees**.  Pick *any point* in a perfect maze, and every other part of the maze will be somewhere on a branch that originates at that point.  (Take a second to think about that—it's pretty crazy.)

Another neat thing about perfect mazes: if point A is reachable from point B, they are connected by a unique path.  In other words, if you want to get from A to B in a perfect maze, there is at most one way to get there.


## Spanning Trees and Maze Design

What makes a maze a maze? How would you go about building one?

Mazes are designed to thwart our best intuitions about how to get from one place to another. In a well-designed maze, there is no straight path to the goal, and there are many dead ends along the way.

Making a good maze requires a heavy dose of randomness. We want walls and paths to appear without any apparent order. But we do need there to be *some* order, otherwise the maze would be insoluble.

One way to provide the minimum necessary connectedness to create a good maze is to build the maze as a spanning tree.

A **spanning tree** is a kind of network. It follows two simple rules: (1) Every available point must be connected to the network, and (2) no point can be connected to itself. Total coverage, no cycles.

Spanning trees can be generated in many ways.  Since points in a two-dimensional plane each have four neighbors, the easiest way to generate a spanning tree is to radiate outward from the origin, connecting each point to all of its unconnected neighbors, until the whole space is full.

<bfs non maze>

This produces a pretty boring maze. How can we do better? By making the expansion *random*, of course.

## Randomized Growth

There are many ways to inject randomness into spanning tree generation.  Here's the simplest way, represented as an algorithm:

1. Keep a list of possible path extensions, starting with just the entry point.
2. Pick a **random element** out of the list.
3. Will adding that point to the maze cause the maze to intersect itself?
4. If not, add that point to the maze, and add all of its unvisited neighbors to the list of possible path extensions.
5. Either way, mark that point as visited.
6. Repeat until the list is empty.

This approach produces mazes like the one seen below.  

<bfs maze, b&w>

The maze grows evenly and organically to fill the space.  Each next path extension may be randomly chosen, but all the available extensions have the same random chance of being chosen. This way of structuring our randomness produces locally unpredictable, but globally regular behavior.

If we color the maze based on the path-distance of each segment from the starting point ("the root"), we can get a decent sense of the global structure of the maze:

<bfs maze, colored>

Notice how the color gradient shifts evenly from the top left corner (the root), outward. This tells us that there aren't any crazy backtracking paths in the maze.  But what if we wanted a maze that was more chaotic?

## Weighted Randomness & Prim's Algorithm

In order to change the global structure of our maze, we need to change the way randomness is incorporated into our algorithm.  In our simple randomized growth algorithm, we used random selection from the set of candidate extensions to grow the maze.  Because every node has a fresh chance upon every drawing, the overall tendency is unbiased radial expansion outward from the root.

We want to put the randomness into the *global structure* instead of the local path expansion.  We do this by assigning every square on the grid a random weight, and then using Prim's algorithm to build our maze.

Prim's algorithm is a method for building a minimum spanning tree. A minimum spanning tree is a spanning tree that's designed to choose the *least expensive* way of connecting all the tree's nodes, based on the cost of drawing any particular connection.

For the most part, Prim's algorithm is identical to our earlier algorithm.  We add an initial step before our old step 1,

1. First, assign every potential square a random numerical weight.

and we change step 2,

1. Pick the **least expensive element** out of the list.

This approach produces mazes like the one seen below.

<prim's maze, b&w>

Let's color it to get a better sense of the global structure.  Notice that the global structure is much more complex than in our previous approach, but that the local structure remains random.  A Prim's maze is a beautiful thing!  It also constitutes a *good* maze from a straightforward design perspective: there are long, complex, blind alleys, and the path-distance of any given node is not easily predicted based on its position in the grid.

<prim's maze, colored>

## Restricted Randomness & Depth First Growth

Before solving our mazes, let's try out one more change.  Suppose we wanted mazes with extremely deep, winding paths.  How would we change our path-extension algorithm to produce that?  

One way to create deep mazes is based on **depth first search** (DFS), a tree-searching algorithm.  DFS sets its search trajectory to prioritize the current path.  In other words, it tries to keep going along a particular branch as far as possible before exploring other, earlier options.

A non-randomized depth-first growth maze looks like this:

<dfs non-maze, b&w>

In order to give our DFS maze some complexity, we choose randomly from the N most recently added elements in our list of possible path extensions. Let's set N to 4, since any given node can have at most four valid unincorporated neighbor nodes.  And here's our maze:

<dfs maze, b&w>

When we colorize it, the global structure becomes clear.  Compare our depth first maze, right, with our initial random-growth maze, left.  The difference in total depth is striking.  Notice how many times our DFS maze cycles through the color spectrum before it fills the space!

<bfs maze, colorized>
<dfs maze, colorized>

However, there's a big downside to our DFS maze. Because DFS is biased in favor of extending the current branch of the tree, our maze ends up becoming a couple of very long, locally simple corridors.  A we will see below, the solution to a DFS maze may be very convoluted, but it's not hard to find.


# Maze Solvers

Speaking of solving mazes, let's do some of that! First we'll cover the two most basic algorithms, then the fun ones.

## Depth First Search

Depth First Search is a simple algorithm for finding the path to a target node in a tree, given a starting point. DFS uses a stack to maintain a list of nodes to check.  

1. Start at the root.
2. Pop the last (i.e. most recently added) element off the stack.
3. Check for a match. If found, return the target node.
4. Add each of the current node's children to the stack.
5. Repeat until a match is found, or the stack is empty.

The result is a search path that goes as deep as possible down a single branch before trying another branch.  Below you can see DFS solve each of our three maze types. I have placed the root of each maze in the exact center to better show the behavior of the algorithm.

<bfs maze, with dfs solver>  
<prims maze, with dfs solver>  
<dfs maze, with dfs solver>  

## Breadth First Search

Breadth First Search is similar to DFS, but it treats the list of nodes to search as a queue instead of a stack.  In other words, step 2 of the algorithm listed above becomes:

2. Shift the first (i.e. first added) element out of the queue.

The result is the smooth radial expansion you see below.  

<prims maze, with bfs solver (center starting point)>

Comparing BFS to DFS, we see that BFS is potentially much more expensive in terms of the number of nodes explored before finding the solution. This depends in part on the relative position of root and target within the maze.  If the root and target are close relative to the overall tree, BFS will tend to outperform DFS.  

<prim's maze, bfs solver, root and target near center>
<prim's maze, dfs solver, root and target near center>

If not, DFS will tend to outperform BFS.  Consider that, if the root and target are maximally distant from each other within the maze, BFS will have to explore every other path before finding the goal.

<bfs maze, with bfs solver (corner starting point)>


## Dijkstra's Algorithm

DFS and BFS are cool, and they're both guaranteed to find solutions under normal conditions (e.g. provided our maze is finite and our target is reachable).  But they're not very smart.  As we've seen above, both algorithms are agnostic about the structure of the maze and the probability of success searching along any given trajectory.  We can do better!

When we wanted to improve the structure of our generated maze, we used randomized weighting and Prim's algorithm.  In order to build a smart maze solver, we're going to take a similar approach.  In this case we will use a heuristic-guided improvement on Dijkstra's algorithm called A* ("A-Star").

**Dijkstra's Algorithm** is a path-finding method that prioritizes the least-expensive available node in our search queue. Typically we implement this using a **min-heap priority queue**, which is a *very speedy* data structure for maintaining a list in which the first element is guaranteed to have the minimum value in the entire list. (Note, our implementation of Prim's above uses a priority queue like this too!)

Dijkstra's proceeds like BFS, with changes to step 2:

2. Remove the minimum entry from the priority queue.

and step 4:

4. Insert each of the current node's children into the priority queue.

So far so good.  The only problem is that, because in reality our maze is an *unweighted* graph, there's actually no difference between the cost of exploring any one node and exploring any other.  That means that our priority queue will honor a First-In, First-Out (FIFO) ordering principle, making Dijkstra's algorithm identical in execution to .... Breadth First Search.  Behold:

<bfs maze with dijkstra solver>

So much for doing better!

## A* Search

Now that we've built out a Dijkstra maze solver, though, we can use it to implement an intuition-based path-finding-algorithm called A*.  

A\* keeps track of two different factors.  First, how expensive it was to get to a given node from the origin.  Second, the minimum predicted cost of getting from that node to the goal.  A\* predicts the cost of traveling through a given node based on a heuristic function we provide it, which is based on the structure of our graph.  

In this case, we set the heuristic function to calculate the diagonal distance between the current node and the target node, so that our search will be encouraged to go as directly toward the goal as possible.

How does A* perform?  Let's take a look:

<bfs maze with A* solver>
<prims maze with A* solver>
<dfs maze with A* solver>

You can see that when a relatively direct path is available, A\* tends to find it, and quickly. A\* also has an advantage when the root and target are close together, relative to the size of the graph.  A\* doesn't always outperform DFS (or even BFS—intuition can lead us astray!), but it is about as good in the worst case, and better on average.

Finally, to sum up, you can see all three of our solvers solving all three of our mazes at once!

<etc>
