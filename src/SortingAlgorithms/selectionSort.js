export default function selectionSort(array) {
  // Setting Time complexities.
  document.getElementById("time-worst").innerHTML = " O(N<sup>2</sup>)";
  document.getElementById("time-average").innerHTML = " Θ(N<sup>2</sup>)";
  document.getElementById("time-best").innerHTML = " Ω(N<sup>2</sup>)";

  // Setting Space complexity.
  document.getElementById("space-worst").innerHTML = " O(1)";

  // Setting summary.
  document.getElementById("summary").innerHTML =
    "Selection sort is a simple comparison-based sorting algorithm that works by repeatedly finding the minimum element from the unsorted part of the array and swapping it with the first element of the unsorted part. The sorted part of the array is gradually built up from left to right.";
  document.getElementById("uses").innerHTML =
    "Selection sort has a worst-case time complexity of O(N<sup>2</sup>), making it less efficient than many other sorting algorithms, particularly for large datasets. However, it is easy to understand and implement, making it a good choice for small datasets or educational purposes. Selection sort may also be useful in situations where the amount of data to be sorted is small and the overhead of using more complex sorting algorithms outweighs their potential efficiency gains.";

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
