export interface IUpdateClientDTO {
  data: IUpdateProps;
  clientId: string;
}

export interface IUpdateProps {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  zipCode?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
}
