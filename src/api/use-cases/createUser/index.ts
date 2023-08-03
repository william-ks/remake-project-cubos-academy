import { CreateUserUseCase } from './createUserUseCase';
import { CreateUserUserController } from './createUserController';
import { PostgresUserRepository } from './../../repositories/implementations/postgresUserRepository';
import { Bcrypt } from '../../providers/implementations/BcryptPassword';


const postgresUserRepository = new PostgresUserRepository();

const bcrypt = new Bcrypt();
const createUserUseCase = new CreateUserUseCase(postgresUserRepository, bcrypt);
const createUserController = new CreateUserUserController(createUserUseCase);

export { createUserUseCase, createUserController }