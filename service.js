function greetings(req, res){
    var greetName = req.query.firstname;
    res.send('Greetings,'+' '+ greetName);
}

function add(req, res){
    var n1 = req.body.num1;
    var n2 = req.body.num2;
    var sum = parseFloat(n1) + parseFloat(n2);
    res.send(n1 + ' + '+ n2 + ' = '+ sum);
}

function attachService(app){
    app.get('/svc/greetings', greetings);
    app.post('/svc/add', add);
}

exports.attachService = attachService;