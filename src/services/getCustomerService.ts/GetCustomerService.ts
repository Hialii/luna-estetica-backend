import prismaClient from '../../prisma';
import { IGetCustomerProps } from './IGetCustomerService';

export class GetCustomerService {
  async getCustomer({id}: IGetCustomerProps) {
    try {
      if (!id) {
         throw new Error('Solicitação inválida');
       }
      const customer = await prismaClient.costumer.findFirst({
        where: {
          id,
        },
      });

      if (!customer) {
        throw new Error('Cliente não encontrado');
      }

      return customer;
    } catch (error) {
      if (error instanceof Error) {
        return { message: error.message };
      }
    }
  }
}
