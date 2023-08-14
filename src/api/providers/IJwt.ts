export interface data {
  userId: string;
  expiresIn: string;
}

export interface IJwt {
  sign(data: data): Promise<string>;
  verify(token: string): Promise<{ id: string }>;
}
