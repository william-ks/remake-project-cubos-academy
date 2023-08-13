import { Router } from "express";
import { createClientController } from "./createClient";

const clientRouter = Router();

clientRouter.post("/client", (req, res) => {
  return createClientController.handle(req, res);
});

export { clientRouter };
