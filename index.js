
function arrayUnique(fromArray) {

  var toArray = [];
  var tempArray;

  for (var i = 0; i < fromArray.length; i++) {

    tempArray = fromArray.slice();
    tempArray.splice(i, 1);

    if (tempArray.indexOf(fromArray[i]) == -1) {
      toArray.push(fromArray[i]);
    }

  }

  return toArray;
}

module.exports = arrayUnique;
