import { CreateClientUseCase } from "./CreateClientUseCase";

export class CreateClientController {
  constructor(private createClientUseCase: CreateClientUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    //await this.createClientUseCase.execute();

    return res.status(200).send();
  }
}
