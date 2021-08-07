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

    // 주소가 S로 시작하는 레코드 모두 선택
    const sql = "SELECT * FROM customers ORDER BY name"
    con.query(sql, (err, result, fields) => { //단일 
        // con.query(sql, [values], (err, result) => { // Multuple
        if (err) throw err;
        console.log(result);
    });
});

// 콘솔에 =>  
// Connected
// [
//   RowDataPacket { name: 'Amy', address: 'Apple st 652', id: 4 },   
//   RowDataPacket { name: 'Ben', address: 'Park Lane 38', id: 12 },  
//   RowDataPacket { name: 'Betty', address: 'Green Grass 1', id: 8 },
//   RowDataPacket { name: 'Chuck', address: 'Main Road 989', id: 14 },
//   RowDataPacket { name: 'Company Inc', address: 'Highway 37', id: 1 },
//   RowDataPacket { name: 'Hannah', address: 'Mountain 21', id: 5 },
//   RowDataPacket { name: 'John', address: 'Highway 71', id: 2 },
//   RowDataPacket { name: 'Michael', address: 'Valley 345', id: 6 },
//   RowDataPacket { name: 'Michelle', address: 'Blue Village 1', id: 16 },        
//   RowDataPacket { name: 'Peter', address: 'Lowstreet 4', id: 3 },
//   RowDataPacket { name: 'Richard', address: 'Sky st 331', id: 9 },
//   RowDataPacket { name: 'Sandy', address: 'Ocean blvd 2', id: 7 },
//   RowDataPacket { name: 'Susan', address: 'One way 98', id: 10 },
//   RowDataPacket { name: 'Vicky', address: 'Yellow Garden 2', id: 11 },
//   RowDataPacket { name: 'Viola', address: 'Sideway 1633', id: 15 },
//   RowDataPacket { name: 'William', address: 'Central st 954', id: 13 }
// ]


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