var http = require('http');
var fs = require('fs');

var index = fs.readFileSync('index.html');


var SerialPort = require("serialport");
const { emit, argv } = require('process');

const parsers = SerialPort.parsers;
const parser = new parsers.Readline({
    delimiter: '\n'
});


var port = new SerialPort('COM3',{
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

port.pipe(parser);

var app = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end(index);
});

var io = require('socket.io').listen(app);

io.on('connection', function(data){
    console.log('Node.js is Listening');
});

function tryParseJson (str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return JSON.parse(str);
}

parser.on('data',function(data){

    const sensorData = tryParseJson(data);
		
    var av;
    var notav;
        
        var s1 = sensorData.sensor1;
        var s2 = sensorData.sensor2;
        var s3 = sensorData.sensor3;
        var s4 = sensorData.sensor4;
        var s5 = sensorData.sensor5;
        var s6 = sensorData.sensor6;
        var s7 = sensorData.sensor7;
        var s8 = sensorData.sensor8;

        if(s1 == 1){
            av="Available";
            console.log(av);
            io.emit('data1',av);
        }else{
            notav="Unavailable";
            console.error(notav);
            io.emit('data1',notav);
        }

        if(s2 == 1){
            av = "Available";
            console.log(av);
            io.emit('data2',av);
        }else{
            notav = "Unavailable";
            console.log(notav);
            io.emit('data2',notav);
        }

        if(s3 == 1){
            av = "Available";
            console.log(av);
            io.emit('data3',av);
        }else{
            notav = "Unavailable";
            console.log(notav);
            io.emit('data3',notav);
        }

        if(s4 == 1){
            av = "Available";
            console.log(av);
            io.emit('data4',av);
        }else{
            notav = "Unavailable";
            console.log(notav);
            io.emit('data4',notav);
        }

        if(s5 == 1){
            av = "Available";
            console.log(av);
            io.emit('data5',av);
        }else{
            notav = "Unavailable";
            console.log(notav);
            io.emit('data5',notav);
        }

        if(s6 == 1){
            av = "Available";
            console.log(av);
            io.emit('data6',av);
        }else{
            notav = "Unavailable";
            console.log(notav);
            io.emit('data6',notav);
        }

        if(s7 == 1){
            av = "Available";
            console.log(av);
            io.emit('data7',av);
        }else{
            notav = "Unavailable";
            console.log(notav);
            io.emit('data7',notav);
        }

        if(s8 == 1){
            av = "Available";
            console.log(av);
            io.emit('data8',av);
        }else{
            notav = "Unavailable";
            console.log(notav);
            io.emit('data8',notav);
        }

});

app.listen(3000);
