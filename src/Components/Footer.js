import React from "react";
import "../SortingVisualizer/SortingVisualizer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div id="summary-container">
        <h3>Algorithm Summary</h3>
        <p id="summary"></p>
        <br></br>
        <p id="uses"></p>
      </div>
    </footer>
  );
}
