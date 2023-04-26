import express, { Express } from 'express';
import dotenv from 'dotenv';
import routes from './src/init/routes';
import localize from './src/init/localize';
import db from './src/init/db';
import theApp from './src/init/theApp';
import bodyParser from 'body-parser';

const app: Express = express();

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

export const server = app.listen(8081, () => {
  console.log(`pet shop Server is running at https://localhost:${6060}`);
})


server.timeout = 1000000;

dotenv.config();

const cors = require('cors');
const corsOptions = {
  origin: '*',
};

app.use(bodyParser.json({limit: '0.5mb'}));
app.use(bodyParser.urlencoded({limit: "0.5mb", extended: true, parameterLimit:5000}));
app.use(bodyParser.text({ limit: '0.5mb' }));

app.use(cors(corsOptions));

theApp(app);
localize(app);
db();
routes(app);

app.get('/', (req, res) => {
  res.send('pet shop Server World!')
})



export default app;
