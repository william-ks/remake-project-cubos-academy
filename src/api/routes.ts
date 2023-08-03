import { Router } from "express";
import { bodyValidation } from "./middleware/bodyValidation";
import { createUserController } from "./use-cases/createUser";
import { createUserSchema } from "./use-cases/createUser/createUserSchema";
import { AuthenticateUserSchema } from "./use-cases/authenticateUser/AuthenticateUserSchema";
import { authenticateUserController } from "./use-cases/authenticateUser";

const router = Router();

router.get('/', (req, res) => {
    return res.status(200).send()
})

router.post('/user', bodyValidation(createUserSchema), (req, res) => {
    return createUserController.handle(req, res);
})
// gmail.com
router.post('/authenticate', bodyValidation(AuthenticateUserSchema), (req, res) => {
    return authenticateUserController.handle(req, res);
})

export { router };

