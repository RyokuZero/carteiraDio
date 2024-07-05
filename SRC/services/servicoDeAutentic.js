import bcrypt from "bcrypt";
import autenticRepositorio from "../repositories/autenticRepositorio.js";

async function signup(body) {
    const hasPassword = bcrypt.hashSync(body.password, 10);

     const usuarioExiste = await autenticRepositorio.findByEmail(body.email);

     if (usuarioExiste) throw new Error("Usuario ja existe!");


     return await autenticRepositorio.create({...body, password: hasPassword});
    
}
async function signin(body){
    const userExists = await autenticRepositorio.findByEmail(body.email);
    if (!userExists) throw new Error("Email ou senha invalido! email");
  
    const passwordOK = bcrypt.compareSync(body.password, userExists.password);
    if (!passwordOK) throw new Error("Email ou senha invalido! senha");
  
    return autenticRepositorio.generateToken(userExists._id);
}

async function usuarioLogado(id){
const user = await autenticRepositorio.findById(id);
if(!user) throw new Error("Usuario não encontrado");
    return user;

}
export default {
    signup,
    signin,
    usuarioLogado,
};