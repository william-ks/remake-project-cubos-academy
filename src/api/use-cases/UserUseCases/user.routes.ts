import { Router } from "express";
import { authenticatedUserVerify } from "../../middleware/authenticatedUserVerify";
import { bodyValidation } from "../../middleware/bodyValidation";
import { authenticateUserController } from "./authenticateUser";
import { AuthenticateUserSchema } from "./authenticateUser/AuthenticateUserSchema";
import { createUserController } from "./createUser";
import { createUserSchema } from "./createUser/createUserSchema";
import { readSelfUserController } from "./readSelfUser";
import { updateUserController } from "./updateUser";

const userRouter = Router();

userRouter.post("/user", bodyValidation(createUserSchema), (req, res) => {
  return createUserController.handle(req, res);
});

userRouter.post(
  "/authenticate",
  bodyValidation(AuthenticateUserSchema),
  (req, res) => {
    return authenticateUserController.handle(req, res);
  },
);

userRouter.use(authenticatedUserVerify);

userRouter.put("/user", (req, res) => {
  return updateUserController.handle(req, res);
});

userRouter.get("/user", (req, res) => {
  return readSelfUserController.handle(req, res);
});

export { userRouter };
