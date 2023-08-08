export interface IUserRequest {
    id: string,
    name: string;
    email: string
}

declare global {
    namespace Express {
        export interface Request {
            user: IUserRequest;
        }
    }
}