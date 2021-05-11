// Create an array of each country's numbers
var us = Object.values(data.us);
var uk = Object.values(data.uk);
var canada = Object.values(data.canada);

// Create an array of music provider labels
var labels = Object.keys(data.us);

// Display the default plot
function init() {

}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {

  // Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  
}

init();
