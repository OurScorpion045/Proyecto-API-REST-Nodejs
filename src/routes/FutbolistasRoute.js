import { FutbolistasController } from "../controllers/FutbolistasController.js";
import { parseBody } from "../utils/parseBody.js";

export const futbolistasRoute = async (req, res) => {
    let method = req.method;
    const url = req.url;
    const urlSplit = url.split("/");
    urlSplit.shift();

    const id = urlSplit[1] ?? null;

    switch (method) {
        case "GET":
            if (id) {
                await FutbolistasController.getFutbolistaById(req, res, id);
                return;
            }
            await FutbolistasController.getAllFutbolistas(req, res)
            break;
        case "POST":
            const dataPost = await parseBody(req);
            const arrayDataPost = Object.entries(data)
            await FutbolistasController.insertFutbolista(req, res, arrayData['nombre'], arrayData['posicion'], arrayData['numero'], arrayData['edad'], arrayData['equipo']);
            break;
        case "PUT":
            const dataPut = await parseBody(req);
            const arrayDataPut = Object.entries(data);
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