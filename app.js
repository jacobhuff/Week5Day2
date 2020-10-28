/* Intermediate Algorithm Scripting: Diff Two Arrays */
function diffArray(arr1, arr2) {
  let newArr = [];

  function onlyInFirst(first, second) {
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) === -1) {
        newArr.push(first[i]);
      }
    }
  }

  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);

  return newArr;
}

/* Intermediate Algorithm Scripting: Pig Latin */
function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants !== null
    ? str.replace(consonantRegex, "").concat(myConsonants).concat("ay") : str.concat("way");
}

/* Intermediate Algorithm Scripting: DNA Pairing */
function pairElement(str) {
  var paired = [];

  var search = function (char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(translatePigLatin("consonant"));
console.log(pairElement("GCG"));