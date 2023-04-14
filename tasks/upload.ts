import { Env, task } from "@okexchain/bytecraft";

task(async (env:Env) => {
  let whitelistCodeId = await env.deploy.storeCode('cw1-whitelist', env.defaultWallet);

  console.log("cw1-whitelist is: " + whitelistCodeId)
});
