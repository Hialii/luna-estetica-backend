import { Costumer } from "@prisma/client";

export interface ICreateCustumerData {
  name: string;
  email: string;
  service: string;
  scheduledDateTime: Date;
}

export interface ICreateCustomerService {
  createCustomer(data: ICreateCustumerData): Promise<Costumer>;
}
