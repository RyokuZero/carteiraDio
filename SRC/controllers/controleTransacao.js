import transacaoServico from "../services/transacaoServico.js";




async function create(req, res) {
    const body = req.body
    const { _id: id } = res.locals.user

    try {
        const transacao = await transacaoServico.create(body, id);
        return res.status(201).send(transacao)
    } catch (err) {
       return res.status(409).send(err.message);
    }
}

async function todasTransaçoesUsuario(req, res) {
const {_id: id}  = res.locals.user;

try {
    const transacoes = await transacaoServico.todasTransaçoesUsuario(id);
    return res.send(transacoes)
} catch (err) {
    return res.status(500).send(err.message);
}
}

async function update(req, res) {
    const { id } = req.params;
    const { _id: userId } = res.locals.user;
    const body = req.body;
  
    try {
      await transacaoServico.update(id, body, userId);
      return res.send();
    } catch (err) {
      return res.status(500).send(err.message);
    }
  }
  
  async function remove(req, res) {
    const { id } = req.params;
    const { _id: userId } = res.locals.user;
  
    try {
      await transacaoServico.remove(id, userId);
      return res.send();
    } catch (err) {
      return res.status(500).send(err.message);
    }
  }
export default {
    create,
    todasTransaçoesUsuario,
    update,
    remove,

};