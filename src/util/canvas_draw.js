function canvasDraw(node, ctx){
  const size = 5;
  var hue = Math.floor((10 - node.distance()) * 120 / 10);  // go from green to red
  var saturation = Math.abs(node.distance() - 50)/50;   // fade to white as it approaches 50
  ctx.fillStyle = `hsl(${node.distance()*2}, ${50 + 20*Math.sin(node.distance()/3)}%, 50%)`;
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
