import { CreateClientUseCase } from "./CreateClientUseCase";
import { CreateClientController } from "./CreateClientController";
import { PrismaClientRepository } from "../../../repositories/implementations/PrismaClientRepository";

const clientRepository = new PrismaClientRepository();
const createClientUseCase = new CreateClientUseCase(clientRepository);
const createClientController = new CreateClientController(createClientUseCase);

export { createClientUseCase, createClientController };
