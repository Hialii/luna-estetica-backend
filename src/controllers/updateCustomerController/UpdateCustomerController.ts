import { Request, Response } from 'express';
import { UpdateCustomerService } from '../../services/updateCustomerService/UpdateCustomerService';

export class UpdateCustomerController {
  async handle(request: Request, response: Response) {
    try {
      const { id, scheduledDateTime } = request.body as {
        id: string;
        scheduledDateTime: string;
      };

      const customerService = new UpdateCustomerService();

      const customer = await customerService.updateCustomer({
        id,
        scheduledDateTime,
      });
      response.send(customer);
    } catch (error) {
      if (error instanceof Error) {
        response
          .status(500)
          .send({ message: error.message });
      }
    }
  }
}
