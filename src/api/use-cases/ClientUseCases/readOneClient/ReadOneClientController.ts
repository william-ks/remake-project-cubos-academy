import { ReadOneClientUseCase } from "./ReadOneClientUseCase";
import { Request, Response } from "express";

export class ReadOneClientController {
  constructor(private readOneClientUseCase: ReadOneClientUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const client = await this.readOneClientUseCase.execute({ id });

    return res.status(200).json(client);
  }
}
