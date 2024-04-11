import express from 'express';
import { router } from './routes';
import cors from 'cors';


const main = async () => {
  const app = express();
  app.use(cors())
  app.use(express.json());
  app.use(router);
  const port = 3000;

  app.listen(port, () => {
   console.log("servidor rodando")
  })

};

main();

