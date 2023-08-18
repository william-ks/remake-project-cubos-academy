import { CreateClientUseCase } from "./CreateClientUseCase";
import { Request, Response } from "express";

export class CreateClientController {
  constructor(private createClientUseCase: CreateClientUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const {
      name,
      email,
      cpf,
      phone,
      zipCode,
      complement,
      neighborhood,
      city,
      state,
    } = req.body;

    const clientData = {
      name,
      email,
      cpf,
      phone,
      zipCode,
      complement,
      neighborhood,
      city,
      state,
    };

    await this.createClientUseCase.execute(clientData);

    return res.status(200).send();
  }
}
