// Global array for animations.
var animations = [];

export default function mergeSort(array) {
  // Setting Time complexities.
  document.getElementById("time-worst").innerHTML = " O(N log N)";
  document.getElementById("time-average").innerHTML = " Θ(N log N)";
  document.getElementById("time-best").innerHTML = " Ω(N log N)";

  // Setting Space complexity.
  document.getElementById("space-worst").innerHTML = " O(N)";

  // Setting summary.
  document.getElementById("summary").innerHTML =
    "Merge sort is a divide-and-conquer sorting algorithm that works by dividing the input array into two halves, recursively sorting each half, and then merging the sorted halves into a single sorted array.";
  document.getElementById("uses").innerHTML =
    "Merge sort has a worst-case time complexity of O(N log N), making it efficient for sorting large datasets. It is also a stable sorting algorithm, meaning that it preserves the relative order of equal elements in the input array. Merge sort is a good choice when you need to sort large datasets efficiently and when you have sufficient additional memory available to hold the temporary arrays used in the merge step. Additionally, merge sort is well-suited for sorting linked lists, as it can efficiently merge two sorted linked lists into a single sorted list.";

  // Resetting animations at the start of the sort.
  animations = [];
  partition(array, 0, array.length - 1);
  return animations;
}

// Partion the array.
function partition(array, start, end) {
  if (start < end) {
    var mid = Math.floor((start + end) / 2);
    animations.push([mid, array[mid], "yellow"]);

    partition(array, start, mid);
    partition(array, mid + 1, end);

    sort(array, start, mid, end);
  }
}

// Sort teh array.
function sort(array, start, mid, end) {
  var p = start,
    q = mid + 1;
  var arr = [];
  var k = 0;

  for (var i = start; i <= end; i++) {
    if (p > mid) {
      arr[k++] = array[q++];
      animations.push([q - 1, array[q - 1], "red"]);
    } else if (q > end) {
      arr[k++] = array[p++];
      animations.push([p - 1, array[p - 1], "red"]);
    } else if (array[p] < array[q]) {
      arr[k++] = array[p++];
      animations.push([p - 1, array[p - 1], "red"]);
    } else {
      arr[k++] = array[q++];
      animations.push([q - 1, array[q - 1], "red"]);
    }
  }
  // Blue means it has been sorted in it's partition. Green means it has been fully sorted.
  if (k === array.length) {
    for (var j = 0; j < k; j++) {
      array[start++] = arr[j];
      animations.push([start - 1, array[start - 1], "green"]);
    }
  } else {
    for (var t = 0; t < k; t++) {
      array[start++] = arr[t];
      animations.push([start - 1, array[start - 1], "blue"]);
    }
  }
}
