import joi from "joi";

export const  AuthUser = joi.object({
    email: joi.string().email().required().min(3),
    password: joi.string().required().min(3),

})