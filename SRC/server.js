import express, { json } from "express"
import autencDeRotas from "./routes/autenticUsuario.js";
import rotaTransacao from "./routes/rotaTransacao.js";
import { connectDb } from "./config/database.js";
import cors from 'cors';

connectDb();
const app = express();


app.use(json());
app.use(cors());
app.use(autencDeRotas);
app.use(rotaTransacao);



const port = process.env.PORT
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));