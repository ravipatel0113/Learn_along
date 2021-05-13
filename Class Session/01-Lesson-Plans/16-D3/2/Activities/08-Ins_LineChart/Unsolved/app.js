// Define SVG area dimensions
var svgWidth = 960;
var svgHeight = 500;

// Define the chart's margins as an object
var margin = {
  top: 60,
  right: 60,
  bottom: 60,
  left: 60
};

// Define dimensions of the chart area
var chartWidth = svgWidth - margin.left - margin.right;
var chartHeight = svgHeight - margin.top - margin.bottom;

// Select body, append SVG area to it, and set its dimensions
var svg = d3.select("body")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append a group area, then set its margins
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Configure a parseTime function which will return a new Date object from a string
var parseTime = d3.timeParse("%Y");

// Load data from forcepoints.csv
d3.csv("forcepoints.csv").then(function(forceData) {

  // Print the forceData
  console.log(forceData);

  // Format the date and cast the force value to a number

  // Configure a time scale
  // d3.extent returns the an array containing the min and max values for the property specified


  // Configure a linear scale with a range between the chartHeight and 0


  // Create two new functions passing the scales in as arguments
  // These will be used to create the chart's axes


  // Configure a line function which will plot the x and y coordinates using our scales


  // Append an SVG path and plot its points using the line function

    // The drawLine function returns the instructions for creating the line for forceData


  // Append an SVG group element to the chartGroup, create the left axis inside of it


  // Append an SVG group element to the chartGroup, create the bottom axis inside of it
  // Translate the bottom axis to the bottom of the page

}).catch(function(error) {
  console.log(error);
});
