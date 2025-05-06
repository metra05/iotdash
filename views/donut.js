var DonutChart = function(){
    var pi = Math.PI;
    var sensorDomainArray;
    var divIdName;
    var sensorAmount;
    var sensorText = "";
    var sensorScale;
    var foreground;
    var jarum;
    var arc;
    var svg;
    var g;
    var textValue;
    var lin;

    function setSensorDomain(domainArray){
        sensorDomainArray = domainArray;
    };

    function setSvgDiv(name){
        divIdName = name;
    };

    function createChart(sensorTextNew, sensorType){
        sensorText = sensorTextNew;
        var margin = {top: 10, right: 10, bottom: 10, left: 10};
        var width = 325 - margin.left - margin.right;   //ukuran wadah(svg)
        var height = 350;
        sensorScale = d3.scaleLinear()
            .range([0, 180]);       
        arc = d3.arc()              //ukuran donut
            .innerRadius(140)
            .outerRadius(150)
            .startAngle(0);
        svg = d3.select(divIdName).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom);

        g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        l = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        g.append("text")
            .attr("text-anchor", "middle")
            .attr("font-size", "1.3em")
            .attr("y", 50)
            .text(sensorType);

        g.append("text")
            .attr("text-anchor", "middle")
            .attr("font-size", "1.3em")
            .attr("y", 25)
            .attr("x",-143)
            .text("0"+'\u00B0');
        g.append("text")
            .attr("text-anchor", "middle")
            .attr("font-size", "1.3em")
            .attr("y", 25)
            .attr("x",145)
            .text("80"+'\u00B0');

        textValue = g.append("text")
            .attr("text-anchor", "middle")
            .attr('font-size', '1em')
            .attr('y', 70)
            .text(sensorAmount + "" + sensorText);
        var background = g.append("path")
            .datum({endAngle: pi})
            .style("fill", "#ddd")
            .attr("d", arc)
            .attr("transform", "rotate(-90)")

        foreground = g.append("path")
            .datum({endAngle: 0.5 * pi})
            .style("fill", "#FE8402")
            .attr("d", arc)
            .attr("transform", "rotate(-90)");
        
        l.append('circle')
            .attr("fill","red")
            .attr("r","10");
        l.append('circle')
            .attr("fill","black")
            .attr("r","5");

        jarum = l.append("line")
            .style("stroke", "black")
            .style("stroke-width", 1)
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", -100)
            .attr("y2", 0);
        jarum2 = l.append("line")
            .style("stroke", "black")
            .style("stroke-width", 1)
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", 20)
            .attr("y2", 0);

        tickbesar=l.append("line").style("stroke", "black").style("stroke-width", 1)
            .attr("x1", -105).attr("y1", 0).attr("x2", -130).attr("y2", 0)
            .attr("transform", "rotate("+sensorDomainArray[1]*180+")"); 
        
        l.append("line").style("stroke", "black").style("stroke-width", 1)
            .attr("x1", -105).attr("y1", 0).attr("x2", -130).attr("y2", 0)
            .attr("transform", "rotate("+sensorDomainArray[1]*180+(180/5)+")"); 
        
        l.append("line").style("stroke", "black").style("stroke-width", 1)
            .attr("x1", -105).attr("y1", 0).attr("x2", -130).attr("y2", 0)
            .attr("transform", "rotate("+sensorDomainArray[1]*180+(2*180/5)+")"); 

        l.append("line").style("stroke", "black").style("stroke-width", 1)
            .attr("x1", -105).attr("y1", 0).attr("x2", -130).attr("y2", 0)
            .attr("transform", "rotate("+sensorDomainArray[1]*180+(3*180/5)+")"); 

        l.append("line").style("stroke", "black").style("stroke-width", 1)
            .attr("x1", -105).attr("y1", 0).attr("x2", -130).attr("y2", 0)
            .attr("transform", "rotate("+sensorDomainArray[1]*180+(4*180/5)+")"); 

        l.append("line").style("stroke", "black").style("stroke-width", 1)
            .attr("x1", -105).attr("y1", 0).attr("x2", -130).attr("y2", 0)
            .attr("transform", "rotate("+sensorDomainArray[1]*180+(5*180/5)+")"); 
        
        tickkecil=l.append("line").style("stroke", "black").style("stroke-width", 1)
            .attr("x1", -120).attr("y1", 0).attr("x2", -130).attr("y2", 0)
            .attr("transform", "rotate("+sensorDomainArray[1]*180+")"); 
        
        l.append("line").style("stroke", "black").style("stroke-width", 1)
            .attr("x1", -120).attr("y1", 0).attr("x2", -130).attr("y2", 0)
            .attr("transform", "rotate("+sensorDomainArray[1]*180+(180/10)+")");     

        l.append("line").style("stroke", "black").style("stroke-width", 1)
            .attr("x1", -120).attr("y1", 0).attr("x2", -130).attr("y2", 0)
            .attr("transform", "rotate("+sensorDomainArray[1]*180+(3*180/10)+")"); 
        
            l.append("line").style("stroke", "black").style("stroke-width", 1)
            .attr("x1", -120).attr("y1", 0).attr("x2", -130).attr("y2", 0)
            .attr("transform", "rotate("+sensorDomainArray[1]*180+(5*180/10)+")"); 

        l.append("line").style("stroke", "black").style("stroke-width", 1)
            .attr("x1", -120).attr("y1", 0).attr("x2", -130).attr("y2", 0)
            .attr("transform", "rotate("+sensorDomainArray[1]*180+(7*180/10)+")"); 

        l.append("line").style("stroke", "black").style("stroke-width", 1)
            .attr("x1", -120).attr("y1", 0).attr("x2", -130).attr("y2", 0)
            .attr("transform", "rotate("+sensorDomainArray[1]*180+(9*180/10)+")"); 


    }

    function drawTick(l,sens){
        for(let i=0;i>10;i++){
            l.append("line")
                    .style("stroke", "black")
                    .style("stroke-width", 1)
                    .attr("x1", -105)
                    .attr("y1", 0)
                    .attr("x2", -130)
                    .attr("y2", 0)
                    .attr("transform", "rotate("+sens[1]*180+(i*180/5)+")"); 
        }
    };

    function updateChart(newSensorValue){
        sensorScale.domain(sensorDomainArray);
        var sensorValue = sensorScale(newSensorValue);
        sensorValue = sensorValue/180;
        textValue.text(newSensorValue + "" + sensorText);
        //console.log(sensorValue*pi);
        foreground.transition()
            .duration(750)
            .attrTween("d", arcAnimation(sensorValue * pi));
        
        jarum.transition()
            .duration(750)
            .attr("transform", "rotate("+sensorValue*180+")"); //${sensorValue*pi})`);   .attr("transform", "rotate(40)")
            // .attr('transform', 'rotate(0)')
            // .transition() //And rotate back again
            // .duration(2500)
            // .attr('transform' , 'rotate(90) ')
            // .on("start", repeat);
        //     .attrTween("d", jarumAnimation(sensorValue * pi));
        jarum2.transition()
            .duration(750)
            .attr("transform", "rotate("+sensorValue*180+")");
    }

    function arcAnimation(newAngle){
        return function(d) {
            var interpolate = d3.interpolate(d.endAngle, newAngle);
            return function(t) {
                d.endAngle = interpolate(t);
                return arc(d);
            };
        };
    }

    // function jarumAnimation(newAngle){
    //     return function(d) {
    //         var interpolate = d3.interpolate(d.endAngle, newAngle);
    //         return function(t) {
    //             d.endAngle = interpolate(t);
    //             return rotate(d);
    //         };
    //     };
    // }

        return{
            setSensorDomain: setSensorDomain,
            setSvgDiv: setSvgDiv,
            createChart:createChart,
            updateChart: updateChart
        }
 
};
        
        
    