import pkg from "pg";
import dotenv from "dotenv";
const { Pool } = pkg;
import path from "path";

//dotenv.config();
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(__dirname, "../.env") });
//____________________________________________

console.log(process.env.DB_USER);
console.log(process.env.DB_HOST);
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT, 
});

pool.on("connect", () => {
    console.log("Connection pool created with Database");
});

export default pool