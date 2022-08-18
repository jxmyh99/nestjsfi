import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Log4jsLogger } from '@nestx-log4js/core';
import { AppModule } from './app.module';

const listenPort = 3000;
// 原生日志
const logger = new Logger('main.ts');
/**
 * 启动主方法
 */
const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  /**
   * 配置 swgger
   */
  const options = new DocumentBuilder()
    .setTitle('项目管理平台')
    .setDescription('xxx接口文档')
    .setVersion('1.0')
    // .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger-ui', app, document);
  /**
   * 使用log4js 日志框架
   */
  app.useLogger(app.get(Log4jsLogger));
  await app.listen(listenPort);
};

bootstrap().then(() => {
  logger.log(`listen in http://localhost:${listenPort}/swagger-ui`);
});
