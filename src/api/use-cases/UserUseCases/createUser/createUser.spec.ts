import { describe, test, expect } from "vitest";
import { InMemoryUsersRepository } from "../../../../../tests/repositories/inMemoryUsersRepository";
import { Bcrypt } from "../../../providers/implementations/BcryptPassword";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { User } from "../../../entities/user";

describe("test", () => {
  const userRepository = new InMemoryUsersRepository();
  const bcrypt = new Bcrypt();
  const createUserUseCase = new CreateUserUseCase(userRepository, bcrypt);

  const user = {
    name: "John Doe",
    email: "john@gmail.com",
    password: "teste123",
  };

  test("create user ", async () => {
    await createUserUseCase.execute(
      new User({
        ...user,
      }),
    );

    expect(userRepository.users[0]).toHaveProperty("name", user.name);
  });

  test("try repeated User", async () => {
    try {
      await createUserUseCase.execute(
        new User({
          ...user,
        }),
      );
    } catch (e) {
      expect(e.message).toBe("This user already exists in our database.:400");
    }
  });
});
