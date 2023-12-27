import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import {AppController} from "./app.controller";
import {UserModule} from "./user/user.module";
import {LoggerMiddleware} from "./middleware/logger.middleware";
import {UserController} from "./user/user.controller";
import {LoggerFunction} from "./middleware/logger";
import {APP_INTERCEPTOR} from "@nestjs/core";
import {TransformerInterceptor} from "./interceptor/Transformer.interceptor";

@Module({
  imports: [UserModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformerInterceptor
    }
  ],
  controllers: [AppController],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(
      {
        path: "/user",
        method: RequestMethod.GET,
      },
      {
        path: "/user",
        method: RequestMethod.POST,
      },
      AppController,
      "/user/register"
    );
  }
}
