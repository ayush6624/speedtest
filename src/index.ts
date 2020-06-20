// Divide by 125000 bits -> Mbits

import { Test } from './speed.model';
import { Data, convertToSpeed } from './util';
const exec = require('child_process').exec;

let result: string = '';

const child = exec('./bin/speedtest -f json');

child.stdout.on('data', function (data: any) {
  result += data;
});

child.on('close', function () {
  console.log('closed!!');
  helperFunction(result);
});

const helperFunction = async (result: any) => {
  const data: Data = JSON.parse(result);
  if (data.error) {
    console.log('Error ' + data.error);

    return;
  }
  data.download.speed = convertToSpeed(data.download.bandwidth);
  data.upload.speed = convertToSpeed(data.upload.bandwidth);
  try {
    const response = await Test.create(data);
    if (response) console.log('Successfull');
  } catch (err) {
    console.log('Error => ', err);
  }
};
