import { Router } from 'express';
import { CreateCustomerController } from './controllers/createCustomerController/CreateCustomerController';
import { validate } from './middlewares/ValidationMiddleware';
import { dataSchema } from './schemas/validationSchemas';
import { DeleteCustomerController } from './controllers/deleteCustomerController/DeleteCustomerController';
import { UpdateCustomerController } from './controllers/updateCustomerController/UpdateCustomerController';
import { ListCustomersController } from './controllers/listCustomersController/ListCustomersController';
import { GetCustomerController } from './controllers/getCustomerController/GetCustomerController';

const router = Router();

router.get('/customers', async (req, res) => {
  return new ListCustomersController().handle(req, res);
});

router.get('/customer', async (req, res) => {
  return new GetCustomerController().handle(req, res);
});

router.post('/customer', validate(dataSchema), async (req, res) => {
  return new CreateCustomerController().handle(req, res);
});

router.patch('/customer', async (req, res) => {
  return new UpdateCustomerController().handle(req, res);
});

router.delete('/customer', async (req, res) => {
  return new DeleteCustomerController().handle(req, res);
});

export { router };
