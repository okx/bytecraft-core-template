import { Env, task } from "@okexchain/wasmknife";

task(async (env:Env) => {
  console.log(env);
  console.log("Template")
});
