import jwt from "jsonwebtoken";
import "dotenv/config";
import autenticRepositorio from "../repositories/autenticRepositorio.js";

export async function tokenAutenticacao(req, res, next) {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).send({ message: "token invalido" })

    const partes = authorization?.split(" ")
    if (partes.length !== 2) {
        return res.status(401).send({ message: "token invalido" })
    }

    const [schema, token] = partes;
    if (!/^Bearer$/i.test(schema)) return res.status(401).send({ message: "token invalido" })

    jwt.verify(token, process.env.SECRET, async (err, decode) => {
        if (err) return res.status(401).send({ message: "token invalido" })
        if (!decode) return res.status(401).send({ message: "token invalido" })

        const user = await autenticRepositorio.findById(decode.id);
        if (!user){ return res.status(401).send({ message: "token invalido" })}
        
        res.locals.user = user;

        next();


    });



}