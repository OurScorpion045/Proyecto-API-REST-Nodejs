import db from "../config/Database.js";

class FutbolistasModel {
    constructor() {
        this.database = new db();
        this.connection = null;
    }

    async init() {
        this.connection = await this.database.connection();
    }

    async getAllFutbolistas() {
        try {
            const sql = "SELECT * FROM `futbolistas` ORDER BY `id` DESC";
            const [rows, fields] = await this.connection.execute(sql);
            console.log(rows);
        } catch (err) {
            console.log("Error al obtener futbolistas: " + err);
        }
    }
}

const classTest = new FutbolistasModel();

await classTest.init();

await classTest.getAllFutbolistas();