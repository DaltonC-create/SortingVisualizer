// Global array for animations.
var animations = [];

export default function heapSort(array) {
  // Setting Time complexities.
  document.getElementById("time-worst").innerHTML = " O(N log N)";
  document.getElementById("time-average").innerHTML = " Θ(N log N)";
  document.getElementById("time-best").innerHTML = " Ω(N log N)";

  // Setting Space complexity.
  document.getElementById("space-worst").innerHTML = " O(1)";

  // Setting summary.
  document.getElementById("summary").innerHTML =
    "Heap sort is a comparison-based sorting algorithm that works by building a binary heap data structure from the input array and then repeatedly extracting the largest element and swapping it with the last element of the heap. The heap is then reduced in size and heapified again, and the process is repeated until the heap is empty.";
  document.getElementById("uses").innerHTML =
    "Heap sort has a worst-case time complexity of O(N log N), making it more efficient than many other sorting algorithms, particularly for large datasets. It is also an in-place sorting algorithm, meaning it does not require additional memory beyond that used by the input array. Overall, heap sort is a good choice when you need to sort large datasets efficiently and when you do not have much additional memory available.";

  // Resetting animations at the start of the sort.
  animations = [];

  sort(array);
  return animations;
}

function swap(array, i, j) {
  animations.push([i, array[i], "red"]);
  animations.push([j, array[j], "red"]);

  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;

  animations.push([i, array[i], "red"]);
  animations.push([j, array[j], "red"]);

  animations.push([i, array[i], "blue"]);
  animations.push([j, array[j], "blue"]);
}

function sort(array) {
  for (var i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    maxHeapify(array, array.length, i);
  }

  for (var i = array.length - 1; i > 0; i--) {
    swap(array, 0, i);
    animations.push([i, array[i], "green"]);
    animations.push([i, array[i], "yellow"]);

    maxHeapify(array, i, 0);

    animations.push([i, array[i], "blue"]);
    animations.push([i, array[i], "green"]);
  }
  animations.push([i, array[i], "green"]);
}

function maxHeapify(array, i, j) {
  var largest = j;
  var left = 2 * j + 1;
  var right = 2 * j + 2;

  if (left < i && array[left] > array[largest]) {
    if (largest != j) {
      animations.push([largest, array[largest], "blue"]);
    }

    largest = left;
    animations.push([largest, array[largest], "red"]);
  }

  if (right < i && array[right] > array[largest]) {
    if (largest != j) {
      animations.push([largest, array[largest], "blue"]);
    }

    largest = right;
    animations.push([largest, array[largest], "red"]);
  }

  if (largest != j) {
    swap(array, j, largest);

    maxHeapify(array, i, largest);
  }
}
