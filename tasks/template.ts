import { Env, task } from "@okexchain/bytecraft";

task(async (env:Env) => {
  console.log(env);
  console.log("Template")
});
