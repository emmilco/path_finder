function canvasDraw(node, ctx){
  const size = 10;
  ctx.rect(node.x * size,node.y * size, size, size);
  ctx.stroke();
  ctx.font="6px Georgia";
  ctx.textAlign="center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#000000";
  const distance = node.distance();
  ctx.fillText(distance, size*node.x+(size/2), size*node.y+(size/2));
}

export default canvasDraw;
