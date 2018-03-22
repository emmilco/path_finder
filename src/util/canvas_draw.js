function canvasDraw(node, ctx){
  const size = 5;
  ctx.fillStyle = `#${node.distance()*10000}`;
  if (node.type === "wall") ctx.fillStyle = 'green';
  ctx.fillRect(node.x * size,node.y * size, size, size);
}


// function canvasDraw(node, ctx){
//   const size = 20;
//   ctx.rect(node.x * size,node.y * size, size, size);
//   ctx.stroke();
//   ctx.font="9px Georgia";
//   ctx.textAlign="center";
//   ctx.textBaseline = "middle";
//   ctx.fillStyle = "#000000";
//   const distance = node.distance();
//   ctx.fillText(distance, size*node.x+(size/2), size*node.y+(size/2));
// }

export default canvasDraw;
