import { ReadSelfUserUseCase } from "./ReadSelfUserUseCase";
import { ReadSelfUserController } from "./ReadSelfUserController";
import { PrismaUserRepository } from "../../repositories/implementations/PrismaUserRepository";

const userRepository = new PrismaUserRepository();
const readSelfUserUseCase = new ReadSelfUserUseCase(userRepository);
const readSelfUserController = new ReadSelfUserController(readSelfUserUseCase);

export { readSelfUserUseCase, readSelfUserController };
