import {
  afterAll,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
} from "vitest";
import { InMemoryUsersRepository } from "../../../../../tests/repositories/inMemoryUsersRepository";
import { User } from "../../../entities/user";
import { Bcrypt } from "../../../providers/implementations/BcryptPassword";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

describe("test", () => {
  const userRepository = new InMemoryUsersRepository();
  const updateUserUseCase = new UpdateUserUseCase(userRepository);

  const user1 = {
    name: "John Doe",
    email: "john@gmail.com",
    password: "teste123",
  };
  const user2 = {
    name: "Joanna Doe",
    email: "joanna@gmail.com",
    password: "teste123",
  };

  let userId: string;

  beforeAll(async () => {
    await userRepository.save(new User({ ...user1 }));
    await userRepository.save(new User({ ...user2 }));
    userId = userRepository.users[0].id as string;
  });

  afterAll(() => {
    userRepository.users = [];
  });

  test("Update name", async () => {
    // Given
    await userRepository.update({
      id: userId,
      dataToUpdate: {
        name: "Markus",
      },
    });

    const actualUser = await userRepository.find_by({
      key: "email",
      value: user1.email,
    });

    expect(actualUser).toHaveProperty("name", "Markus");
  });

  test("Update with repeated Email", async () => {
    try {
      await updateUserUseCase.execute(
        { email: "joanna@gmail.com" },
        { id: userId },
      );
    } catch (e) {
      expect(e.message).toBe("Already exists a user with this E-mail:400");
    }
  });
});
