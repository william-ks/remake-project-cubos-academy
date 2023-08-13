import { CreateUserUseCase } from "./createUserUseCase";
import { CreateUserController } from "./createUserController";
import { PrismaUserRepository } from "../../../repositories/implementations/PrismaUserRepository";
import { Bcrypt } from "../../../providers/implementations/BcryptPassword";

const prismaUserRepository = new PrismaUserRepository();

const bcrypt = new Bcrypt();
const createUserUseCase = new CreateUserUseCase(prismaUserRepository, bcrypt);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
