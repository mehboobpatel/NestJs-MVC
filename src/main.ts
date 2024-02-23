import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);


  //we used ".." to go one dir back as it with __dirname it will consider the dir of main.ts
  app.useStaticAssets(join(__dirname,"..",'public'))
  console.log(__dirname,"..",'public')
  app.setBaseViewsDir(join(__dirname, "..", 'view'))
  app.setViewEngine('hbs')

  await app.listen(3000);
}
bootstrap();
