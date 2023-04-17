export default function insertionSort(array) {
  // Setting Time complexities.
  document.getElementById("time-worst").innerHTML = " O(N<sup>2</sup>)";
  document.getElementById("time-average").innerHTML = " Θ(N<sup>2</sup>)";
  document.getElementById("time-best").innerHTML = " Ω(N)";

  // Setting Space complexity.
  document.getElementById("space-worst").innerHTML = " O(1)";

  // Setting summary.
  document.getElementById("summary").innerHTML =
    "Insertion sort is a simple comparison-based sorting algorithm that works by building a sorted array one element at a time. The algorithm iterates through the input array, comparing each element with the sorted elements to its left and inserting it into its correct position in the sorted subarray.";
  document.getElementById("uses").innerHTML =
    "Insertion sort has a worst-case time complexity of O(N<sup>2</sup>), making it less efficient than many other sorting algorithms, particularly for large datasets. However, it is efficient for small datasets and nearly-sorted input, and it has a low overhead, making it a good choice in situations where memory is limited or where the input data is already partially sorted. Additionally, insertion sort is often used as the base case for other sorting algorithms, such as quicksort, where the input array is divided into smaller subarrays until they are small enough to be sorted using insertion sort.";

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
