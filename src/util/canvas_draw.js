function canvasDraw(node, ctx){
  const size = 5;
  const distance = node.distance();
  ctx.fillStyle = `hsl(
    ${distance*3},
    ${50 + 20*Math.sin(distance/6)}%,
    ${50 + 10*Math.cos(distance/12)}%)`;
  if (node.type === "wall") ctx.fillStyle = 'white';
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
