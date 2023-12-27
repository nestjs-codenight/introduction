import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from "@nestjs/common";
import {Observable, map, tap} from "rxjs";

@Injectable()
export class TransformerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>) {
    //before

    console.log("Before route handler...");
    console.log(new Date().getTime());

    //after
    return next.handle().pipe(
      map((data) => {
        if (typeof data === "string") {
          return {
            data: {
              message: data,
            },
          };
        }
        return {
          data,
        };
      })
    );
  }
}
