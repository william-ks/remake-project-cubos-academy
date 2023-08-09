import { Router } from "express";
import { bodyValidation } from "./middleware/bodyValidation";
import { createUserController } from "./use-cases/UserUseCases/createUser";
import { createUserSchema } from "./use-cases/UserUseCases/createUser/createUserSchema";
import { AuthenticateUserSchema } from "./use-cases/UserUseCases/authenticateUser/AuthenticateUserSchema";
import { authenticateUserController } from "./use-cases/UserUseCases/authenticateUser";
import { authenticatedUserVerify } from "./middleware/authenticatedUserVerify";
import { updateUserController } from "./use-cases/UserUseCases/updateUser";
import { readSelfUserController } from "./use-cases/UserUseCases/readSelfUser";

const router = Router();

router.post("/user", bodyValidation(createUserSchema), (req, res) => {
  return createUserController.handle(req, res);
});

router.post(
  "/authenticate",
  bodyValidation(AuthenticateUserSchema),
  (req, res) => {
    return authenticateUserController.handle(req, res);
  },
);

router.use(authenticatedUserVerify);

router.put("/user", (req, res) => {
  return updateUserController.handle(req, res);
});

router.get("/user", (req, res) => {
  return readSelfUserController.handle(req, res);
});

export { router };
