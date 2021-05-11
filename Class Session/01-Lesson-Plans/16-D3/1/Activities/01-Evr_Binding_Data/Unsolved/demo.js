
// 1-.each()


// 2-.data()
// Access elements' data
// returns an array of undefined items


// Assign data to elements in the selector object
// not enough
var arr = [50, 55];


// just right
var arr = [50, 55, 53];


// too many
var arr = [50, 55, 53, 56, 68];


// trying to reassign with not enough
var arr = [1, 2];



// 3-Multiple Methods



// Modify the returned data

// 4-.enter()
// New data points are ignored here
var arr = [50, 55, 53, 56, 68];



// append affects existing elements = FAIL!
var arr = [50, 55, 53, 56, 68];

// Use `enter` to create new elements
var arr = [50, 55, 53, 56, 68];
// First, update existing elements

// Second, create new elements for extra data points

// 5-.exit()
// Finally, what if we remove an item?
var arr = [50, 55];
