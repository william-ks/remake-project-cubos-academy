import { CreateUserUseCase } from "./createUserUseCase";
import { CreateUserController } from "./createUserController";
import { PostgresUserRepository } from "./../../repositories/implementations/postgresUserRepository";
import { Bcrypt } from "../../providers/implementations/BcryptPassword";

const postgresUserRepository = new PostgresUserRepository();

const bcrypt = new Bcrypt();
const createUserUseCase = new CreateUserUseCase(postgresUserRepository, bcrypt);
const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
