export interface Data {
  error?: string;
  type: string;
  timestamp: string;
  ping: Ping;
  download: Load;
  upload: Load;
  packetLoss: number;
  isp: string;
  interface: Interface;
  server: Server;
  result: Result;
}

export interface Load {
  bandwidth: number;
  bytes: number;
  elapsed: number;
  speed?: String;
}

export interface Interface {
  internalIp: string;
  name: string;
  macAddr: string;
  isVpn: boolean;
  externalIp: string;
}

export interface Ping {
  jitter: number;
  latency: number;
}

export interface Result {
  id: string;
  url: string;
}

export interface Server {
  id: number;
  name: string;
  location: string;
  country: string;
  host: string;
  port: number;
  ip: string;
}

export const convertToSpeed = (bandwidth: number): string => {
  bandwidth /= 125000;
  const speed: string = bandwidth.toFixed(2).toString() + ' Mbps';
  return speed;
};
