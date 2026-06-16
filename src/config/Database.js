import mysql from "mysql2/promise";

class Database {
    connection() {
        const connection = await mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "futbolistas"
        });
        return connection;
    }

    endConnection(connection) {
        await connection.end();
    }
}