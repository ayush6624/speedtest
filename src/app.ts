import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { Test, ITest } from './speed.model';
import { mainTest } from '.';

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.enable('trust proxy');

app.post('/webhook', async (req, res) => {
  const final = await mainTest();
  res.send(final);
});

app.listen(app.get('port'), () => {
  console.log(`server started at http://localhost:${app.get('port')}`);
});
