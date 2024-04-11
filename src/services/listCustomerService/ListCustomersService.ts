import prismaClient from "../../prisma";

export class ListCustomersService {
   async listCustomer() {
      try{
         const customers = await prismaClient.costumer.findMany();

         return customers;
      }catch(error){
         if(error instanceof Error) {
            return {message: error.message}
         }
      }

   }
}