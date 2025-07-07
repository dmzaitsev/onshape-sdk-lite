# onshape-sdk-lite

A minimal TypeScript/Node.js SDK for interacting with the Onshape REST API.

This package provides lightweight utilities for working with Onshape documents, parts, and assemblies using API keys or OAuth. It is designed for engineers and developers who need quick access to essential Onshape API features - without the complexity of the full Onshape SDK.

> ⚠️ This is a **limited version** - it will be updated regularly. Contributions and feedback are welcome!

---

## ✨ Features

- Easy setup with API key or OAuth2 Bearer token
- Lightweight wrapper for common endpoints (documents, assemblies, webhooks, etc.)
- Written in TypeScript with full typings
- Built for Node.js (no browser support)



## 🔧 Usage

```sh
npm install onshape-sdk-lite
```

```ts
import { OnshapeSdk } from 'onshape-sdk-lite';

OnshapeSdk.initializeSecrets({
  clientId: 'client', 
  clientSecret: 'secret'
});
// OR
OnshapeSdk.initializeOAuth2('bearer_token');

const assemblyService = OnshapeSdk.createAssemblyService();

const document = {
  documentId: 'documentId',
  wvm: OnshapeWVMType.WORKSPACE / VERSION / MICROVERSION,
  wvmId: 'wvmId'
};

const createdAssembly = await assemblyService.createAssembly(
  document,
  'MyNewAssembly' // Name of the assembly
);

console.log(createdAssembly);
```


## 📬 Contact

Questions, feedback, or ideas? 📧 Email: [dmytro.zaitsev1@gmail.com](dmytro.zaitsev1@gmail.com)

[GitHub repo](https://github.com/dmzaitsev/onshape-sdk-lite)