const copyAndPush = (things, newThing) => {
  const moreThings = things.slice();
  moreThings.push(newThing);
  return moreThings;
};

export default copyAndPush;
