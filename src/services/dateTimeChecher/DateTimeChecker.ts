import prismaClient from "../../prisma";

export async function DateTimeChecker(dateTime: Date) { 
   const dateTimeExists = await prismaClient.costumer.findFirst({
      where: {
         scheduledDateTime: dateTime
      
   }
 })

 if(dateTimeExists) {
   return false;
 }

 return true;
   
}