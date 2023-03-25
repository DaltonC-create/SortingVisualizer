import React from "react";
import barUpdate from "../SortingVisualizer/SortingVisualizer.jsx";
import SortingVisualizer from "../SortingVisualizer/SortingVisualizer.jsx";

/* Possibly do like merge sort and return an animation array that I will use to
determine which bars are being looked and, swapped, and what their colors will be. */

export default function bubbleSort(array) {
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
