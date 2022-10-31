import { Env, task } from "@okex/wasmknife";

task(async (env:Env) => {
  console.log(env);
  console.log("Template")
});
