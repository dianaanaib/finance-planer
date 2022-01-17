
import './App.css'
import {getAllBankStatements} from './service'
import cors from 'cors'
import express from 'express'

const createApp = async () => {
  const app = express();
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  )

  app.use('/api/v1/data', getAllBankStatements);

  app.get('/*', (req, res, next) => {
    const err = new Error({
      message: 'Not found',
      status: 404,
    });
    next(err);
  });

return app
}

export default createApp
