import { Env, task } from "@okexchain/wasmknife";
import Lib from '../lib';

task(async (env: Env) => {
  const lib = new Lib(env);
  console.log("count 1 = ", await lib.getCount());
  await lib.increment();
  console.log("count 2 = ", await lib.getCount());
});
