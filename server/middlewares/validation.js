import joi from "joi";

export const registerValidation = (data) => {
    const schema = joi.object({
        name: joi.string().min(3).required().max(50),
        email: joi.string().min(4).email(),
        password: joi.string().min(8).required(),
    });
    return schema.validate(data);
}

export const productValidation = (data) => {
    const schema = joi.object({
        title: joi.string().min(3).required().max(50),
        price: joi.number().min(1).required(),
        description: joi.string(),
        category: joi.string(),
        image: joi.string().min(5).required(),
        rating: joi.number().max(5)
    });
    return schema.validate(data);
}