import { Request, Response } from 'express';
import { ListCustomersService } from '../../services/listCustomerService/ListCustomersService';

export class ListCustomersController {
  async handle(request: Request, response: Response) {
    try {
      const customerService = new ListCustomersService();
      const customers = await customerService.listCustomer();
      response.send(customers);
    } catch (error) {
      if (error instanceof Error) {
        response.send('Não foi possivel retornar os clientes');
      }
    }
  }
}
