import type { Env } from "@okexchain/bytecraft";
import { MyWasmDappClient } from './clients/MyWasmDappContract';

export class Lib extends MyWasmDappClient {
  env: Env;

  constructor(env: Env) {
    super(env.cosmwasmClient, env.address, env.refs['my-wasm-dapp'].contractAddresses.default);
    this.env = env;
  }
};

export default Lib;
