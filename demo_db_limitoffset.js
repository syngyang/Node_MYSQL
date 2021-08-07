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
    const sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
    // const sql = "SELECT * FROM customers LIMIT 2, 5";
    // LIMIT 2, 5 == LIMIT 5 OFFSET 2
    con.query(sql, (err, result, fields) => { //단일 
        if (err) throw err;
        console.log(result);
    });
});
// OFFSET 2 의미는 세번째 위치부터 시작의미, 두번째 아님.
// 콘솔에 =>  
// Connected
// [
//   RowDataPacket { name: 'Peter', address: 'Lowstreet 4', id: 3 },
//   RowDataPacket { name: 'Amy', address: 'Apple st 652', id: 4 },
//   RowDataPacket { name: 'Hannah', address: 'Mountain 21', id: 5 },
//   RowDataPacket { name: 'Michael', address: 'Canyon 123', id: 6 },
//   RowDataPacket { name: 'Sandy', address: 'Ocean blvd 2', id: 7 }
// ]

