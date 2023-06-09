import React, { useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import "./SortingVisualizer.css";
import bubbleSort from "../SortingAlgorithms/bubbleSort";
import mergeSort from "../SortingAlgorithms/mergeSort";
import insertionSort from "../SortingAlgorithms/insertionSort";
import quickSort from "../SortingAlgorithms/quickSort";
import selectionSort from "../SortingAlgorithms/selectionSort";
import heapSort from "../SortingAlgorithms/heapSort";

// This is the main color of the array bars.
const PRIMARY_COLOR = "turquoise";

// Initialize variables to track input sliders.
var input_size = document.getElementById("array-size");
var input_speed = document.getElementById("array-speed");
// Default Speed.
var sortSpeed = 10000 / (Math.floor(80 / 10) * 1000);
// Incremental speed that increases as the unsorted size decreases.
var c_delay = 0;
// Help with the width of the bars.
var margin_size = 0.1;

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.updateSize();
  }

  // Initial array setup.
  initializeArray() {
    const array = [];
    for (let i = 0; i < input_size.value; i++) {
      array.push(
        Math.floor(Math.random() * 0.5 * (input_size.max - input_size.min)) + 30
      );
    }
    this.setState({ array: array });
  }

  // Update the array size.
  updateSize = () => {
    input_size = document.getElementById("array-size");
    this.initializeArray();
  };

  // Reset the array to initial state, keeping size.
  resetArray() {
    const array = [];
    for (let i = 0; i < input_size.value; i++) {
      array.push(
        Math.floor(Math.random() * 0.5 * (input_size.max - input_size.min)) + 30
      );
      const arrayBars = document.getElementsByClassName("array-bar");
      const barStyle = arrayBars[i].style;
      barStyle.backgroundColor = PRIMARY_COLOR;
    }
    // Reset all innerHTML values based on selected algorithm.
    document.getElementById("time-best").innerHTML = "";
    document.getElementById("time-average").innerHTML = "";
    document.getElementById("time-worst").innerHTML = "";
    document.getElementById("space-worst").innerHTML = "";
    document.getElementById("summary").innerHTML = "";
    document.getElementById("uses").innerHTML = "";
    this.setState({ array: array });
  }

  // Update the speed of the algorithm.
  updateSpeed = () => {
    input_speed = document.getElementById("array-speed");
    var sliderSpeed = 1000;
    switch (parseInt(input_speed.value)) {
      case 1:
        sliderSpeed = 1;
        break;
      case 2:
        sliderSpeed = 10;
        break;
      case 3:
        sliderSpeed = 100;
        break;
      case 4:
        sliderSpeed = 1000;
        break;
      case 5:
        sliderSpeed = 10000;
        break;
    }

    sortSpeed = 10000 / (Math.floor(input_size.value / 10) * sliderSpeed);
  };

  // Sorting functions.
  bubbleSort() {
    c_delay = 0;
    const animationArray = bubbleSort(this.state.array);
    this.visualizeAlg(animationArray);
  }

  insertionSort() {
    c_delay = 0;
    const animationArray = insertionSort(this.state.array);
    this.visualizeAlg(animationArray);
  }

  selectionSort() {
    c_delay = 0;
    const animationArray = selectionSort(this.state.array);
    this.visualizeAlg(animationArray);
  }

  mergeSort() {
    c_delay = 0;
    const animationArray = mergeSort(this.state.array);
    this.visualizeAlg(animationArray);
  }

  quickSort() {
    c_delay = 0;
    const animationArray = quickSort(this.state.array);
    this.visualizeAlg(animationArray);
  }

  heapSort() {
    c_delay = 0;
    const animationArray = heapSort(this.state.array);
    this.visualizeAlg(animationArray);
  }

  // Visualize the algorithm using array of animation changes.
  visualizeAlg(animationArray) {
    c_delay = 0;
    // First index is the element, second index is height, third index is color.
    for (let i = 0; i < animationArray.length; i++) {
      setTimeout(() => {
        const arrayBars = document.getElementsByClassName("array-bar");
        const [barIdx, height, color] = animationArray[i];
        // Ensure no out of bounds exceptions occur.
        if (barIdx != input_size.value) {
          const barStyle = arrayBars[barIdx].style;
          barStyle.backgroundColor = color;
          barStyle.height = `${height}%`;
        }
      }, (c_delay += sortSpeed));
    }
  }

  render() {
    const { array } = this.state;

    return (
      <div>
        <nav>
          <div id="array-inputs">
            <p>Array Size:</p>
            <input
              id="array-size"
              type="range"
              min={20}
              max={150}
              step={1}
              defaultValue={80}
              onInput={this.updateSize}
            ></input>
            <p>Sort Speed:</p>
            <input
              id="array-speed"
              type="range"
              min={1}
              max={5}
              step={1}
              defaultValue={4}
              onInput={this.updateSpeed}
            ></input>
          </div>
          <ul>
            <li>
              <a onClick={() => this.bubbleSort()}>Bubble Sort</a>
            </li>
            <li>
              <a onClick={() => this.insertionSort()}>Insertion Sort</a>
            </li>
            <li>
              <a onClick={() => this.selectionSort()}>Selection Sort</a>
            </li>
            <li>
              <a onClick={() => this.mergeSort()}>Merge Sort</a>
            </li>
            <li>
              <a onClick={() => this.quickSort()}>Quick Sort</a>
            </li>
            <li>
              <a onClick={() => this.heapSort()}>Heap Sort</a>
            </li>
            <li>
              <a onClick={() => this.resetArray()}>Generate New Array</a>
            </li>
          </ul>
        </nav>
        <section>
          <div id="time-container">
            <h3>Time Complexity</h3>
            <div className="complexity-container">
              <div className="complexity-cases">
                <p className="sub-heading">Best Case:</p>
                <p id="time-best"></p>
              </div>

              <div className="complexity-cases">
                <p className="sub-heading">Average Case:</p>
                <p id="time-average"></p>
              </div>

              <div className="complexity-cases">
                <p className="sub-heading">Worst Case:</p>
                <p id="time-worst"></p>
              </div>
            </div>
          </div>
          <div className="array-container">
            {array.map((value, idx) => (
              <div
                className="array-bar"
                key={idx}
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  height: `${value}%`,
                  width: `${100 / input_size.value - 2 * margin_size}%`,
                }}
                data-hover={value}
              ></div>
            ))}
          </div>
          <div id="space-container">
            <h3>Space Complexity</h3>
            <div className="complexity-container">
              <div className="complexity-cases">
                <p className="sub-heading">Worst Case:</p>
                <p id="space-worst"></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
