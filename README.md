# ByteCraft Core Template

Main ByteCraft template used as workspace directory which will have **contracts** directories that holds the code managed by the workspace. For more info about [ByteCraft check this url](https://github.com/okx/bytecraft).

```
my-wasm-dapp
├─ .gitignore
├─ README.md
├─ config.json
├─ contracts
│  └─ my-wasm-dapp
│     ├─ Cargo.lock
│     ├─ Cargo.toml
│     ├─ examples
│     │  └─ schema.rs
│     ├─ schema
│     │  ├─ count_response.json
│     │  ├─ execute_msg.json
│     │  ├─ instantiate_msg.json
│     │  ├─ query_msg.json
│     │  └─ state.json
│     └─ src
│        ├─ contract.rs
│        ├─ error.rs
│        ├─ helpers.rs
│        ├─ integration_tests.rs
│        ├─ lib.rs
│        ├─ msg.rs
│        └─ state.rs
├─ keys.js
├─ lib
│  └─ index.ts
├─ package-lock.json
├─ package.json
├─ refs.json
└─ tasks
   ├─ example-custom-logic.ts
   ├─ example-with-lib.ts
   └─ template.ts

```