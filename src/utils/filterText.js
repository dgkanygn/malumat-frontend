export const filterText = (arr, charLimit) => {
  const newArr = [];
  let charLength = 0;

  for (let i = 0; i < arr.length; i++) {
    let elo = arr[i];

    if (charLength + elo.length <= charLimit) {
      newArr.push(elo);
      charLength += elo.length;
    }
  }

  const newArr2 = newArr.join(" ");

  let filtered = newArr2 + "...";

  if (newArr2) return filtered;
  else {
    return "";
  }
};
