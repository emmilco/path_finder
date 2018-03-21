# Pathfinder README

## Description

The application will be a single-page javascript app containing a canvas which will display a grid, and a series of buttons which will demonstrate various maze generation and pathfinding algorithms.  I would like to include at least four of each.  The site will also include links to webpages (external) with information about the algorithms featured, and short descriptions of how each one works in abstract.

## MVP

- Functional grid of squares with buttons to trigger animations.
- Animations for at least two maze generation algorithms.
- Animations for at least two maze-solving algorithms.

## Technologies

Canvas, d3, JavaScript, HTML, CSS

## Implementation Timeline

1 day, set up canvas, grid, cell logic

2 days, implement algorithms

1 day, finish implementing algorithms, do styling

## Nodes

Each maze is implemented as a spanning tree consisting of nodes.  The nodes are squares on a rectangular grid.  Each node has a few properties: x and y coordinates, parent, children.  Nodes are generated dynamically by each algorithm to fill the tree within the limits of the canvas.  E.g. the algorithm is given a root node at (0,0), and then creates nodes at available points, following its own principles, until it has generated a spanning tree that fills the entire space.

Because the limits of the canvas are determined by its dimensions, it is not necessary to pre-generate the grid of nodes before the tree is constructed.  A grid should be available and left empty.  Checking for available node spaces within the grid happens based on the proximate entries within the grid, which is populated as the nodes are created.
