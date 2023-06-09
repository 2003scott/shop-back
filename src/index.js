import app from "./app.js";
import http from "http";
import database from "./config/database.js";


const server = http.createServer(app);

server
    .listen(app.get("port"))
    .on("listening", () => {
        console.log("Listening on port 3000");
        database;
    })
    .on("error", (e) => {
        console.log("Server Error: " + e);
        process.exit(1);
    });

