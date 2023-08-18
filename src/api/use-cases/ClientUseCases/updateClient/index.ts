import { UpdateClientUseCase } from "./UpdateClientUseCase";
import { UpdateClientController } from "./UpdateClientController";
import { PrismaClientRepository } from "../../../repositories/implementations/PrismaClientRepository";

const clientRepository = new PrismaClientRepository();
const updateClientUseCase = new UpdateClientUseCase(clientRepository);
const updateClientController = new UpdateClientController(updateClientUseCase);

export { updateClientUseCase, updateClientController };
