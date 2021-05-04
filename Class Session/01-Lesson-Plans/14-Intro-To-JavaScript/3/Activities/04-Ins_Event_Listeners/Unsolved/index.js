// Getting a reference to the button on the page with the id property set to `click-me`


// Getting a reference to the input element on the page with the id property set to 'input-field'


// This function is triggered when the button is clicked
function handleClick() {
  

  // We can use d3 to see the object that dispatched the event
  
}

// We can use the `on` function in d3 to attach an event to the handler function


// You can also define the click handler inline


// Event handlers are just normal functions that can do anything you want
button.on("click", function() {
  d3.select(".giphy-me").html("<img src='https://gph.to/2Krfn0w' alt='giphy'>");
});

// Input fields can trigger a change event when new text is entered.
inputField.on("change", function() {
  var newText = d3.event.target.value;
  console.log(newText);
});
