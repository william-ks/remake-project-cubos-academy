import { Router } from "express";
import { userRouter } from "./use-cases/UserUseCases/user.routes";
import { clientRouter } from "./use-cases/ClientUseCases/clients.router";

const router = Router();

router.use(userRouter);
router.use(clientRouter);

export { router };
