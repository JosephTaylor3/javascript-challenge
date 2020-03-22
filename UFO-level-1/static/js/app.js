// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Funtion for building out table from data 
data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Create variable for the 'Filter Table' button
var button = d3.select("#filter-btn");

// create function for button click event 
button.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node -- filter by datetime
  var dateInput = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = dateInput.property("value");

  console.log(inputValue);
  console.log(tableData);

  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);

  console.log(filteredData);

  // remove existing table rows to prevent duplicating data
  d3.select("tbody").selectAll("tr").remove(); 

  // Funtion for building out new table from filtered data 
  filteredData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
})





