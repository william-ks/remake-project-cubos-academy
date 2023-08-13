import { InMemoryUsersRepository } from "./../../../../tests/repositories/inMemoryUsersRepository";
import { describe, expect, test } from "vitest";
import { User } from "../../entities/user";
import { CreateUserUseCase } from "./createUserUseCase";
import { Bcrypt } from "../../providers/implementations/BcryptPassword";

describe("create user => use case test", () => {
  const newUser = new User({
    name: "John Doe",
    email: "johndoe@gmail.com",
    password: "teste123",
  });

  const inMemoryUsersRepository = new InMemoryUsersRepository();
  const bcrypt = new Bcrypt();
  const createUser = new CreateUserUseCase(inMemoryUsersRepository, bcrypt);

  test("create a user", async () => {
    await expect(createUser.execute(newUser)).resolves.not.toThrow();
  });

  test("create a duplicate user", async () => {
    await expect(createUser.execute(newUser)).rejects.toThrow();
  });
});
