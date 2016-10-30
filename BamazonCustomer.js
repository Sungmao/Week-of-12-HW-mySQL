var mysql = require('mysql');
var inquirer = require('inquirer')

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
    displayProduct();
})

function displayProduct() {

    connection.query('SELECT * FROM Products', function(err, response) {

        //console.log(response)
        for (var i = 0; i < response.length; i++) {
            console.log(response[i].ItemID + " | " + response[i].ProductName + " | " + "Price: $" + " | " + response[i].Price+"Stock Qt: " + response[i].StockQuantity);
        }
        console.log("-----------------------------------");
        customer(response);
    })



}

function customer(response) {

    inquirer.prompt({
        name: "productIdChosen",
        type: "input",
        message: "Which product you would like to buy? Please Input the Item ID. Thank you."

    }).then(function(result){
        //console.log(result)

        for(var i=0;i<response.length;i++){

            if(response[i].ItemID==result.productIdChosen){
                console.log(response[i].ProductName)
                var id = i
                var productID = response[i].ItemID

                inquirer.prompt({
                    name: "number",
                    type: "input",
                    message: "How many units do you want?"
                }).then(function(res){
                    //console.log(id)
                    //console.log(res)
                    if((response[id].StockQuantity-res.number)>0){
                        //console.log(response[id].StockQuantity)
                        newNum = response[id].StockQuantity - res.number;
                        connection.query("UPDATE products SET ? WHERE ?",[{StockQuantity: newNum}, {ItemID: productID}], function(err, response2){
                            console.log("Your Order placed!!")

                        })



                    }

                })


            }

        }



    })


}