function numberDisplay(ref, skew) {

	skew = skew || 0;
	var xWidth = 56,				//data dimensi ukuran per digitnya
		xHeight = 100;

	var digitPattern = [
		[1,1,1,1,1,1,0], // 0
		[0,1,1,0,0,0,0], // 1
		[1,1,0,1,1,0,1], // 2
		[1,1,1,1,0,0,1], // 3
		[0,1,1,0,0,1,1], // 4
		[1,0,1,1,0,1,1], // 5
		[1,0,1,1,1,1,1], // 6
		[1,1,1,0,0,0,0], // 7
		[1,1,1,1,1,1,1], // 8
		[1,1,1,1,0,1,1], // 9
		[0,0,0,0,0,0,0]  // empty
	];

	var segments = [
		"M10,9l4-4h28l4,4l-4,4H14L10,9z",     
		"M48,11l4,4v28l-4,4l-4-4V15L48,11z",
		"M48,51l4,4v28l-4,4l-4-4V55L48,51z",
		"M10,89l4-4h28l4,4l-4,4H14L10,89z",
		"M8,51l4,4v28l-4,4l-4-4V55L8,51z",
		"M8,11l4,4v28l-4,4l-4-4V15L8,11z",
		"M10,49l4-4h28l4,4l-4,4H14L10,49z",
	]

	var svg = d3.select(ref),
		width = svg.attr('width'),
		height = svg.attr('height');
		
	var w = (100 * width / height) | 0,    // kegunaan dari " |0  " adalaha menghasilkan bilangan bulat
		viewBox = [0, 0, w, 100],
		numDigits = (w / xWidth) | 0; //banyaknya digit mengikuti widhtnya per xwidth

	svg.attr('viewBox', viewBox.join(' '));	

	var panel = svg.append('g');//.select("g").remove().append('g')//.append('g')
	
	function titik(value){
		//console.log(value);
	var c= svg.append("g").attr("transform", "translate(" + (((w - numDigits * xWidth) / 2)+((numDigits-1)*xWidth)) + "," + (xHeight-10) + ")");	//(w-xWidth-3) + "," + (xHeight-10) + ")");
		
	c.append('circle')
		//.attr("fill","red")
		//.classed('digit', true)
		.attr("r","5")
		.attr("stroke","none")
		.attr('fill', function (){ //value>99? true:false) // /* function (value){
			if (value>9999){
				return "red";
			}else {
				return "#eee"};
		})//*/
	}

	function addDigits() {
		titik(100);//nilai=value;
		var dx = (w - numDigits * xWidth) / 2;
		var x = skew > 0 ? 2 * dx : (skew < 0) ? 0 : dx;
		for (var i = 0; i < numDigits; ++i) {
			var digit = panel.append('g')
				.attr('transform', ['translate(', x, ',0) skewX(', -skew, ')'].join(''))
				.classed('digit', true)
				.selectAll('path')
				.data(segments)
				.enter()
				.append('path')
				.attr('d', function(d, i) { return d; });

			x += xWidth;
		}
	}

	addDigits();

	function display() {
	}

	display.showNumber = function(value) {
		// titik(value);//nilai=value;
		value = Math.abs(value);
		var digits = panel.selectAll(".digit")

		digits.data(
			d3.format(numDigits + 'd')(value)
			.split('')
			.map(function(i) {
				return '0123456789 '.indexOf(i);
			}))
			.selectAll('path')
			.data(function(d, i) { return digitPattern[d]; })
			.classed('lit', function(d, i) { return d; });

		return display;
	}

	return display;
}