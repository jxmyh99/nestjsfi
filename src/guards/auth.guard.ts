import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // 取当前接口是否有权限要求 有返回的则是一个数组 ['admin']
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    // 返回 ['admin'] 则需要权限  undefined则无需要权限
    // console.log('roles', roles);
    // 如果不需要特定权限 则直接返回true
    if (!roles) {
      return true;
    }
    // 需要权限

    return true;
  }
}
