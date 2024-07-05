export function validacaoShcema (schema){
    return(req, res, next) => {
const {error} = schema.validate(req.boy, {abortEarly: false});
if(error){
    const errors = error.details.map(detail => detail.message);
    return res.status(422).send(errors);
}
next()
    }
}