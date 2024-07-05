import { Router } from "express";
import controleDeAutenticacao from "../controllers/controleDeAutenticacao.js";
import { tokenAutenticacao } from "../middlewares/autenticacao.js";
import { validacaoShcema } from "../middlewares/validacaoShcema.js";
import { CreateUser } from "../esquema/validacao/CreateUser.js";
import { AuthUser } from "../esquema/validacao/AuthUser.js";


const autencDeRotas = Router();


autencDeRotas.post('/signup', validacaoShcema(CreateUser) ,controleDeAutenticacao.signup);
autencDeRotas.post('/signin', validacaoShcema(AuthUser) ,controleDeAutenticacao.signin);
autencDeRotas.get("/me", tokenAutenticacao, controleDeAutenticacao.usuarioLogado);



export default autencDeRotas;