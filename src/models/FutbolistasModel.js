import db from "../config/Database.js";

export class FutbolistasModel {
    constructor () {
        this.connection = null;
    }

    static async getAllFutbolistas() {
        this.connection = await db.connection();
        try {
            const sql = "SELECT * FROM `futbolistas` ORDER BY `id` DESC";
            const [rows, fields] = await this.connection.execute(sql);
            return rows;
        } catch (err) {
            console.log("Error al obtener futbolistas: " + err);
        }
    }

    static async getFutbolistaById(id) {
        this.connection = await db.connection();
        try {
            const sql = "SELECT * FROM `futbolistas` WHERE `id` = ?";
            const [rows, fields] = await this.connection.execute(sql, [id]);
            return rows;
        } catch (err) {
            console.log("Error al obtener futbolista: " + err);
        }
    }

    static async insertFutbolista(nombre, posicion, numero, edad, equipo) {
        this.connection = await db.connection();
        try {
            const sql = "INSERT INTO `futbolistas`(`nombre`, `posicion`, `numero`, `edad`, `equipo`) VALUES (?, ?)";
            const [values] = [nombre, posicion, numero, edad, equipo];

            const [result, fields] = await this.connection.execute(sql, values);
            return "Futbolista insertado correctamente: " + result;
        } catch (err) {
            console.error("Error al insertar futbolista: " + err);
        }
    }

    static async updateFutbolista(id, nombre, posicion, numero, edad, equipo) {
        this.connection = await db.connection();
        try {
            const sql = "UPDATE `futbolistas` SET `nombre` = ?, `posicion` = ?, `numero` = ?, `edad` = ?, `equipo` = ? WHERE `id` = ?";
            const values = [nombre, posicion, numero, edad, equipo, id];
            const [results, fields] = await this.connection.execute(sql, values);
            return "Futbolista actualizado correctamente: " + result;
        } catch (err) {
            console.error("Error al actualizar futbolista: " + err);
        }
    }

    static async deleteFutbolista(id) {
        this.connection = await db.connection();
        try {
            const sql = "DELETE FROM `futbolistas` WHERE `id` = ?";
            const values = [id];
            const [results, fields] = await this.connection.execute(sql, values);
            console.log("Futbolista eliminado correctamente: " + results);
        } catch (err) {
            console.error("Error al eliminar futbolista: " + err);
        }
    }
}