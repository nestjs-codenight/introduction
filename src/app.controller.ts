import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import {LoggerInterceptor} from "./interceptor/Logger.interceptor";
import {TransformerInterceptor} from "./interceptor/Transformer.interceptor";
import {AuthGuard} from "./guards/auth.guard";
import {CheckYearGuard} from "./guards/CheckYear.guard";

@Controller()
@UseInterceptors(LoggerInterceptor)
@UseGuards(AuthGuard)
export class AppController {
  @Get()
  @UseGuards(CheckYearGuard)
  sayHello(): string {
    return "سال نو میلادی مبارک باد";
  }
  @Get("/data")
  sendData(): any {
    return {
      users: [{id: 1, name: "Erfan"}],
    };
  }
}

//app.use("/auth", router)
//app.use("/user", userRouter)
//app.get("/hello", (req, res) => {res.send("Hello Controller")})
