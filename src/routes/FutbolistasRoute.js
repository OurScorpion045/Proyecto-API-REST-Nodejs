import { FutbolistasController } from "../controllers/FutbolistasController.js";
import { parseBody } from "../utils/parseBody.js";

export const futbolistasRoute = async (req, res) => {
    let method = req.method;
    let url = req.url.trim("/");
    let urlSplit = url.split("/");
    let id = '';

    if (typeof(urlSplit[-1] === "number")) {
        id = urlSplit[-1];
    } else {
        id = null
    }

    switch (method) {
        case "GET":
            if (id) {
                await FutbolistasController.getFutbolistaById(req, res, id);
                return;
            }
            await FutbolistasController.getAllFutbolistas(req, res)
            break;
        case "POST":
            const data = await parseBody(req);
            const arrayData = Object.entries(data)
            await FutbolistasController.insertFutbolista(req, res, arrayData['nombre'], arrayData['posicion'], arrayData['numero'], arrayData['edad'], arrayData['equipo']);
            break;
        case "PUT":
            const data = await parseBody(req);
            const arrayData = Object.entries(data);
            await FutbolistasController.updateFutbolista(req, res, id, arrayData['nombre'], arrayData['posicion'], arrayData['numero'], arrayData['edad'], arrayData['equipo']);
            break;
        case "DELETE":
            await FutbolistasController.deleteFutbolista(req, res, id);
            break;
        default:
            res.end(JSON.stringify({
                'error': 'Metodo no valido'
            }));
            break;
    }
}