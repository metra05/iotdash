
function coba(){
    var xhr = new XMLHttpRequest(); 
    const url ='http://localhost:3000/nyalah2'
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.response +`  respon sewrver:`+ this.status);
            document.getElementById("jam").innerHTML = this.responseText;
        }
    };
    xhr.open("GET", '/nyalah2', true);
    xhr.send();
};

setInterval(coba, 500);  //perhatikan inisiasi perintah function didalam interval tidak pakai kurung agar langsung dijalankan


function kepencet(){
    //console.log('tes.....');

    //mengunakan ajax untuk komunikasi dengan server, server akan merespon togle led gpio21
    var xhr = new XMLHttpRequest(); 
    const url ='http://localhost:3000/nyalah'
    //xhr.setRequestHeader("Content-Type", "text/xml");
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.response +`  respon sewrver:`+ this.status);
            document.getElementById("status").innerHTML = this.responseText;
        }
    };
    xhr.open("GET", '/nyalah', true);
    xhr.send();

};


//ini bagian socket io
var socket = io(); 
var hitung = document.getElementById('hitung'); 

var button = document.getElementById('clicked'); 
button.onclick = function(e){ 
    socket.emit('clicked message', 'clicked'); 
    //coba();
} 

socket.on('hitung', function(msg){
    document.getElementById('hitung').innerHTML = msg; 
    //console.log(msg);
});

socket.on('clicked message', function(msg){
    document.getElementById('updates').innerHTML = msg; 
});

socket.on('acak', function(msg){
    console.log(msg);
    document.getElementById('gempa').innerHTML = msg.Infogempa.gempa.Wilayah; 
});

//ini tidak perlu interval lagi..... perubahan mengikuti chanel hitung yang berubah diemet oleh server
function hit(){
    //console.log(hitung)
    socket.on('hitung', function(msg){
        document.getElementById('hitung').innerHTML = msg; 
        //console.log(msg);
    });

}

//setInterval(hit(), 1000);








//============================================ini donut=========================

//let data2=()=>{Math.floor(Math.random() * 80) + 1};//{angkaacak:23};
function data2()  {
//    let acak=Math.floor(Math.random() * 80) + 1;
    return (Math.floor(Math.random() * 80) + 1);//acak);
}

(

 function(){

    let data={};
    data={temp:{current:0,high:0,low:100}};

        var temperature = new DonutChart();
        temperature.setSensorDomain([0,80]);
        temperature.setSvgDiv('#donut1');
        temperature.createChart('\u00B0'+"c", "temp");

        function waktu() {setInterval(() => {
                data.temp.current=data2();//.angkaacak;//data.temp.current+5
                temperature.updateChart(data.temp.current);
                // console.log(data);
                if (data.temp.current>=80){
                    data.temp.current=0;
                };
            }, 1500);
        }
        waktu();

})();



//===================tes tesan========================================

function getData() {
	let data = [];
	let numItems = Math.ceil(Math.random() * 8);

	for(let i=0; i<numItems; i++) {
		data.push(Math.random() * 60);
	}

	return data;
}

function update(data) {
	d3.select('.chart')
		.selectAll('circle')
		.data(data)
		.join('circle')
		.attr('cx', function(d, i) {
			return ((i+1) * 100);
		})
		.attr('cy', 50)
		.attr('r', function(d) {
			return 0.5 * d;
		})
		.style('fill', function(d) {
			return d > 30 ? 'orange' : '#eee';
		});
}

function updateAll() {
	let myData = getData();
	update(myData);
}

updateAll();

d3.select("#butUpdate")
	.on("click", updateAll);

// =================================================================================
var lineGenerator = d3.line();

var betas = [0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1];

var points = [[0, 80],  [200, 60], [300, 40], [600, 0], [900,0], [1200,0]]; //[0, 100], [400, 80], [600, 0], [900,0], [1200,0]];// [200, 60], [300, 0], [600, 0], [900,0], [1200,0]];

function garisSlice(reff){
d3.select(reff)//'#gbat')
    .classed('gSlice', true)   ////tambahkan class untuk mendpatkan style fill none dan warna stroke
	.selectAll('path')
	.data(betas)
	.join('path')
	.attr('d', function(d) {
		var bundleCurve = d3.curveBundle.beta(d);
		lineGenerator.curve(bundleCurve);
		return lineGenerator(points);
	})
    
	.style('opacity', function(d, i) {
		return i * 0.08;
	});
    
}
garisSlice('#gbat');
garisSlice('#gbat2');


//=============================sevensegment=========================

d3.select(window).on('load', function() {
	
	var display = numberDisplay('#seven', 10).showNumber(0);
    
	d3.select('#number').on('input', function() {
        //d3.select("#seven").remove('svg').insert(() => display.showNumber(this.value));
		display.showNumber(this.value);
	})


    // =================ini jam======================
    function titik2(reff){
        var svg = d3.select(reff+' .titik2s');
		//  width = svg.attr('width'),
		//  height = svg.attr('height');

        svg.append('g').attr("transform", "translate(" + 50 + "," + 40 + ")")	//(w-xWidth-3) + "," + (xHei
		//.classed('digit', true)
        .append('circle')
        // .attr("fill","#eee") //setInterval(warna="#eee"?"#f44":"#eee",1000))"
		.attr("r","10")
		.attr("stroke","none")

        svg.append('circle').attr("transform", "translate(" + 50 + "," + 100 + ")")	
        // .attr("fill","#eee")
		.attr("r","10")
		.attr("stroke","none")

        
        //setInterval(()=>{
        function kedip(reff){   
            svg.classed('titikNya',function(){
                if(reff===true ){
                    return ('true');
                }else{
                    return ('false');
                }})
            }
        //},500)
       
    }
   
      titik2('#titik2j');
      titik2('#titik2m');
      
    //    var t = document.getElementById("#titik2j");
    let i=0;
    var atas = document.getElementById("titik2j");
    var bawah = document.getElementById("titik2m");
    
    atas.classList.add("titikNya2");    //ini untuk menghapus warna hitam saat kedip
    bawah.classList.add("titikNya2");

    setInterval(() => {
        atas.classList.toggle("titikNya");
        bawah.classList.toggle("titikNya");
    }, 500);


    var Jam = numberDisplay('#jam2', 10).showNumber(0); //id jam sudah ada yang memakai makanya memakai id jam 2 chek di area sekitar penggunaan ajax......
    var Menit = numberDisplay('#menit', 10).showNumber(0);
    var Detik = numberDisplay('#detik', 10).showNumber(0);

    function bacaJam(){
        const d = new Date();
        let detik = d.getSeconds(); //ini tidak dikirim
        let menit = d.getMinutes();
        let jam = d.getHours();
        // let tahun = d.getFullYear();
        // let bulan = 1 + d.getMonth();
        // let tanggal = d.getDate();
        // let hari = d.getDay();
        Jam.showNumber(jam);
        Menit.showNumber(menit);
        Detik.showNumber(detik);
        
    };
    setInterval(bacaJam, 1000);
    
    

})

//==============================jam seven segment
// d3.select(window).on('load', function() {
	//ini gak berhasil
	
	
// 	// d3.select('#number').on('input', function() {
// 	// 	display.showNumber(this.value);
// 	// })
// })





// var myData = [40, 10, 20, 60,70,90];

// d3.select('#tutor')
//   .selectAll('circle')
//   .data(myData)
//   .join('circle')
//   .attr('cx', function(d, i) {
//     return i * 100+20;
//   })
//   .attr('cy', 50)
//   .attr('r', function(d) {
//     return 0.5 * d;
//   })
//   .style('fill', 'orange');


//   let but = false;
//   d3.selectAll('circle')
//   .each(function(d, i) {
//     //d3.on('click', function(e, d) {
//     var odd = i % 2 === 1;

//     d3.select(this)
//       .style('fill', odd ? 'orange' : '#ddd')
  
  
 
//     // if (e.style.fill=="blue"){
//     //     d3.select(this)
//     //     .style('fill', 'orange');
//     // }
//     if (but===false) {
//         but = true;
//     }

//   })


//   ;