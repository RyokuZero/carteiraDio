import transacaoRepositorio from "../repositories/transacaoRepositorio.js"

async function create(body, id){
if(!id) throw new Error("Id do usuario necessario")

    return await transacaoRepositorio.create({...body, userId: id})

}
async function todasTransaçoesUsuario(id){
    if(!id) throw new Error("Id do usuario necessario")

    return await transacaoRepositorio.todasTransaçoesUsuario(id);
}

async function update(id, body, userId) {
    const isTransactionFromUser = await transacaoRepositorio.findById(id);
    if (userId !== isTransactionFromUser.userId)
      throw new Error("You can't update a transaction that is not yours");
    return await transacaoRepositorio.update(id, body);
  }
  
  async function remove(id, userId) {
    const isTransactionFromUser = await transacaoRepositorio.findById(id);
    if (userId !== isTransactionFromUser.userId)
      throw new Error("You can't delete a transaction that is not yours");
    return await transacaoRepositorio.remove(id);
  }

export default {
    create,
    todasTransaçoesUsuario,
    update,
    remove,
}