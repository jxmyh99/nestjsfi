import { Prop, Schema } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  @ApiProperty({
    description: '用户手机号',
    example: '18012341234',
  })
  readonly phone: string;

  @Prop()
  @ApiProperty({
    description: '密码',
    example: '000000',
  })
  readonly passworld: string;

  @Prop()
  readonly salt: string;
}
