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

app.get('/data', async (req, res) => {
  const data = await Test.find({}).select('timestamp download upload ping');
  res.send({ data });
});

app.post('/webhook', async (req, res) => {
  const data = req.body;
  // @todo: Authentication
  const final = await mainTest();
  res.send(final);
});

app.get('/detail', async (req, res) => {
  // @todo: Authentication
  const data = await Test.find({});
  res.send({ data });
});

app.listen(app.get('port'), () => {
  console.log(`server started at http://localhost:${app.get('port')}`);
});
