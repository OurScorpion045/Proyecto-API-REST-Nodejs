import db from "../config/Database.js";

class FutbolistasModel {
    constructor() {
        this.database = new db();
        this.connection = null;
    }

    async getAllFutbolistas() {
        this.connection = await this.database.connection();
        try {
            const sql = "SELECT * FROM `futbolistas` ORDER BY `id` DESC";
            const [rows, fields] = await this.connection.execute(sql);
            console.log(rows);
        } catch (err) {
            console.log("Error al obtener futbolistas: " + err);
        }
    }

    async getFutbolistasById(id) {
        this.connection = await this.database.connection();
        try {
            const sql = "SELECT * FROM `futbolistas` WHERE `id` = ?";
            const [rows, fields] = await this.connection.execute(sql, [id]);
            console.log(rows);
        } catch (err) {
            console.log("Error al obtener futbolista: " + err);
        }
    }

    async insertFutbolistas(nombre, posicion, numero, edad, equipo) {
        this.connection = await this.database.connection();
        try {
            const sql = "INSERT INTO `futbolistas`(`nombre`, `posicion`, `numero`, `edad`, `equipo`) VALUES (?, ?)";
            const [values] = [nombre, posicion, numero, edad, equipo];

            const [result, fields] = await this.connection.execute(sql, values);
            console.log("Futbolista insertado correctamente: " + result);
        } catch (err) {
            console.error("Error al insertar futbolista: " + err);
        }
    }

    async updateFutbolistas(id, nombre, posicion, numero, edad, equipo) {
        this.connection = await this.database.connection();
        try {
            const sql = "UPDATE `futbolistas` SET `nombre` = ?, `posicion` = ?, `numero` = ?, `edad` = ?, `equipo` = ? WHERE `id` = ?";
            const values = [nombre, posicion, numero, edad, equipo, id];
            const [results, fields] = await this.connection.execute(sql, values);
            console.log("Futbolista actualizado correctamente: " + result);
        } catch (err) {
            console.error("Error al actualizar futbolista: " + err);
        }
    }

    async deleteFutbolista(id) {
        this.connection = await this.database.connection();
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