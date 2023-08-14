import { Router } from "express";
import { createClientController } from "./createClient";
import { bodyValidation } from "../../middleware/bodyValidation";
import { CreateClientSchema } from "./createClient/CreateClientSchema";

const clientRouter = Router();

clientRouter.post("/client", bodyValidation(CreateClientSchema), (req, res) => {
  return createClientController.handle(req, res);
});

export { clientRouter };
