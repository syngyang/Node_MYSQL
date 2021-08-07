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
    //const sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    // const sql = "INSERT INTO customers (name, address) VALUES('Company Inc', 'Highway 37')";
    const sql = "INSERT INTO users (id, name, favorite_product) VALUES ?";
    const values = [
        [1, 'John', 154],
        [2, 'Peter', 154],
        [3, 'Amy', 155],
        [4, 'Hannah', 156],
        [5, 'Michael', 156]
    ]

    //con.query(sql,(err, result) => { //단일 
    con.query(sql, [values], (err, result) => { // Multuple
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
    });
});

// 콘솔창에 출력 =>
// Connected
// Number of records inserted: 5