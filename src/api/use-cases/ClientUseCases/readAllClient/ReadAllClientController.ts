import { ReadAllClientUseCase } from "./ReadAllClientUseCase";
import { Request, Response } from "express";

export class ReadAllClientController {
  constructor(private readAllClientUseCase: ReadAllClientUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const response = await this.readAllClientUseCase.execute();

    return res.status(200).json(response);
  }
}
