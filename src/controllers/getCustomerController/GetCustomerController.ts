import { Request, Response } from 'express';
import { GetCustomerService } from '../../services/getCustomerService.ts/GetCustomerService';

export class GetCustomerController {
  async handle(request: Request, response: Response) {
    try {
      const customerService = new GetCustomerService();
      const { id } = request.query as { id: string };

      const customer = await customerService.getCustomer({ id });

      response.send(customer);
    } catch (erro) {
      if (erro instanceof Error) {
        response.send('Não foi possível encontrar o cliente');
      }
    }
  }
}
