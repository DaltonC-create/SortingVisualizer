export default function selectionSort(array) {
  //Setting Time complexities
  document.getElementById("time-worst").innerHTML = " O(N<sup>2</sup>)";
  document.getElementById("time-average").innerHTML = " Θ(N<sup>2</sup>)";
  document.getElementById("time-best").innerHTML = " Ω(N<sup>2</sup>)";

  //Setting Space complexity
  document.getElementById("space-worst").innerHTML = " O(1)";

  const animations = [];

  for (var i = 0; i < array.length - 1; i++) {
    animations.push([i, array[i], "red"]);

    var minIdx = i;

    for (var j = i + 1; j < array.length; j++) {
      animations.push([j, array[j], "yellow"]);

      if (array[j] < array[minIdx]) {
        if (minIdx != i) {
          animations.push([minIdx, array[minIdx], "blue"]);
        }
        minIdx = j;
        animations.push([minIdx, array[minIdx], "red"]);
      } else {
        animations.push([j, array[j], "blue"]);
      }
    }

    if (minIdx != i) {
      var temp = array[minIdx];
      array[minIdx] = array[i];
      array[i] = temp;

      animations.push([minIdx, array[minIdx], "red"]);
      animations.push([i, array[i], "red"]);
      animations.push([minIdx, array[minIdx], "blue"]);
    }
    animations.push([i, array[i], "green"]);
  }
  animations.push([i, array[i], "green"]);

  return animations;
}
