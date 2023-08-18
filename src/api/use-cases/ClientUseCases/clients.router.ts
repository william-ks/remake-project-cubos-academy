import { Router } from "express";
import { createClientController } from "./createClient";
import { bodyValidation } from "../../middleware/bodyValidation";
import { CreateClientSchema } from "./createClient/CreateClientSchema";
import { readAllClientController } from "./readAllClient";
import { readOneClientController } from "./readOneClient";
import { updateClientController } from "./updateClient";
import { UpdateClientSchema } from "./updateClient/UpdateClientSchema";

const clientRouter = Router();

clientRouter.post("/client", bodyValidation(CreateClientSchema), (req, res) => {
  return createClientController.handle(req, res);
});

clientRouter.get("/client", (req, res) => {
  return readAllClientController.handle(req, res);
});

clientRouter.get("/client/:id", (req, res) => {
  return readOneClientController.handle(req, res);
});

clientRouter.put(
  "/client/:id",
  bodyValidation(UpdateClientSchema),
  (req, res) => {
    return updateClientController.handle(req, res);
  },
);

export { clientRouter };
