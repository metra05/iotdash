

function WordCloud(text, {
    size = group => group.length, // Given a grouping of words, returns the size factor for that word
    word = d => d, // Given an item of the data array, returns the word
    // marginTop = 0, // top margin, in pixels
    // marginRight = 0, // right margin, in pixels
    // marginBottom = 0, // bottom margin, in pixels
    // marginLeft = 0, // left margin, in pixels
    // width = 640, // outer width, in pixels
    // height = 400, // outer height, in pixels
    maxWords = 100,//250, // maximum number of words to extract from the text
    // fontFamily = "sans-serif", // font family
    // fontScale = 15, // base font size
    // fill = null, // text color, can be a constant or a function of the word
    // padding = 0, // amount of padding between the words (in pixels)
    // rotate = 0, // a constant or function to rotate the words
    // invalidation // when this promise resolves, stop the simulation
  } = {}) {
    const words = typeof text === "string" ? text.split(/\W+/g) : Array.from(text); //memisahkan tiap text menjadi array
    
    const data3 = d3.rollups(words, size, w => w)
      .sort(([, a], [, b]) => d3.descending(a, b))
      .slice(0, maxWords)
      .map(([key, size]) => ({text: word(key), size}));
    // console.log(data3); 
    ta=data3;
  }
//     //   var svg = d3.select("#malcbody").append("svg")
//     const svg = d3.create("svg")
//         .attr("viewBox", [0, 0, width, height])
//         .attr("width", width)
//         .attr("font-family", fontFamily)
//         .attr("text-anchor", "middle")
//         .attr("style", "max-width: 100%; height: auto; height: intrinsic;");
  
//     const g = svg.append("g").attr("transform", `translate(${marginLeft},${marginTop})`);
  
//     const cloud = d3.layout.cloud() //d3Cloud()
//         .size([width - marginLeft - marginRight, height - marginTop - marginBottom])
//         .words(data)
//         .padding(padding)
//         .rotate(rotate)
//         .font(fontFamily)
//         .fontSize(d => Math.sqrt(d.size) * fontScale)
//         .on("word", ({size, x, y, rotate, text}) => {
//           g.append("text")
//               .datum(text)
//               .attr("font-size", size)
//               .attr("fill", fill)
//               .attr("transform", `translate(${x},${y}) rotate(${rotate})`)
//               .text(text);
//         });
  
//     cloud.start();
//     invalidation && invalidation.then(() => cloud.stop());
//     return svg.node();
//   }


//   let tampil=document.getElementById('word');
//   let t = WordCloud("Bahwa sesungguhnya kemerdekaan itu ialah hak segala bangsa dan oleh sebab itu, maka penjajahan diatas dunia harus dihapuskan, karena tidak sesuai dengan perikemanusiaan dan perikeadilan. Dan perjuangan pergerakan kemerdekaan Indonesia telah sampailah kepada saat yang berbahagia dengan selamat sentosa mengantarkan rakyat Indonesia ke depan pintu gerbang kemerdekaan negara Indonesia, yang merdeka, bersatu, berdaulat, adil dan makmur. Atas berkat rahmat Allah Yang Maha Kuasa dan dengan didorongkan oleh keinginan luhur, supaya berkehidupan kebangsaan yang bebas, maka rakyat Indonesia menyatakan dengan ini kemerdekaannya. Kemudian daripada itu untuk membentuk suatu Pemerintah Negara Indonesia yang melindungi segenap bangsa Indonesia dan seluruh tumpah darah Indonesia dan untuk memajukan kesejahteraan umum, mencerdaskan kehidupan bangsa, dan ikut melaksanakan ketertiban dunia yang berdasarkan kemerdekaan, perdamaian abadi dan keadilan sosial, maka disusunlah Kemerdekaan Kebangsaan Indonesia itu dalam suatu Undang-Undang Dasar Negara Indonesia, yang terbentuk dalam suatu susunan Negara Republik Indonesia yang berkedaulatan rakyat dengan berdasar kepada : Ketuhanan Yang Maha Esa, kemanusiaan yang adil dan beradab, persatuan Indonesia, dan kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan, serta dengan mewujudkan suatu keadilan sosial bagi seluruh rakyat Indonesia. " , {
//     width: 250,
//     height: 100,
//     size: () => .3 + Math.random(),
//     rotate: () => (~~(Math.random() * 6) - 3) * 30
//   });
//   tampil.value=t[0];
// console.log(tampil.innerHTML);








/////////////////////////////////////////////////////////////////////////////////////////////////////
 var fill = d3.scaleOrdinal().range(["red", "green", "blue","yellow","orange","pink"]);//d3.scaleOrdinal(schemeCategory20);//schemeCategory20;//scaleLinear().domain([10, 130]);//scaleLinear([10, 130], [0, 960]);//scale.category20();

 let t = "Bahwa sesungguhnya kemerdekaan itu ialah hak segala bangsa dan oleh sebab itu, maka penjajahan diatas dunia harus dihapuskan, karena tidak sesuai dengan perikemanusiaan dan perikeadilan. Dan perjuangan pergerakan kemerdekaan Indonesia telah sampailah kepada saat yang berbahagia dengan selamat sentosa mengantarkan rakyat Indonesia ke depan pintu gerbang kemerdekaan negara Indonesia, yang merdeka, bersatu, berdaulat, adil dan makmur. Atas berkat rahmat Allah Yang Maha Kuasa dan dengan didorongkan oleh keinginan luhur, supaya berkehidupan kebangsaan yang bebas, maka rakyat Indonesia menyatakan dengan ini kemerdekaannya. Kemudian daripada itu untuk membentuk suatu Pemerintah Negara Indonesia yang melindungi segenap bangsa Indonesia dan seluruh tumpah darah Indonesia dan untuk memajukan kesejahteraan umum, mencerdaskan kehidupan bangsa, dan ikut melaksanakan ketertiban dunia yang berdasarkan kemerdekaan, perdamaian abadi dan keadilan sosial, maka disusunlah Kemerdekaan Kebangsaan Indonesia itu dalam suatu Undang-Undang Dasar Negara Indonesia, yang terbentuk dalam suatu susunan Negara Republik Indonesia yang berkedaulatan rakyat dengan berdasar kepada : Ketuhanan Yang Maha Esa, kemanusiaan yang adil dan beradab, persatuan Indonesia, dan kerakyatan yang dipimpin oleh hikmat kebijaksanaan dalam permusyawaratan/perwakilan, serta dengan mewujudkan suatu keadilan sosial bagi seluruh rakyat Indonesia. "; 
 let ta;
 WordCloud(t);
 const wordt = typeof t === "string" ? t.split(/\W+/g) : Array.from(t);  //ini memecah teks menjadi array
 console.log(ta);

//  const datateks = d3.rollups(words, size, w => w)
//        .sort(([, a], [, b]) => d3.descending(a, b))
//        .slice(0, maxWords)
//        .map(([key, size]) => ({text: word(key), size}));
//        console.log(datateks);


    
 //     const data = d3.rollups(words, size, w => w)
 //       .sort(([, a], [, b]) => d3.descending(a, b))
 //       .slice(0, maxWords)
 //       .map(([key, size]) => ({text: word(key), size}));

 d3.csv("sales2.csv").then (function(data) {//Array(ta).then(function(data){//csv("sales2.csv").then (function(data) {
  ta.forEach(function(d) {
    d.size = +d.size;
  });
  
  d3.layout.cloud().size([600, 600])
      .words(ta)
      .padding(5)
      .rotate(function() { return ~~(Math.random() * 2) * 90; })
      .font("Impact")
      .fontSize(function(d) { return Math.max(12, Math.min(d.size, 24)); })
      .on("end", draw)
      .start();

  function draw(word) {
    d3.select("#word").append("svg")
        .attr("width", 600)
        .attr("height", 600)
      .append("g")
        .attr("transform", "translate(300,300)")
      .selectAll("text")
        .data(ta)
      .enter().append("text")
        .style("font-size", function(d) { return d.size+2 + "px"; })
        .style("font-family", "Impact")
        .style("fill", function(d, i) { return fill(i); }) // d => data.indexOf(d.text) > -1 ? "#FE9922" : "#4F442B") //"#252525")//function(d, i) { return fill(i); })  //function(d) { data.indexOf(d.text) >-1 ? "#FE9922":"#4F442B"})//return fill(i); })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });
  }
});




////////////////////=======================================================
// d3.csv("sales.csv").then (function(data) {
//   data.forEach(function(d) {
//     d.size = +d.size;
//   });

//   var wordScale=d3.scaleLinear().domain([0,75]).range([10,120]);
//   d3.layout.cloud()
//     .size([500, 500])
//     .words(data)
//     .rotate(0)
//     .fontSize(d => wordScale(d.frequency))
//     .on("end", draw)
//     .start();
//   function draw(words) {
//     var wordG = d3.select("#word").append("g")
//       .attr("id", "wordCloudG")
//       .attr("transform","translate(250,250)");
//     wordG.selectAll("text")
//       .data(words)
//       .enter()
//       .append("text")
//       .style("font-size", d => d.size + "px")
//       .style("fill", "#4F442B")
//       .attr("text-anchor", "middle")
//       .attr("transform", d =>
//         "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")")
//       .text(d => d.text);
//   };

// });