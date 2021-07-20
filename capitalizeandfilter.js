export default function capitalizeAndFilter(array) {

  for (const letter of array) {
    const newArray = letter.charAt(0).toUpperCase() + array.substr(1);
    return newArray;
  }
  
}
