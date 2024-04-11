import prismaClient from '../../prisma';
import { DateTimeChecker } from '../dateTimeChecher/DateTimeChecker';
import { IUpdateCustomerProps } from './IUpdateCustomer';

export class UpdateCustomerService {
  async updateCustomer({ id, scheduledDateTime }: IUpdateCustomerProps) {
   try {
      if (!id || !scheduledDateTime) {
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
       const scheduledDateTimeToUTF = new Date(scheduledDateTime)
       const dateTimeExists = await DateTimeChecker(scheduledDateTimeToUTF);

       if (!dateTimeExists) {
         throw new Error(
           'Horário de agendamento já escolhido. Por favor, escolha outro horário.'
         );
       }
   
       await prismaClient.costumer.update({
         where: {
           id,
         },
         data: {
           scheduledDateTime,
         },
       });

       return { message: 'Cliente atualizado com sucesso ' };
     }catch (error) { 
      if (error instanceof Error) {
        throw error;
      } else {
        throw new Error('Ocorreu um erro ao atualizar agendamento do cliente.');
      }
    }
   }

}
