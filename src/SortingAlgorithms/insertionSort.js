export default function insertionSort(array) {
  //Setting Time complexities
  document.getElementById("time-worst").innerHTML = " O(N<sup>2</sup>)";
  document.getElementById("time-average").innerHTML = " Θ(N<sup>2</sup>)";
  document.getElementById("time-best").innerHTML = " Ω(N)";

  //Setting Space complexity
  document.getElementById("space-worst").innerHTML = " O(1)";
  const animations = [];

  for (var i = 0; i < array.length; i++) {
    animations.push([i, array[i], "yellow"]);

    var key = array[i];
    var j = i - 1;

    while (j >= 0 && array[j] > key) {
      animations.push([j, array[j], "red"]);
      animations.push([j + 1, array[j + 1], "red"]);

      array[j + 1] = array[j];

      animations.push([j, array[j], "red"]);
      animations.push([j + 1, array[j + 1], "red"]);

      animations.push([j, array[j], "blue"]);

      if (j === i - 1) {
        animations.push([j + 1, array[j + 1], "yellow"]);
      } else {
        animations.push([j + 1, array[j + 1], "blue"]);
      }
      j -= 1;
    }
    array[j + 1] = key;

    for (var k = 0; k < i; k++) {
      animations.push([k, array[k], "green"]);
    }
  }
  animations.push([i - 1, array[i - 1], "green"]);
  return animations;
}
