function canvasDraw(node, ctx){
  const size = 5;
  const distance = node.distance();
  ctx.fillStyle = `hsl(
    ${180 + distance*3},
    90%,
    45%)`;
  if (node.type === "wall") ctx.fillStyle = 'white';
  ctx.fillRect(node.x * size,node.y * size, size, size);
}

export default canvasDraw;
