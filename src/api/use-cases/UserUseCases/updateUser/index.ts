import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { UpdateUserController } from "./UpdateUserController";
import { PrismaUserRepository } from "../../repositories/implementations/PrismaUserRepository";

const prismaUserRepository = new PrismaUserRepository();
const updateUserUseCase = new UpdateUserUseCase(prismaUserRepository);
const updateUserController = new UpdateUserController(updateUserUseCase);

export { updateUserUseCase, updateUserController };
