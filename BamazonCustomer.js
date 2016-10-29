var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "", //Your password
    database: "Bamazon"
})

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
})

connection.query('SELECT * FROM Products', function(err, response) {

    //console.log(response)
    for (var i = 0; i < response.length; i++) {
        console.log(response[i].ItemID + " | " + response[i].ProductName + " | " + "Price: $" +response[i].Price);
    }
    console.log("-----------------------------------");
})