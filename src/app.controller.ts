import {Controller, Delete, Get, Post, Put} from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  sayHello(): string {
    return "Hello Controller";
  }
}

//app.use("/auth", router)
//app.use("/user", userRouter)
//app.get("/hello", (req, res) => {res.send("Hello Controller")})
