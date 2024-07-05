import servicoDeAutentic from "../services/servicoDeAutentic.js";

async function signup(req, res) {

    const body = req.body;

    try {
        const resServico = await servicoDeAutentic.signup(body);
        return res.status(201).send(resServico);
    } catch (err) {
        return res.status(409).send(err.message)
    }
}

async function signin(req, res) {
    const body = req.body;
    try {

        const token = await servicoDeAutentic.signin(body);
        return res.send(token)
    } catch (err) {
        return res.status(401).send(err.message);
    }


}

async function usuarioLogado(req, res) {
    const { _id: id } = res.locals.user;


    try {
        const user = await servicoDeAutentic.usuarioLogado(id)
        return res.send(user)
    } catch (err) {
        return res.status(404).send(err.message);
    }

}

export default {
    signup,
    signin,
    usuarioLogado,
}