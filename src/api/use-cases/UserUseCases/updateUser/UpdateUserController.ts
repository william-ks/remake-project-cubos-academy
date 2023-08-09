import { UpdateUserUseCase } from "./UpdateUserUseCase";
import { Request, Response } from "express";

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email } = req.body;
    const user = req.user;

    if (!name && !email) {
      throw new Error("Missing parameters");
    }

    await this.updateUserUseCase.execute({ name, email }, user);

    return res.status(204).send();
  }
}
