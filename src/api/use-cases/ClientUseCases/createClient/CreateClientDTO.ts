export interface ICreateClientDTO {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  zipCode?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
}
