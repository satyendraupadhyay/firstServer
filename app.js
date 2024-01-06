const http = require('http');
const fs = require('fs');
const { buffer } = require('stream/consumers');
const { text } = require('stream/consumers');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    const url = req.url;
    const method = req.method;
    const body = [];
    if (url === '/') {
        fs.readFile("message.txt", {encoding: "utf-8"}, (err, data) => {
            if(err) {
                console.log(err);
            }
        console.log(`data from file` + data);
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write(`<body>${data}</body>`)
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send<button></form></body>');
        res.write('</html>');
        return res.end();
        })
        
    } else if (url === '/message' && method === 'POST') {
        
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt',message, () => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        })
    } else {
        res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Node.js Project</title></head>');
    res.write('<body><h1>Welcome to my Node.js project</h1></body>');
    res.write('</html>');
    res.end();

    }

    
   
});

server.listen(3000);



// const url = req.url;
// if (url === '/home') {
    // res.write('<html>');
    // res.write('<head><title>Home</title></head>');
    // res.write('<body><h1>Welcome home</h1></body>');
    // res.write('</html>');
    // res.end();
// } else if (url === '/about') {
//     res.write('<html>');
//     res.write('<head><title>About Us</title></head>');
//     res.write('<body><h1>Welcome to About Us page</h1></body>');
//     res.write('</html>');
//     res.end();
// } else if (url === '/node') {
    // res.write('<html>');
    // res.write('<head><title>Node.js Project</title></head>');
    // res.write('<body><h1>Welcome to my Node.js project</h1></body>');
    // res.write('</html>');
    // res.end();
// } else {
//     res.write('<html>');
//     res.write('<head><title>Default Page</title></head>');
//     res.write('<body><h1>Hello from nodejs server</h1></body>');
//     res.write('</html>');
//     res.end();
// }
