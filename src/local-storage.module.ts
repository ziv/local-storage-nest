import {
  DynamicModule,
  MiddlewareConsumer,
  Module,
  NestModule
} from '@nestjs/common';
import { RouteInfo } from '@nestjs/common/interfaces';
import { localStorage } from '@xpr/local-storage';
import AsyncStorage from './async-storage';

@Module({
  providers: [AsyncStorage],
  exports: [AsyncStorage]
})
export default class LocalStorageModule implements NestModule {
  static routes: RouteInfo[] = [];

  static forRoutes(...routes: RouteInfo[]): DynamicModule {
    LocalStorageModule.routes = routes;
    return {
      module: LocalStorageModule,
      providers: [AsyncStorage],
      exports: [AsyncStorage]
    };
  }

  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(localStorage()).forRoutes(...LocalStorageModule.routes);
  }
}
