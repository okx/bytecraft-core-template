import type { Env } from "okex/wasmknife";
import { {{client-name}} } from './clients/{{client-name}}';

export class Lib extends {{client-name}} {
  env: Env;

  constructor(env: Env) {
    super(env.cosmwasmClient, env.address, env.refs['{{project-name}}'].contractAddresses.default);
    this.env = env;
  }
};

export default Lib;
