// // // from data.js
var tableData = data;


// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);


function printSightings(tableData){
    tableData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          row.append("td").text(value);
        });
        
      });
}



  var submit = d3.select("#filter-btn");

  submit.on("click", function() {
  
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    console.log(tableData);

    
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    printSightings(filteredData);
    filteredData.length = [];

    // clear the input value
   // d3.select("#datetime").node().value = "";
 });









