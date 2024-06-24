import app from "./app.js";
import { NODE_ENV, PORT } from "./config.js";

const main = () => {
    try {
        app.listen(PORT)
        console.log(`Server: http://localhost:${PORT}`);
        console.log(`Enviroment: ${NODE_ENV}`);
    } catch (error) {
        console.log(error);
    }
}

main()