import React, { useState } from "react";
import { getMergeSortAnimations } from "../SortingAlgorithms/mergeSort";
import "./SortingVisualizer.css";
import "../style.scss";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = "turquoise";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

var input_size = document.getElementById("a_size");
var margin_size = 0.1;
const input_generate = document.getElementById("a_generate");
const input_speed = document.getElementById("a_speed");

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      array_size: 80,
    };
  }

  componentDidMount() {
    this.updateSize();
  }

  resetArray() {
    const array = [];
    var finalArray = [];
    for (let i = 0; i < input_size.value; i++) {
      array.push(randomIntFromInterval(5, 730));
    }
    this.setState({ array: array });
  }

  updateSize = () => {
    input_size = document.getElementById("a_size");
    this.setState({ array_size: input_size.value });
    this.resetArray();
  };

  mergeSort() {
    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
  }

  heapSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
  }

  bubbleSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
  }

  render() {
    const { array } = this.state;

    return (
      <div className="array-container">
        <nav>
          <div id="array-inputs">
            <p>Array Size:</p>
            <input
              id="a_size"
              type="range"
              min={20}
              max={150}
              step={1}
              defaultValue={80}
              onInput={this.updateSize}
            ></input>
            <p>Sort Speed:</p>
            <input
              id="a_speed"
              type="range"
              min={1}
              max={5}
              step={1}
              defaultValue={4}
            ></input>
          </div>
          <ul>
            <li>
              <a href="#">Bubble Sort</a>
            </li>
            <li>
              <a href="#">Insertion Sort</a>
            </li>
            <li>
              <a href="#">Selection Sort</a>
            </li>
            <li>
              <a href="#">Merge Sort</a>
            </li>
            <li>
              <a href="#">Quick Sort</a>
            </li>
            <li>
              <a href="#">Heap Sort</a>
            </li>
            <li>
              <a onClick={() => this.resetArray()}>Generate New Array</a>
            </li>
          </ul>
        </nav>
        <div id="Info_Cont1">
          <h3>Time Complexity</h3>
        </div>
        <div id="array_container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
                width: `${100 / input_size.value - 2 * margin_size}%`,
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
