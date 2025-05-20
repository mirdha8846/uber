import app from './app.js'
import http from "http";
import { initializeSocket } from "./socket.js";

const port = process.env.PORT || 5000;

// Create the HTTP server using the Express app
const server = http.createServer(app);

// Pass the HTTP server instance to initializeSocket
initializeSocket(server);

// Start listening on the port
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
