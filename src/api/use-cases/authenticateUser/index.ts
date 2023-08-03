import { AuthenticateUserUseCase } from './AuthenticateUserUseCase';
import { JwtTokens } from '../../providers/implementations/JwtTokens';
import { Bcrypt } from './../../providers/implementations/BcryptPassword';
import { AuthenticateUserController } from './AuthenticateUserController';
import { PostgresUserRepository } from '../../repositories/implementations/postgresUserRepository';


const bcrypt = new Bcrypt();
const jwt = new JwtTokens();
const postgresUserRepository = new PostgresUserRepository()

const authenticateUserUseCase = new AuthenticateUserUseCase(postgresUserRepository, bcrypt, jwt)

const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase);

export { authenticateUserUseCase, authenticateUserController }