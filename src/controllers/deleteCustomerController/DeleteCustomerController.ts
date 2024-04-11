import { Request, Response } from "express";
import { DeleteCustomerService } from "../../services/deleteCustomerService/DeleteCustomerService";

export class DeleteCustomerController{
   async handle(request: Request, response: Response) {
      try {
         const customerService = new DeleteCustomerService();
         const {id} = request.query as {id: string}
   
         const customer = await customerService.deleteCustomer({id})
   
        response.send(customer)
      }catch(error) {
         if (error instanceof Error){
            response.status(500).send({ error: 'Ocorreu um erro ao deletare cliente.' });
         }
      }

   }
}