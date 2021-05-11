// Dataset we will be using to set the height of our rectangles.
var booksReadThisYear = [17, 23, 20, 34];

// Setting the dimensions for the SVG container
var svgHeight = 600;
var svgWidth = 400;

var svg = d3
  .select("#svg-area")
  .append("svg")
  .attr("height", svgHeight)
  .attr("width", svgWidth);

// svgGroup now refers to the `g` (group) element appended.
// The SVG group would normally be aligned to the top left edge of the chart.
// Now it is offset to the right and down using the transform attribute
var svgGroup = svg.append("g");

// Selects all rectangles currently on the page - which is none - and binds our dataset to them. If there are no rectangles, it will append one for each piece of data.
