// Divide by 125000 bits -> Mbits

import { Test } from './speed.model';
import { Data, convertToSpeed, generateImage } from './util';
import { mongoose } from './db';
import util from 'util';

const helperFunction = async (result: any) => {
  const data: Data = JSON.parse(result);
  if (data.error) {
    console.log('Error ' + data.error);
    return false;
  }
  data.download.speed = convertToSpeed(data.download.bandwidth);
  data.upload.speed = convertToSpeed(data.upload.bandwidth);
  data.result.image = generateImage(data.result.url);
  try {
    const response = await Test.create(data);
    if (response) console.log('Successfull');
    await mongoose.disconnect();
    return response;
  } catch (err) {
    console.log('Error => ', err);
    return { error: err };
  }
};

export const mainTest = async () => {
  const execFile = util.promisify(require('child_process').execFile);
  // const child = exec('./bin/speedtest -f json');
  const { stdout: result } = await execFile('./bin/speedtest', ['-f', 'json']);
  const ok = await helperFunction(result); // pass from cli!
  return ok;
};
