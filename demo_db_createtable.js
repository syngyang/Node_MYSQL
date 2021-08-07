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
    const sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Table Altered");
    });
});