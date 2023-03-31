// Global array for animations.
var animations = [];

export default function heapSort(array) {
  //Setting Time complexities
  document.getElementById("time-worst").innerHTML = " O(N log N)";
  document.getElementById("time-average").innerHTML = " Θ(N log N)";
  document.getElementById("time-best").innerHTML = " Ω(N log N)";

  //Setting Space complexity
  document.getElementById("space-worst").innerHTML = " O(1)";

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
