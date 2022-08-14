import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const listenPort = 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  console.log(`listen in http://localhost:${listenPort}`)
  await app.listen(listenPort)
}
bootstrap()
