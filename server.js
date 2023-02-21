var express = require('express');
var bodyParser = require('body-parser');
app = express();
service = require('../service.js');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static("../public"));
service.attachService(app);
app.listen(4040);
console.log('Server at http://localhost:4040');