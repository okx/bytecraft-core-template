import { Env, task } from "@okexchain/bytecraft";

task(async (env:Env) => {


  const accounts = await env.defaultWallet.getAccounts()

  const whiteListCodeId = 576
  let admins = ["0xbbE4733d85bc2b90682147779DA49caB38C0aA1F"]
  
  let initMsg = {"admins":admins,"mutable":true}
  //instantiate 
  const routerAddress = await env.deploy.instantiate(
    // Contract name
    'cw1-whitelist',
    // Signer
    env.defaultWallet,
{
        codeId:whiteListCodeId,
        // Contract admin
        admin: accounts[0].address,
        init: initMsg,
    },
);
console.log(`router Address: ${routerAddress}`);

await env.client.execute(routerAddress, env.defaultWallet, {
  freeze: {},
});
  console.log("freeze done!")
  
let queryRes = await env.client.query(routerAddress, {
  admin_list: {}
});  
console.log("now admin is : " + JSON.stringify(queryRes))  
  
  

});
