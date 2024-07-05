import EsquemaUsuario from "../esquema/usuario.js"
import jwt from "jsonwebtoken";
import "dotenv/config"


async function create(data){
    return await EsquemaUsuario.create(data);

}

async function findByEmail(email){
    const usuario = await EsquemaUsuario.findOne({email});
    return usuario;
}

async function generateToken(id){
    return jwt.sign({id}, process.env.SECRET, {expiresIn: 86400});

}

async function findById(Id){
    const usuario = await EsquemaUsuario.findById(Id);
    return usuario;
}
export default {
    create,
    findByEmail,
    generateToken,
    findById,
};