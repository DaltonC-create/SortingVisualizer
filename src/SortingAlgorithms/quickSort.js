// Global array for animations.
var animations = [];

export default function quickSort(array) {
  // Setting Time complexities.
  document.getElementById("time-worst").innerHTML = " O(N<sup>2</sup>)";
  document.getElementById("time-average").innerHTML = " Θ(N log N)";
  document.getElementById("time-best").innerHTML = " Ω(N log N)";

  // Setting Space complexity.
  document.getElementById("space-worst").innerHTML = " O(log N)";

  // Setting summary.
  document.getElementById("summary").innerHTML =
    'Quick sort is a divide-and-conquer sorting algorithm that works by selecting a "pivot" element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then recursively sorted using the same process.';
  document.getElementById("uses").innerHTML =
    "Quick sort has an average time complexity of O(N log N), making it one of the most efficient sorting algorithms in practice. It is also an in-place sorting algorithm, meaning it does not require additional memory beyond that used by the input array. Quick sort is a good choice when you need to sort large datasets efficiently and when you have sufficient additional memory available. However, its worst-case time complexity of O(N<sup>2</sup>) can make it inefficient for some types of input data, such as already-sorted or nearly-sorted arrays, and alternative sorting algorithms may be better suited in such cases.";

  // Resetting animations at the start of the sort.
  animations = [];

  sort(array, 0, array.length - 1);

  return animations;
}

function sort(array, start, end) {
  if (start < end) {
    // Pivot variable.
    var pivotPos = partition(array, start, end);
    // Recursively sort the left and right sub-arrays.
    sort(array, start, pivotPos - 1);
    sort(array, pivotPos + 1, end);
  }
}

function partition(array, start, end) {
  var idx = start + 1;
  var pivot = array[start];
  animations.push([start, array[start], "yellow"]);

  for (var i = start + 1; i <= end; i++) {
    // Elms < pivot on the left, elms > pivot on the right.
    if (array[i] < pivot) {
      animations.push([i, array[i], "yellow"]);

      animations.push([idx, array[idx], "red"]);
      animations.push([i, array[i], "red"]);

      var temp = array[idx];
      array[idx] = array[i];
      array[i] = temp;

      animations.push([idx, array[idx], "red"]);
      animations.push([i, array[i], "red"]);

      animations.push([idx, array[idx], "blue"]);
      animations.push([i, array[i], "blue"]);

      idx += 1;
    }
  }

  animations.push([start, array[start], "red"]);
  animations.push([idx - 1, array[idx - 1], "red"]);

  // Proper placement of pivot variable.
  var tempPivot = array[start];
  array[start] = array[idx - 1];
  array[idx - 1] = tempPivot;

  animations.push([start, array[start], "red"]);
  animations.push([idx - 1, array[idx - 1], "red"]);

  for (var x = start; x <= idx; x++) {
    animations.push([x, array[x], "green"]);
  }

  // Return pivot position.
  return idx - 1;
}
