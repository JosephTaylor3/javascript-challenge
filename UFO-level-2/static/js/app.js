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

// create empty filter list
var filterList = []

// capture button click
button.on("click", function() {

  // Select the input elements and get the raw HTML nodes
  var dateInput = d3.select("#datetime");
  var datetime = dateInput.property("value");

  var cityInput = d3.select("#cityname");
  var cityname = cityInput.property("value");
  

  var stateInput = d3.select("#statename");
  var statename = stateInput.property("value");

  var countryInput = d3.select("#countryname");
  var countryname = countryInput.property("value");

  var shapeInput = d3.select("#shapetype");
  var shapetype = shapeInput.property("value");

  // Create list of input values
  var allInputOptions = [dateValue, cityValue, stateValue, countryValue, shapeValue]

  // for loop through input values and add item to list of values to be filtered by if the value is not blank 
  for (value in allInputOptions) {
    if (value !== "") {
      filterList.append(value)
    }
  }

  // filter table data for each item in the filter list according its input value 
  for (value in filterList) {
    var filteredData = tableData.filter(sighting => sighting.value === value);
  }  
 
  // log final filtered data 
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





