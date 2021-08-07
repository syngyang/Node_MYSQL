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
    // const sql = "CREATE DATABASE mydb"; //한번
    con.query(sql, (err, result) => {
        if (err) throw err;
        // console.log("Database created") // 한번
        console.log("Result: " + result);
    });
});