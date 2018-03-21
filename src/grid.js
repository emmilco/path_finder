const Grid = (unitWidth, unitHeight) => {
  return [...Array(unitHeight).keys()].map(i => Array(unitWidth));
};

export default Grid;
