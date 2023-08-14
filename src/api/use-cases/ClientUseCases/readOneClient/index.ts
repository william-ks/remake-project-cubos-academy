import { ReadOneClientUseCase } from "./ReadOneClientUseCase";
import { ReadOneClientController } from "./ReadOneClientController";
import { PrismaClientRepository } from "../../../repositories/implementations/PrismaClientRepository";

const clientRepository = new PrismaClientRepository();
const readOneClientUseCase = new ReadOneClientUseCase(clientRepository);
const readOneClientController = new ReadOneClientController(
  readOneClientUseCase,
);

export { readOneClientUseCase, readOneClientController };
