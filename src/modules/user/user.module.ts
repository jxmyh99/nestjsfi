import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { HelloMiddleware } from 'src/middlewares/hello.middleware'

@Module({
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HelloMiddleware).forRoutes('user')
  }
}
