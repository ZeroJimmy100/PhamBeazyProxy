var fs = require('fs');
var https = require('https');
var http = require('http');

// reading the JSON files as data 
var data = fs.readFileSync('input.json');
var data2 = fs.readFileSync('output.json');


// Convert data to JSON
var inputs = JSON.parse(data);
var outputs = JSON.parse(data2);

var express = require('express');

var app = express();
var app1 = express();

// To view project in html
app.set('view engine', 'ejs');

app.listen(3000);

console.log('server is starting');

// server acting as a proxy to download files

app.get('/', (req, res) => {
    const myOutputs = outputs;
    res.render('index', {myOutputs});
});

app1.get('/mydoc.docx', function (req, res) {
    const file = fs.createWriteStream("FileA1.docx");
    const request = https.get(inputs[0].Links[0], function(resp){
        resp.pipe(file);
    });
    res.download("FileA1.docx");
    console.log("Downloading file. . . " + inputs[0].Links[0]);
      

});
  
app1.listen(80);

app.get('/a1.docx', (req, res) => {
    http.get({path: '/mydoc.docx', hostname: 'localhost', port: 80}, function (resp) {
        res.setHeader('content-disposition', resp.headers['content-disposition']);
        res.setHeader('content-type', resp.headers['content-type']);
        resp.pipe(res);
      });
})

app1.get('/someoneElsedoc.txt', function (req, res) {
    const file = fs.createWriteStream("FileB1.txt");
    const request = https.get(inputs[1].Links[0], function(resp){
        resp.pipe(file);
    });
    res.download("FileB1.txt");
    console.log("Downloading file. . . " + inputs[1].Links[0]);
      
});
  
app1.listen(90);

app.get('/b1.txt', (req, res) => {
    http.get({path: '/someoneElsedoc.txt', hostname: 'localhost', port: 90}, function (resp) {
        res.setHeader('content-disposition', resp.headers['content-disposition']);
        res.setHeader('content-type', resp.headers['content-type']);
        resp.pipe(res);
      });
})

app1.get('/fooDoc.doc', function (req, res) {
    const file = fs.createWriteStream("FileC1.doc");
    const request = https.get(inputs[2].Links[0], function(resp){
        resp.pipe(file);
    });
    res.download("FileC1.doc");
    console.log("Downloading file. . . " + inputs[2].Links[0]);
      
});
  
app1.listen(100);

app.get('/c1.doc', (req, res) => {
    http.get({path: '/fooDoc.doc', hostname: 'localhost', port: 100}, function (resp) {
        res.setHeader('content-disposition', resp.headers['content-disposition']);
        res.setHeader('content-type', resp.headers['content-type']);
        resp.pipe(res);
      });
})

app1.get('/bardoc.txt', function (req, res) {
    const file = fs.createWriteStream("FileD1.txt");
    const request = https.get(inputs[3].Links[0], function(resp){
        resp.pipe(file);
    });
    res.download("FileD1.txt");
    console.log("Downloading file. . . " + inputs[3].Links[0]);
      
});
  
app1.listen(110);

app.get('/d1.txt', (req, res) => {
    http.get({path: '/bardoc.txt', hostname: 'localhost', port: 110}, function (resp) {
        res.setHeader('content-disposition', resp.headers['content-disposition']);
        res.setHeader('content-type', resp.headers['content-type']);
        resp.pipe(res);
      });
})

app1.get('/mydoc2.docx', function (req, res) {
    const file = fs.createWriteStream("FileA2.docx");
    const request = https.get(inputs[0].Links[1], function(resp){
        resp.pipe(file);
    });
    res.download("FileA2.docx");
    console.log("Downloading file. . . " + inputs[0].Links[1]);
      

});
  
app1.listen(81);

app.get('/a2.docx', (req, res) => {
    http.get({path: '/mydoc2.docx', hostname: 'localhost', port: 81}, function (resp) {
        res.setHeader('content-disposition', resp.headers['content-disposition']);
        res.setHeader('content-type', resp.headers['content-type']);
        resp.pipe(res);
      });
})

app1.get('/someoneElsedoc2.xlsx', function (req, res) {
    const file = fs.createWriteStream("FileB2.xlsx");
    const request = https.get(inputs[1].Links[1], function(resp){
        resp.pipe(file);
    });
    res.download("FileB2.xlsx");
    console.log("Downloading file. . . " + inputs[1].Links[1]);
      
});
  
app1.listen(91);

app.get('/b2.xlsx', (req, res) => {
    http.get({path: '/someoneElsedoc2.xlsx', hostname: 'localhost', port: 91}, function (resp) {
        res.setHeader('content-disposition', resp.headers['content-disposition']);
        res.setHeader('content-type', resp.headers['content-type']);
        resp.pipe(res);
      });
})

app1.get('/fooDoc2.txt', function (req, res) {
    const file = fs.createWriteStream("FileC2.txt");
    const request = https.get(inputs[2].Links[1], function(resp){
        resp.pipe(file);
    });
    res.download("FileC2.txt");
    console.log("Downloading file. . . " + inputs[2].Links[1]);
      
});
  
app1.listen(101);

app.get('/c2.txt', (req, res) => {
    http.get({path: '/fooDoc2.txt', hostname: 'localhost', port: 101}, function (resp) {
        res.setHeader('content-disposition', resp.headers['content-disposition']);
        res.setHeader('content-type', resp.headers['content-type']);
        resp.pipe(res);
      });
})

app1.get('/bardoc2.xlsx', function (req, res) {
    const file = fs.createWriteStream("FileD2.xlsx");
    const request = https.get(inputs[3].Links[1], function(resp){
        resp.pipe(file);
    });
    res.download("FileD2.xlsx");
    console.log("Downloading file. . . " + inputs[3].Links[1]);
      
});
  
app1.listen(111);

app.get('/d2.xlsx', (req, res) => {
    http.get({path: '/bardoc2.xlsx', hostname: 'localhost', port: 111}, function (resp) {
        res.setHeader('content-disposition', resp.headers['content-disposition']);
        res.setHeader('content-type', resp.headers['content-type']);
        resp.pipe(res);
      });
})

app1.get('/mydoc3.csv', function (req, res) {
    const file = fs.createWriteStream("FileA3.csv");
    const request = https.get(inputs[0].Links[2], function(resp){
        resp.pipe(file);
    });
    res.download("FileA3.csv");
    console.log("Downloading file. . . " + inputs[0].Links[2]);
      

});
  
app1.listen(82);

app.get('/a3.csv', (req, res) => {
    http.get({path: '/mydoc3.csv', hostname: 'localhost', port: 82}, function (resp) {
        res.setHeader('content-disposition', resp.headers['content-disposition']);
        res.setHeader('content-type', resp.headers['content-type']);
        resp.pipe(res);
      });
})

app1.get('/someoneElsedoc3.pdf', function (req, res) {
    const file = fs.createWriteStream("FileB3.pdf");
    const request = https.get(inputs[1].Links[2], function(resp){
        resp.pipe(file);
    });
    res.download("FileB3.pdf");
    console.log("Downloading file. . . " + inputs[1].Links[2]);
      
});
  
app1.listen(92);

app.get('/b3.pdf', (req, res) => {
    http.get({path: '/someoneElsedoc3.pdf', hostname: 'localhost', port: 92}, function (resp) {
        res.setHeader('content-disposition', resp.headers['content-disposition']);
        res.setHeader('content-type', resp.headers['content-type']);
        resp.pipe(res);
      });
})

app1.get('/fooDoc3.xls', function (req, res) {
    const file = fs.createWriteStream("FileC3.xls");
    const request = https.get(inputs[2].Links[2], function(resp){
        resp.pipe(file);
    });
    res.download("FileC3.xls");
    console.log("Downloading file. . . " + inputs[2].Links[2]);
      
});
  
app1.listen(102);

app.get('/c3.xls', (req, res) => {
    http.get({path: '/fooDoc3.xls', hostname: 'localhost', port: 102}, function (resp) {
        res.setHeader('content-disposition', resp.headers['content-disposition']);
        res.setHeader('content-type', resp.headers['content-type']);
        resp.pipe(res);
      });
})

app1.get('/bardoc3.pdf', function (req, res) {
    const file = fs.createWriteStream("FileD3.pdf");
    const request = https.get(inputs[3].Links[2], function(resp){
        resp.pipe(file);
    });
    res.download("FileD3.pdf");
    console.log("Downloading file. . . " + inputs[3].Links[2]);
      
});
  
app1.listen(112);

app.get('/d3.pdf', (req, res) => {
    http.get({path: '/bardoc3.pdf', hostname: 'localhost', port: 112}, function (resp) {
        res.setHeader('content-disposition', resp.headers['content-disposition']);
        res.setHeader('content-type', resp.headers['content-type']);
        resp.pipe(res);
      });
})

// Download Proxies END

// print input.JSON file on view
app.get('/allInputs', sendAll);

function sendAll(request, response)
{
    response.send(inputs);
}

// print output.JSON file on view
app.get('/allOutput', sendOutput);

function sendOutput(request, response)
{
    response.send(outputs);
}
