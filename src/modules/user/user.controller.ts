import {
  Body,
  Controller,
  Post,
  UseGuards,
  Get,
  SetMetadata,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth.guard';
import { User } from 'src/interface/user.interface';
import { Role } from '../roles/role.decorator';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('用户模块')
@UseGuards(AuthGuard)
export class UserController {
  constructor(private userService: UserService) {}
  @Post('regist')
  @ApiOperation({
    summary: '用户注册',
  })
  async registUser(@Body() userDto: User) {
    return await this.userService.regist(userDto);
  }

  @Get('hello')
  // 设置权限用户
  // @SetMetadata('roles', ['admin'])
  @Role('admin')
  hello() {
    return 'hello world';
  }
}
