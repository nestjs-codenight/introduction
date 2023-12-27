import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {ValidationPipe} from "@nestjs/common";
import {LoggerFunction} from "./middleware/logger";
import {TransformerInterceptor} from "./interceptor/Transformer.interceptor";
import {AuthGuard} from "./guards/auth.guard";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(LoggerFunction);
  // app.useGlobalInterceptors(new TransformerInterceptor());
  app.useGlobalGuards(new AuthGuard())
  await app.listen(3000, () => {
    console.log("Server run on port 3000");
  });
}
bootstrap();
