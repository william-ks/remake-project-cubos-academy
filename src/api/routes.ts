import { Router } from "express";
import { bodyValidation } from "./middleware/bodyValidation";
import { createUserController } from "./use-cases/createUser";
import { createUserSchema } from "./use-cases/createUser/createUserSchema";
import { AuthenticateUserSchema } from "./use-cases/authenticateUser/AuthenticateUserSchema";
import { authenticateUserController } from "./use-cases/authenticateUser";
import { authenticatedUserVerify } from "./middleware/authenticatedUserVerify";
import { updateUserController } from "./use-cases/updateUser";

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

router.get("/", (req, res) => {
  return res.status(200).send();
});

export { router };
