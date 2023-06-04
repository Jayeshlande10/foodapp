import { Logger } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './error_handler/globle.exception.filter';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.enableCors();
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  const PORT = process.env.PORT || 3000;
  app.listen(PORT)
    .then(() => {
      logger.log(`Application listening on post ${PORT}`);
    })
    .catch((error) => {
      console.log(error);
    })
}
bootstrap();

