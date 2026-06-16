import mysql from "mysql2/promise";

export default class Database {
    constructor(host, user, password, database) {
        this.host = "localhost";
        this.user = "root";
        this.password = "";
        this.database = "futbolistas";
    }

    async connection() {
        const connection = await mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        });
        return connection;
    }

    async endConnection(connection) {
        await connection.end();
    }
}