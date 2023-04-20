import { Env, task } from "@okexchain/bytecraft";

task(async (env:Env) => {
  await env.client.execute(env.client.refs.mydapp.contractAddresses.default, env.defaultWallet, {
    freeze: {},
  });
  console.log("freeze done!")
});
