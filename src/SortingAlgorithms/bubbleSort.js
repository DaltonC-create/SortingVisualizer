export default function bubbleSort(array) {
  document.getElementById("time-best").innerHTML = " Ω(N)";
  document.getElementById("time-average").innerHTML = " Θ(N<sup>2</sup>)";
  document.getElementById("time-worst").innerHTML = " O(N<sup>2</sup>)";
  document.getElementById("space-worst").innerHTML = " O(1)";
  const animations = [];
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
      animations.push([j, array[j], "yellow"]);

      if (array[j] > array[j + 1]) {
        animations.push([j, array[j], "red"]);
        animations.push([j + 1, array[j + 1], "red"]);
        var temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;

        /* Pushing in reverse to avoid bars stuttering when 
        swapping with the largest element of the array. */
        animations.push([j + 1, array[j + 1], "red"]);
        animations.push([j, array[j], "red"]);
      }
      animations.push([j, array[j], "blue"]);
    }
    animations.push([j, array[j], "green"]);
  }
  animations.push([0, array[0], "green"]);
  return animations;
}
