import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { JwtTokens } from "../../../providers/implementations/JwtTokens";
import { Bcrypt } from "../../../providers/implementations/BcryptPassword";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { PrismaUserRepository } from "../../../repositories/implementations/PrismaUserRepository";

const bcrypt = new Bcrypt();
const jwt = new JwtTokens();
const prismaUserRepository = new PrismaUserRepository();

const authenticateUserUseCase = new AuthenticateUserUseCase(
  prismaUserRepository,
  bcrypt,
  jwt,
);

const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase,
);

export { authenticateUserUseCase, authenticateUserController };
