import TransacaoSchema from "../esquema/transacao.js"

async function create(data){
    return TransacaoSchema.create(data);
}
 async function todasTransaçoesUsuario(id){
    return await TransacaoSchema.find({userId: id})
 }

 async function update(id, data) {
    return await TransacaoSchema.updateOne({ _id: id }, data);
  }
  
  async function remove(id) {
    return await TransacaoSchema.deleteOne({ _id: id });
  }

  async function findById(id) {
    return await TransacaoSchema.findById(id);
  }


export default {
    create,
    todasTransaçoesUsuario,
    update,
    remove,
    findById
};