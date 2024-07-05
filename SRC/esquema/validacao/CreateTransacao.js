import Joi from 'joi';
const CreateTransaction = Joi.object({
    value: Joi.number().required(),
    description: Joi.string().required(3),
    type: Joi.string().required().valid("input", "output"),
    userId: Joi.object(),
    created_at: Joi.string,
})

export {
    CreateTransaction,
}