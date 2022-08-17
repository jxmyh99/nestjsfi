import { Module } from '@nestjs/common'
import { Log4jsModule } from '@nestx-log4js/core'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DbModule } from './db/db.module'
import { UserModule } from './modules/user/user.module'

@Module({
  imports: [DbModule, UserModule, Log4jsModule.forRoot()],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
