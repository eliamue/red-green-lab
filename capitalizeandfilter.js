const capitalizeAndFilter = (array) => {
  
  const filteredArray = array.filter(letter => (letter[0] !== 'f' && letter[0] !== 'F'));
  
  const capitalizedArray = filteredArray.map(letter => (letter.charAt(0).toUpperCase() + letter.slice(1)));
  
  return capitalizedArray;
};

export default capitalizeAndFilter;
