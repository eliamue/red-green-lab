const copyAndPush = (things, newThing) => {
  const moreThings = things;
  things.push(newThing);
  return moreThings;
};

export default copyAndPush;
