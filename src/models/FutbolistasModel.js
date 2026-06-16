import db from "../config/Database.js";

class FutbolistasModel {
    constructor(database, connection) {
        this.database = new db();
        this.connection = this.database.connection();
    }

    async getAllFutbolistas() {
        try {
            const sql = "SELECT * FROM `futbolistas` ORDER BY `id` DESC";
            const values = [];
            const [rows, fields] = await this.connection.execute(sql);
            console.log(JSON.stringify(rows));
        } catch (err) {
            console.log("Error al obtener futbolistas: " + err);
        }
    }
}

const classTest = new FutbolistasModel();
classTest.getAllFutbolistas();