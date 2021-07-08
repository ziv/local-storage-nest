import { AsyncContext, getStore } from '@xpr/local-storage';
import { Request, Response } from 'express';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class AsyncStorage implements AsyncContext {
  get request(): Request {
    return this.store.request;
  }

  get response(): Response {
    return this.store.response;
  }

  get store(): AsyncContext {
    const store = getStore();
    if (!store) {
      throw new Error('calling "getStore" not in async hook context');
    }
    return store;
  }
}
