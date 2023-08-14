import { ReadAllClientUseCase } from "./ReadAllClientUseCase";
import { ReadAllClientController } from "./ReadAllClientController";
import { PrismaClientRepository } from "../../../repositories/implementations/PrismaClientRepository";

const clientRepository = new PrismaClientRepository();
const readAllClientUseCase = new ReadAllClientUseCase(clientRepository);
const readAllClientController = new ReadAllClientController(
  readAllClientUseCase,
);

export { readAllClientUseCase, readAllClientController };
