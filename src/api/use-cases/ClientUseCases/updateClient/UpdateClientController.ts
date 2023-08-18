import { UpdateClientUseCase } from "./UpdateClientUseCase";
import { Request, Response } from "express";

export class UpdateClientController {
  constructor(private updateClientUseCase: UpdateClientUseCase) {}

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
    const { id } = req.params;

    await this.updateClientUseCase.execute({
      clientId: id,
      data: {
        name,
        email,
        cpf,
        phone,
        zipCode,
        complement,
        neighborhood,
        city,
        state,
      },
    });

    return res.status(200).send();
  }
}
