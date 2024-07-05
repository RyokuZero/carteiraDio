import { model, Schema } from "mongoose";

const TransacaoSchema = new Schema({


    value:{type: Number, required: true},
    description:{type: String, required: true},
    type:{type: String, required: true},
    userId: {type: Schema.Types.ObjectId, required: true, ref: "users"},
    created_at:{type: Date, default: Date.now()},

});

export default model("transactions", TransacaoSchema);