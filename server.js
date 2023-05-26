import ronin from "ronin-server";
import mocks from "ronin-mocks";
import database from "ronin-database";
import * as env from "dotenv";
env.config();

const server = ronin.server();

console.log(process.env.CONNECTIONSTRING);

// server.use("/", mocks.server(server.Router(), false, true));
// server.start();

async function main() {
    try {
        await database.connect(process.env.CONNECTIONSTRING);

        const server = ronin.server({
            port: process.env.SERVER_PORT,
        });

        server.use("/foo", (req, res) => {
            return res.json({ foo: "bar12" });
        });

        server.use("/", mocks.server(server.Router()));

        const result = await server.start();

        console.info(result);
    } catch (error) {
        console.error(error);
    }
}

main();
