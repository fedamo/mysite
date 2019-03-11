import React, { Component } from "react";
import Plot from "react-plotly.js";

var trace1 = {
  x: [25, 
      70, 
      60, 
      30, 
      30, 
      40, 
      25, 
      30, 
      30, 
      40],
  y: ["R  ",
      "SQL  ",
      "Python  ",
      "JSON  ",
      "d3.js  ",
      "plotly",
      "JS  ",
      "HTML  ",
      "css  ",
      "React  " ],
      width:[0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1],
  name: "Life to Date",
  type: "bar",
  mode: "lines+markers",
  marker: { color: " #2C3E50" },
  orientation: "h",
  
};

var trace2 = {
  x: [75, 30, 40, 70, 70, 60, 75, 70, 70, 60],
  y: ["R  ",
  "SQL  ",
  "Python  ",
  "JSON  ",
  "d3.js  ",
  "plotly",
  "JS  ",
  "HTML  ",
  "css  ",
  "React  " ],
  width:[0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1,0.1],
  name: "Target",
  type: "bar",
  mode: "text",
  hoverinfo: "x",
  marker: { color: "#c2e9fb" },
  orientation: "h"
};

var trace3 = {
  x: [0, 25, 50, 75, 100],
  y: ["", "", "", "", ""],
  text: ["", "Basic", "Intermediate", "Advanced", "Expert"],
  textposition: "bottom center",
  mode: "text+markers+lines",
  hoverinfo: "x",
  marker: { color: "black" },
  showlegend: false,
  name: "Lines and Text"
};

class SkillComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [trace3, trace1, trace2],
      layout: {
        width: "100vw",
        height: "90vh",
        showline: false,
        margin: { l: 60, r: 250, b: 100, t: 0, pad: 0 },
        shapes: [
          {
            type: "line",
            x0: 0,
            y0: 0,
            x1: 0,
            y1: 0.5,
            line: {
              color: "black",
              width: 0.2
            }
          },
          {
            type: "line",
            x0: 25,
            y0: 0,
            x1: 25,
            y1: 0.5,
            line: {
              color: "black",
              width: 0.2
            }
          },
          {
            type: "line",
            x0: 50,
            y0: 0,
            x1: 50,
            y1: 0.5,
            line: {
              color: "black",
              width: 0.2
            }
          },
          {
            type: "line",
            x0: 75,
            y0: 0,
            x1: 75,
            y1: 0.5,
            line: {
              color: "black",
              width: 0.2
            }
          },
          {
            type: "line",
            x0: 100,
            y0: 0,
            x1: 100,
            y1: 0.5,
            line: {
              color: "black",
              width: 0.2
            }
          }
        ],
        xaxis: {
          showticklabels: false,
          showline: false,
          zeroline: false,
          showgrid: false
        },
        yaxis: {
          showticklabels: true,
          showgrid: false,
          tickfont: {
            family: "poppins-medium, serif",
            size: 14,
            color: "black"
          }
        },
        hoverinfo: "x",
        bargap: 0.3,
        ticks: "none",
        barmode: "stack",
        legend: { orientation: "h", x: 0.45, y: 1.08, yanchor: "top" },
        showlegend: true
      },
      divId: "Plot",
      frames: [],
      config: {}
    };
  }

  render() {
    const config = { displayModeBar: false };
    return (
      <Plot data={this.state.data} layout={this.state.layout} config={config} />
    );
  }
}
export default SkillComponents;
