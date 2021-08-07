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
    const sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";

    con.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
    });
});

// 콘솔창에 출력 =>
// Connected
// [
//   RowDataPacket { user: 'John', favorite: 'Chocolate Heaven' },
//   RowDataPacket { user: 'Peter', favorite: 'Chocolate Heaven' },
//   RowDataPacket { user: 'Amy', favorite: 'Tasty Lemons' },
//   RowDataPacket { user: 'Hannah', favorite: 'Vanilla Dreams' },
//   RowDataPacket { user: 'Michael', favorite: 'Vanilla Dreams' }
// ]