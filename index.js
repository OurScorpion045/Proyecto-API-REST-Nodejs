import http from "node:http";
import { futbolistasRoute } from "./src/routes/FutbolistasRoute.js";

const processRequest = async (req, res) => {
    let url = req.url;
    const urlSplit = url.split("/");
    urlSplit.shift();

    const route = urlSplit[0];


    switch (route) {
        case "futbolistas":
            await futbolistasRoute(req, res);
            break;
        default:
            res.writeHead(404);
            res.end("Ruta no encontrada");
            break;
    }
}

const server = http.createServer(processRequest);

server.listen(3000, () => {
    console.log("Server running on port 3000");
})