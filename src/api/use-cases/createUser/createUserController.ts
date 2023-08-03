import { CreateUserUseCase } from './createUserUseCase';
import { Request, Response } from "express";

export class CreateUserUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, email, password } = req.body;

        await this.createUserUseCase.execute({ name, email, password });

        return res.status(201).send();
    }
}