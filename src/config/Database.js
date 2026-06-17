import mysql from "mysql2/promise";

export default class Database {
    constructor() {
        this.host = "localhost";
        this.user = "root";
        this.password = "";
        this.database = "futbolistas";
    }

    async connection() {
        return await mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        });
    }

    async endConnection(connection) {
        await connection.end();
    }
}