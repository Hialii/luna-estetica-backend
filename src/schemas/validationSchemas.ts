import {z} from 'zod';

export const dataSchema = z.object({
   body: z.object({
      name: z.string({required_error: "Nome é necessário"}),
      email: z.string({required_error: "Email é necessário"}).email("Email inválido"),
      service: z.string({required_error: "Serviço é necessário"}),
      scheduledDateTime: z.string({required_error: "Data e horário são necessários"}).datetime({ message: "Utilize formarto UTC '(0000-00-00T00:00:00Z)'"}) 

   })
})