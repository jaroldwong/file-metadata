var express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'upload/' });
var app = express();

app.use(express.static('views'));

app.get('/', function (req, res) {
    res.render('index');
});

app.post('/', upload.single('file'), function (req, res, next) {
    res.send({ size: req.file.size });
});

app.listen(3000, function() {
  console.log('File Metadata Microservice Started');
});