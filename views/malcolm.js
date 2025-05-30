
// set the dimensions and margins of the graph
var margin = {top: 20, right: 150, bottom: 30, left: 50},
    width = 460 - margin.left - margin.right, //960
    height = 270 - margin.top - margin.bottom; //470

// array of curve functions and tites
var curveArray = [
    {"d3Curve":d3.curveLinear,"curveTitle":"curveLinear"},
    {"d3Curve":d3.curveStep,"curveTitle":"curveStep"},
    {"d3Curve":d3.curveStepBefore,"curveTitle":"curveStepBefore"},
    {"d3Curve":d3.curveStepAfter,"curveTitle":"curveStepAfter"},
    {"d3Curve":d3.curveBasis,"curveTitle":"curveBasis"},
    {"d3Curve":d3.curveCardinal,"curveTitle":"curveCardinal"},
    {"d3Curve":d3.curveMonotoneX,"curveTitle":"curveMonotoneX"},
    {"d3Curve":d3.curveCatmullRom,"curveTitle":"curveCatmullRom"}
  ];

// parse the date / time
var parseTime = d3.timeParse("%d-%b-%y");

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the line
var valueline = d3.line()
    .curve(d3.curveCatmullRomOpen)
    .x(function(d) { return x(d.date); })
    .y(function(d) { return y(d.close); });

// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#malcbody").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.csv("data2.csv").then(function(data,error) {
   if (error) throw error;

  // format the data
  data.forEach(function(d) {
      d.date = parseTime(d.date);
      d.close = +d.close;
  });

  // set the colour scale
  var color = d3.scaleOrdinal(d3.schemeCategory10);

  curveArray.forEach(function(daCurve,i) { 

    // Scale the range of the data
    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain(d3.extent(data, function(d) { return d.close; }));

    // Add the paths with different curves.
    svg.append("path")
      .datum(data)
      .attr("class", "line")
      .style("stroke", function() { // Add the colours dynamically
              return daCurve.color = color(daCurve.curveTitle); })
      .attr("id", 'tag'+i) // assign ID
      .attr("d", d3.line()
                   .curve(daCurve.d3Curve)
                   .x(function(d) { return x(d.date); })
                   .y(function(d) { return y(d.close); })
               );

    // Add the Legend
    svg.append("text")
        .attr("x", width+5)  // space legend
        .attr("y", margin.top + 20 + (i * 20))
        .attr("class", "legend")    // style the legend
        .style("fill", function() { // Add the colours dynamically
            return daCurve.color = color(daCurve.curveTitle); })
        .on("click", function(){
            // Determine if current line is visible 
            var active   = daCurve.active ? false : true,
            newOpacity = active ? 0 : 1; 
            // Hide or show the elements based on the ID
            d3.select("#tag"+i)
                .transition().duration(100) 
                .style("opacity", newOpacity); 
            // Update whether or not the elements are active
            daCurve.active = active;
            })  
        .text(daCurve.curveTitle);
  });

  // Add the scatterplot
  svg.selectAll("dot")
      .data(data)
    .enter().append("circle")
      .attr("r", 4)
      .attr("cx", function(d) { return x(d.date); })
      .attr("cy", function(d) { return y(d.close); });

  // Add the X Axis
  svg.append("g")
      .attr("class", "axis")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // Add the Y Axis
  svg.append("g")
      .attr("class", "axis")
      .call(d3.axisLeft(y));
});
