import prismaClient from '../../prisma';
import { IDeleteCustomerProps } from './IDeleteCustromerService';

export class DeleteCustomerService {
  async deleteCustomer({ id }: IDeleteCustomerProps) {
    try {
      if (!id) {
        throw new Error('Solicitação inválida');
      }
      const findCustomer = await prismaClient.costumer.findFirst({
        where: {
          id,
        },
      });
  
      if (!findCustomer) {
        throw new Error('Cliente não existe');
      }
  
      await prismaClient.costumer.delete({
        where: {
          id: findCustomer.id,
        },
      });
  
      return { message: 'Cliente deletado com sucesso ' };
    }catch(error) {
      if(error instanceof Error) {
        throw new Error('Ocorreu um erro ao deletar o cliente.');
      }
    }

  }
}
