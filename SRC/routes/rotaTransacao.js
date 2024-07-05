import { Router } from "express";
import controleTransacao from "../controllers/controleTransacao.js"
import { tokenAutenticacao } from "../middlewares/autenticacao.js";
import { CreateTransaction } from "../esquema/validacao/CreateTransacao.js";
import { validacaoShcema } from "../middlewares/validacaoShcema.js";

const rotaTransacao = Router();

rotaTransacao.use(tokenAutenticacao)

rotaTransacao.post("/transactions", validacaoShcema(CreateTransaction), controleTransacao.create);
rotaTransacao.get("/transactions", controleTransacao.todasTransaçoesUsuario);
rotaTransacao.put("/:id", controleTransacao.update);
rotaTransacao.delete("/:id", controleTransacao.remove);


export default rotaTransacao