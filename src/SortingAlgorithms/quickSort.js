// Global array for animations.
var animations = [];

export default function quickSort(array) {
  //Setting Time complexities
  document.getElementById("time-worst").innerHTML = " O(N<sup>2</sup>)";
  document.getElementById("time-average").innerHTML = " Θ(N log N)";
  document.getElementById("time-best").innerHTML = " Ω(N log N)";

  //Setting Space complexity
  document.getElementById("space-worst").innerHTML = " O(log N)";

  // Resetting animations at the start of the sort.
  animations = [];

  sort(array, 0, array.length - 1);

  return animations;
}

// function sort(array, left, right) {
//   var index = partition(array, left, right);

//   if (left < index - 1) {
//     sort(array, left, index - 1);
//   }
//   if (index < right) {
//     sort(array, index, right);
//   }
// }

// function partition(array, left, right) {
//   var pivot = array[Math.floor((left + right) / 2)];
//   var i = left;
//   var j = right;
//   animations.push(i, array[i], "yellow");

//   while (i <= j) {
//     while (array[i] < pivot) {
//       i++;
//     }
//     while (array[j] > pivot) {
//       j--;
//     }
//     if (i <= j) {
//       // Swap indicies.
//       var temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//       i++;
//       j--;
//     }
//   }

//   for (var x = left; x <= i; x++) {
//     animations.push(x, array[x], "green");
//   }

//   return i;
// }

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
