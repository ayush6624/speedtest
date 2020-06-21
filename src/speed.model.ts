import { Schema, Document, Model } from 'mongoose';
import { mongoose } from './db';
import { Load, Ping, Interface, Result, Server, Data } from './util';

// Schema
const Speed: Schema<Load> = new Schema(
  {
    bandwidth: { type: Number },
    bytes: { type: Number },
    elapsed: { type: Number },
    speed: { type: String },
  },
  { _id: false }
);

const Ping: Schema<Ping> = new Schema(
  {
    latency: { type: Number },
    jitter: { type: Number },
  },
  { _id: false }
);
const Client: Schema<Interface> = new Schema(
  {
    internalIp: { type: String },
    name: { type: String },
    macAddr: { type: String },
    isVpn: { type: Boolean },
    externalIp: { type: String },
  },
  { _id: false }
);

const Result: Schema<Result> = new Schema(
  {
    id: { type: String },
    url: { type: String },
    image: { type: String },
  },
  { _id: false }
);

const Server: Schema<Server> = new Schema(
  {
    id: { type: Number },
    name: { type: String },
    location: { type: String },
    country: { type: String },
    host: { type: String },
    port: { type: Number },
    ip: { type: String },
  },
  { _id: false }
);

const SpeedSchema: Schema = new Schema({
  type: { type: String, required: true },
  timestamp: { type: Date, required: true }, //date
  ping: { type: Ping },
  download: { type: Speed },
  upload: { type: Speed },
  packetLoss: { type: Number },
  isp: { type: String },
  interface: { type: Client },
  server: { type: Server },
  result: { type: Result },
});

// Types
export interface ITest extends Data, Document {}

export interface ITestModel extends Model<ITest> {}

// Model
export const Test = mongoose.model<ITest>('Test', SpeedSchema);
