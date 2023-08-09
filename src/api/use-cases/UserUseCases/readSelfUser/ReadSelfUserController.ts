import { Request, Response } from "express";
import { ReadSelfUserUseCase } from "./ReadSelfUserUseCase";

export class ReadSelfUserController {
  constructor(private readSelfUserUseCase: ReadSelfUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.user;

    const user = await this.readSelfUserUseCase.execute(id);

    return res.status(200).json(user);
  }
}
