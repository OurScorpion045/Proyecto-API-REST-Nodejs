import FutbolistasModel from "../models/FutbolistasModel.js";

export class FutbolistasController {

    static async getAllFutbolistas(req, res) {
        try {
            const futbolistas = await FutbolistasModel.getAllFutbolistas();

            res.writeHead(200, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify(futbolistas));
        } catch (err) {
            res.writeHead(500);
            res.end(JSON.stringify({
                error: err.message
            }));
        }
    }

    static async getFutbolistaById(req, res, id) {
        try {
            const futbolista = await FutbolistasModel.getFutbolistaById(id);
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });

            res.end(JSON.stringify(futbolista));
        } catch(err) {
            res.writeHead(500);
            res.end(JSON.stringify({
                error: err.message
            }));
        }
    }

    static async insertFutbolista(req, res, nombre, posicion, numero, edad, equipo) {
        try {
            const mensajeExito = await FutbolistasModel.insertFutbolista(nombre, posicion, numero, edad, equipo);
            res.writeHead(200, {
                'Content-Type': 'application/json'
            })
            res.end(JSON.stringify(mensajeExito));
        } catch(err) {
            res.writeHead(500);
            res.end(JSON.stringify({
                error: err.message
            }));
        }
    }

    static async updateFutbolista(req, res, id, nombre, posicion, numero, edad, equipo) {
        try {
            const mensajeExito = await FutbolistasModel.updateFutbolista(id, nombre, posicion, numero, edad, equipo);
            res.writeHead(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify(mensajeExito));
        } catch (err) {
            res.writeHead(500);
            res.end(JSON.stringify({
                error: err.message
            }));
        }
    }

    static async deleteFutbolista(req, res, id) {
        try {
            const mensajeExito = await FutbolistasModel.deleteFutbolista(id);
            res.write(200, {
                'Content-Type': 'application/json'
            });
            res.end(JSON.stringify(mensajeExito));
        } catch (err) {
            res.writeHead(500);
            res.end(JSON.stringify({
                error: err.message
            }));
        }
    }
}