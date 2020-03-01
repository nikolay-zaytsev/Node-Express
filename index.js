const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes', dishRouter);



// app.get('/dishes/:dishId', (req,res,next) =>{
//     res.end('Will send details of the dish: '
//         + req.params.dishId + ' to you!');
// });

// app.post('/dishes/:dishId', (req,res,next) => {
//     res.statusCode = 403;
//     res.end('POST operation not supported on /dishes'
//         + req.params.dishId);
// });

// app.put('/dishes/:dishId', (req,res,next) => {
// res.write('Updating the dish: ' + req.params.dishId + '/n');
// res.end('Will update the dish: ' + req.body.name +
//     ' with details: ' + req.body.description);
// });

// app.delete('/dishes/:dishId', (req,res,next) => {
//     res.end('Deleting dish: ' + req.params.dishId);
// });

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

const server = http.createServer(app);
    // if (req.method == 'GET') {
    //     var fileUrl;
    //     if (req.url == '/') fileUrl = '/index.html';
    //     else fileUrl = req.url;

    //     var filePath = path.resolve('./public'+fileUrl);
    //     const fileExt = path.extname(filePath);
    //     if (fileExt == '.html') {
    //         fs.exists(filePath, (exists) => {
    //             if (!exists) {
    //                 res.statusCode = 404;
    //                 res.setHeader('Content-Type', 'text/html');
    //                 res.end('<html><body><h1>Error 404: ' + fileUrl +
    //                 ' not found</h1></body></html>');
    //             }
    //             res.statusCode = 200;
    //             res.setHeader('Content-Type', 'text/html');
    //             fs.createReadStream(filePath).pipe(res);
    //         });
    //     }
    //     else {
    //         res.statusCode = 404;
    //         res.setHeader('Content-Type', 'text/html');
    //         res.end('<html><body><h1>Error 404: ' + fileUrl +
    //         ' not an HTML file</h1></body></html>');

    //     }

    // }
    // else {
    //     res.statusCode = 404;
    //     res.setHeader('Content-Type', 'text/html');
    //     res.end('<html><body><h1>Error 404: ' + req.method +
    //     ' not supported</h1></body></html>');
    //     return;
    // }


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});
