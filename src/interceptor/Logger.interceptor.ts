import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import {Observable, tap} from "rxjs";

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>) {
    //before

    console.log("Before route handler...");
    console.log(new Date().getTime());

    //after
    return next
      .handle()
      .pipe(tap(() => console.log("After route handler...", Date.now())));
  }
}
