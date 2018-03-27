function canvasSearchDraw(node, ctx){
  const size = 5;
  ctx.fillStyle = `white`;
  if (node.type === "wall") ctx.fillStyle = 'white';
  ctx.fillRect(node.x * size,node.y * size, size, size);
}

export default canvasSearchDraw;
