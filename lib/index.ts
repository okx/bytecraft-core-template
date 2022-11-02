import type { Env } from "@okexchain/wasmknife";
import { {{client-name}} } from './clients/{{contract-name}}';

export class Lib extends {{client-name}} {
  env: Env;

  constructor(env: Env) {
    super(env.cosmwasmClient, env.address, env.refs['{{project-name}}'].contractAddresses.default);
    this.env = env;
  }
};

export default Lib;
