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
    // const sql = "ALTER TABLE customers ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
    // const sql = "INSERT INTO customers (name, address) VALUES('Company Inc', 'Highway 37')";
    // const sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";

    const name = 'Amy';
    const adr = 'Mountain 21';
    const sql = "SELECT * FROM customers WHERE name = ? OR address = ?"
    con.query(sql, [name, adr], (err, result, fields) => { //단일 
        // con.query(sql, [values], (err, result) => { // Multuple
        if (err) throw err;
        console.log(result);
    });
});

// 콘솔에 =>
/*
Connected
[
  RowDataPacket { name: 'Amy', address: 'Apple st 652', id: 4 },
  RowDataPacket { name: 'Hannah', address: 'Mountain 21', id: 5 }
]
*/

// {  // The result object returned from the example above looks like this:
//     fieldCount: 0,
//     affectedRows: 14,
//     insertId: 0,
//     serverStatus: 2,
//     warningCount: 0,
//     message: '\'Records:14  Duplicated: 0  Warnings: 0',
//     protocol41: true,
//     changedRows: 0
//   }        
