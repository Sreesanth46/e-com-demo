import joi from "joi";

export const registerValidation = (data) => {
    const schema = joi.object({
        name: joi.string().min(3).required().max(50),
        email: joi.string().min(4).email(),
        password: joi.string().min(8).required(),
    });
    return schema.validate(data);
}