import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

export default class Database {
    constructor() {
        this.host = process.env.MYSQL_HOST;
        this.user = process.env.MYSQL_USER;
        this.password = process.env.MYSQL_PASSWORD;
        this.database = process.env.MYSQL_DATABASE;
    }

    static async connection() {
        return await mysql.createPool({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        });
    }
}