import http from "node:http";
import dotenv from "dotenv";

dotenv.config();

const processRequest = async (req, res) => {
    res.setHeader("Content-type", "text/html");
    res.end("Hello world");
}

const server = http.createServer(processRequest);

server.listen(3000, () => {
    console.log("Server running on port 3000");
})