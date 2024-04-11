import { Costumer } from '@prisma/client';
import prismaClient from '../../prisma';
import {
  ICreateCustomerService,
  ICreateCustumerData,
} from './ICreateCustomerService';
import { DateTimeChecker } from '../dateTimeChecher/DateTimeChecker';

export class CreateCustomerService implements ICreateCustomerService {
  async createCustomer(data: ICreateCustumerData): Promise<Costumer> {
    try {
      const dateTimeExists = await DateTimeChecker(data.scheduledDateTime);

      if (!dateTimeExists) {
        throw new Error(
          'Horário de agendamento já escolhido. Por favor, escolha outro horário.'
        );
      }
      const customer = await prismaClient.costumer.create({
        data,
      });

      return customer;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      } else {
        throw new Error('Ocorreu um erro ao criar o cliente.');
      }
    }
  }
}
