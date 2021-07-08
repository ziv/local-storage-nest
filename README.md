# local-storage-nest

[![CI](https://github.com/ziv/local-storage-nest/actions/workflows/main.yml/badge.svg)](https://github.com/ziv/local-storage-nest/actions/workflows/main.yml)
[![CodeQL](https://github.com/ziv/local-storage-nest/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/ziv/local-storage-nest/actions/workflows/codeql-analysis.yml)
[![codecov](https://codecov.io/gh/ziv/local-storage-nest/branch/main/graph/badge.svg?token=4CXU2IUIL8)](https://codecov.io/gh/ziv/local-storage-nest)

[AsyncLocalStorage](https://nodejs.org/api/async_context.html#async_context_class_asynclocalstorage) Module for NestJs wrap [local-storage](https://github.com/ziv/local-storage) middleware.


## Install
```shell
npm i @xpr/local-storage-nest
```

## Usage

### Configure Routes

Register routes in your `root` module:

```typescript
import { LocalStorageModule } from '@xpr/local-storage-nest';
import { RequestMethod } from '@nestjs/common';

@Module({
  imports: [
    // assign localStorage middleware
    // on all routes
    LocalStorageModule.forRoutes({
      path: '*',
      method: RequestMethod.ALL
    })
  ]
})
```

### Injectable

The provided `AsyncStorage` works with injectable classes.

```typescript
import { Injectable } from '@nestjs/common';
import { AsyncStorage } from '@xpr/local-storage-nest';

@Injectable()
class Service {
  constructor(storage: AsyncStorage) {
  }
}
```

### Independent

Since `AsyncStorage` have no constructor, you can initiate it without injecting it.

```typescript
import { AsyncStorage } from '@xpr/local-storage-nest';

// ready to go
const asyncStorage = new AsyncStorage();
```

### Async Context

Accessing `AsyncStorage` outside of the async context created by the `AsyncStorage` will throw an exception.

---

![xpr-local-storage-nest](https://badgen.net/github/license/ziv/local-storage-nest)



