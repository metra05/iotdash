const express = require ("express");
const app = express();
const port= 3000;

var http = require('http')
var server= http.createServer(app)
var io = require('socket.io')(server);

/*
////////////////////////////////////////////////////////////////////////////////
///int LEDs[] = {18,27,22,23,24,25,8,7,10,9,11,5,6,13,19,26,21}; //ingat gunakan pin yang sama dengan bmc 
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED1 = new Gpio(18, 'out'); //use GPIO pin 4, and specify that it is output //gpio ini mengikuti bcm
var LED2 = new Gpio(27, 'out');
var LED3 = new Gpio(22, 'out');
var LED4 = new Gpio(23, 'out');
var LED5 = new Gpio(24, 'out');
var LED6 = new Gpio(25, 'out');

var ledtombol= new Gpio(21,'out');
var ledtombol2= new Gpio(26,'out');
var ledtombol3= new Gpio(19,'out');
var ledtombol4= new Gpio(13,'out');



var blinkInterval = setInterval(blinkLED, 250); //run the blinkLED function every 250ms
let hitung=0;
//const tom = document.getElementById(tombol);
function blinkLED() { //function to start blinking
  if (LED1.readSync() === 0) { //check the pin state, if the state is 0 (or off)
    LED1.writeSync(1); //set pin state to 1 (turn LED on)
    LED2.writeSync(1);
    LED3.writeSync(1);
    
    LED4.writeSync(0);
    LED5.writeSync(0);
    LED6.writeSync(0);
    
    hitung = hitung+1;
    console.log(hitung);
  } else {
    LED1.writeSync(0); //set pin state to 0 (turn LED off)
    LED2.writeSync(0);
    LED3.writeSync(0);

    LED4.writeSync(1);
    LED5.writeSync(1);
    LED6.writeSync(1);
    
  }
}

function endBlink() { //function to stop blinking
  clearInterval(blinkInterval); // Stop blink intervals
  LED1.writeSync(0); // Turn LED off
  LED2.writeSync(0);
  LED3.writeSync(0);
  LED4.writeSync(0);
  LED5.writeSync(0);
  LED6.writeSync(0);

  LED1.unexport(); // Unexport GPIO to free resources
  LED2.unexport();
  LED3.unexport();
  LED4.unexport();
  LED5.unexport();
  LED6.unexport();
}
*/
//blinkLED();
//setTimeout(endBlink, 15000); //stop blinking after 15 seconds

// function tekan(){   //menampilkan dari frontend perintah klik menyalahkan led bukan begini caranya
//   blinkLED()        //bedakan anatara jsvascript untuk frontend dan untuk servernya
// };

/*
//led tombol
function ledTombol(){
  if (ledtombol.readSync() === 0) {
    ledtombol.writeSync(1);
    ledtombol2.writeSync(1);
    ledtombol3.writeSync(1);
    ledtombol4.writeSync(1);
    return('led mati');
  }else{
    ledtombol.writeSync(0);
    ledtombol2.writeSync(0);
    ledtombol3.writeSync(0);
    ledtombol4.writeSync(0);
    return('led nyalah');
  }
}
*/
let hitung=0;

function ledTombol2(){
  hitung=hitung+1;
  console.log(hitung);
  return(`${hitung}`);
};

var hitunginterval = setInterval(ledTombol2,500); //() => { }, 1000);

////////////////////////////////////////////////////////////////////////////////
//iki tes tesan
//console.log(fetch ('https://regres.in/api/users')); // fetch hanya berlaku untuk nodejs versi 18> gunakan require http
const https = require('https')
const url = "https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json";//"https://jsonmock.hackerrank.com/api/movies";
let gempa;
function gemp(){
  https.get(url, res => {
    let data = '';
    res.on('data', chunk => {
      data += chunk;
    });
    res.on('end', () => {
      data = JSON.parse(data);
      console.log(data);
      gempa=data;
    });
  }).on('error', err => {
    console.log(err.message);
    gempa={"Infogempa":{"gempa":{"Wilayah":"data tidak diperoleh / error"}}};
  });

};
gemp();
setInterval(gemp,1500000);

////////////////////////////////////////////////////


//ini punyanya socket io

var buttonValue = 0; 
io.on('connection', function(socket){ 
  console.log('Connection to client established'); 

  io.emit('acak', gempa); //mengirim info gempa bmkg

  io.emit('clicked message', buttonValue);
  
  setInterval(() => {
    socket.emit('hitung',hitung);
  }, 800); 
  
  socket.on('clicked message', function(msg){ 
    buttonValue = 1 - buttonValue; 
    io.emit('clicked message', buttonValue); 
    console.log('Received message from client!',msg); }); 

  socket.on('disconnect',function(){ 
    console.log('Server has disconnected'); }); 

});

////////////////////////////////////////////////////




//menggunakan frontend utils sperti script, css agar bisa digunakan file index.ejs
app.use(express.static('./views/'));
//menggunakan ejs
app.set('view engine', 'ejs');  //kalau tidak ada ini file index.ejs tidak dapat menemukan file scriptnya(script.js)

app.get('/',(req,res)=>{
  //res.send(`menghitung sebanyak : ${hitung}`);
  //res.sendFile('./index/index.html',{root: __dirname})
  res.render('index',{hitung}); //variable htiung dimasukkan agar ditangkap ejes di file index.ejs
});

app.get('/nyalah',(req,res)=>{
  //console.log(`kirim: ${hitung}`);
  let statusled = ledTombol();
  res.send(statusled,200);
});

app.get('/nyalah2',(req,res)=>{
  //console.log(`kirim: ${hitung}`);
  let statusled2 = ledTombol2();//coba pakai arrow gak berhasil
  // let statusled2 =()=>{
  //   return(`${hitung}`)
  // }
  res.send(statusled2,200);
});


// ingat server butuh mendengarkan http dan io juga
server.listen(port, ()=>{  
  console.log(`web server berjalan di http://localhost:${port}`);
})


/*
{
  Infogempa: {
    gempa: {
      Tanggal: '19 Des 2024',
      Jam: '17:51:32 WIB',
      DateTime: '2024-12-19T10:51:32+00:00',
      Coordinates: '-6.24,130.34',
      Lintang: '6.24 LS',
      Bujur: '130.34 BT',
      Magnitude: '5.1',
      Kedalaman: '141 km',
      Wilayah: '220 km BaratLaut TANIMBAR',
      Potensi: 'Tidak berpotensi tsunami',
      Dirasakan: '-',
      Shakemap: '20241219175417.mmi.jpg'
    }
  }
}
  */