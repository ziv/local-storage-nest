import LocalStorageModule from './local-storage.module';
import { RouteInfo } from '@nestjs/common/interfaces';
import { MiddlewareConsumer, RequestMethod } from '@nestjs/common';

const testRoute: RouteInfo = {
  path: '*',
  method: RequestMethod.ALL
};

describe('local-storage.module', () => {
  it('should create local storage module', () => {
    expect(new LocalStorageModule()).toBeInstanceOf(LocalStorageModule);
  });

  it('should save options and return dynamic module', () => {
    const module = LocalStorageModule.forRoutes(testRoute);

    expect(LocalStorageModule.routes).toEqual([testRoute]);
    expect(module.module).toEqual(LocalStorageModule);
  });

  it('should consume the localStorage middleware', () => {
    const assert = jest.fn();

    class Consumer {
      apply(middleware) {
        return {
          forRoutes(routes) {
            assert(middleware, routes);
          }
        };
      }
    }

    const module = new LocalStorageModule();
    LocalStorageModule.routes = [testRoute];
    module.configure(new Consumer() as MiddlewareConsumer);
    expect(assert).toHaveBeenCalledWith(expect.any(Function), testRoute);
  });
});
