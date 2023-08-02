import { Router } from "express";
import { createUserController } from "./useCases/createUser";
import { bodyValidation } from "./middleware/bodyValidation";
import { createUserSchema } from "./useCases/createUser/createUserSchema";

const router = Router();

router.get('/', (req, res) => {
    return res.status(200).send()
})

router.post('/user', bodyValidation(createUserSchema), (req, res) => {
    return createUserController.handle(req, res);
})

export { router };