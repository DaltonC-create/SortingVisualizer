export default function bubbleSort(array) {
  // Setting Time complexities.
  document.getElementById("time-best").innerHTML = " Ω(N)";
  document.getElementById("time-average").innerHTML = " Θ(N<sup>2</sup>)";
  document.getElementById("time-worst").innerHTML = " O(N<sup>2</sup>)";

  // Setting Space complexity.
  document.getElementById("space-worst").innerHTML = " O(1)";

  // Setting summary.
  document.getElementById("summary").innerHTML =
    'Bubble sort is a simple sorting algorithm that repeatedly steps through a list of elements, compares adjacent elements, and swaps them if they are in the wrong order. The algorithm gets its name from the way smaller elements "bubble" to the top of the list with each iteration. ';
  document.getElementById("uses").innerHTML =
    "While bubble sort is not the most efficient sorting algorithm in terms of time complexity, it is easy to understand and implement, making it a good choice for small datasets or educational purposes. Additionally, it has some practical applications in situations where the input is almost sorted or where memory is limited, as it requires only a constant amount of additional memory space.";
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
