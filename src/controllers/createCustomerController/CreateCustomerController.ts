import { Request, Response } from 'express';
import { CreateCustomerService } from '../../services/createCustomerService/CreateCustomerService';


function toUTC(dateTime: string): Date {
  return new Date(dateTime)
}

export class CreateCustomerController {
  async handle(request: Request, response: Response) {
    try {
 
      const { name, email, service, scheduledDateTime } = request.body as {
        name: string;
        email: string;
        service: string;
        scheduledDateTime: string 
      };

      const utcDateTime = toUTC(scheduledDateTime);
      const customerService = new CreateCustomerService();

      const customer = await customerService.createCustomer({
        name,
        email,
        service,
        scheduledDateTime: utcDateTime
      });

      response.send(customer);
      } catch (error) {
        if (error instanceof Error){
          if (error.message === 'Horário de agendamento já escolhido. Por favor, escolha outro horário.') {
            response.status(400).send({ error: error.message });
          } else {
            response.status(500).send({ error: 'Ocorreu um erro ao criar o cliente.' });
          }
        }
      }
  }
}
