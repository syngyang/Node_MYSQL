const mysql = require('mysql')

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "0127",
    database: "mydb"
})

con.connect((err) => {
    if (err) throw err;
    console.log("Connected");

    // const sql = "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
    const sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255), favorite_product INT, ) ";
    const values =
        [
            { id: 1, name: 'John', favorite_product: 154 },
            { id: 2, name: 'Peter', favorite_product: 154 },
            { id: 3, name: 'Amy', favorite_product: 155 },
            { id: 4, name: 'Hannah', favorite_product: 156 },
            { id: 5, name: 'Michael', favorite_product: 156 }
        ]
    con.query(sql, [values], (err, result) => {
        if (err) throw err;
        console.log("Users Table Created");
    });
});