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

    const sql = "DELETE FROM customers WHERE address LIKE 'Cen%'"
    con.query(sql, (err, result, fields) => { //단일 
        // con.query(sql, [values], (err, result) => { // Multuple
        if (err) throw err;
        console.log(`Number of records deleted: ${result.affectedRows}`);
    });
});

// 콘솔에 =>  
// Connected
// Number of records deleted: 1
// 지워진 것:   RowDataPacket { name: 'William', address: 'Central st 954', id: 13 }



// The result object contains information about how the query affected the table.
// The result object returned from the example above looks like this:
// {  
//     fieldCount: 0,
//     affectedRows: 14,
//     insertId: 0,
//     serverStatus: 2,
//     warningCount: 0,
//     message: '\'Records:14  Duplicated: 0  Warnings: 0',
//     protocol41: true,
//     changedRows: 0
//   }