import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IResponse } from 'src/interface/response.interface';
import { User } from 'src/interface/user.interface';

const logger = new Logger('user.service');
@Injectable()
export class UserService {
  private response: IResponse;
  constructor(
    @InjectModel('USER_MODEL') private readonly userModel: Model<User>,
  ) {}

  /**
   *
   * 注册方法
   * @private
   * @param {User} user
   * @returns
   * @memberof UserService
   */
  public async regist(user: User) {
    return this.findOneUserPhone(user.phone)
      .then((res) => {
        if (!!res.length) {
          this.response = {
            code: 0,
            msg: '当前手机号已注册',
          };
          throw this.response;
          // console.log('该用户已注册=>', res);
          // throw Error('用户已注册');
        }
      })
      .then(() => {
        try {
          const createUser = new this.userModel(user);
          createUser.save();
          this.response = {
            code: 1,
            msg: '用户注册成功',
          };
          return this.response;
        } catch (error) {
          this.response = {
            code: 2,
            msg: '用户注册失败,请联系相关负责人。错误详情：' + error,
          };
          throw this.response;
        }
      })
      .catch(() => {
        logger.log(`${user.phone} -- ${this.response.msg}`);
        return this.response;
      });
  }
  /**
   *
   * 通过手机号查询出一个用户
   * @private
   * @param {string} phone 用户手机号
   * @returns
   * @memberof UserService
   */
  private async findOneUserPhone(phone: string) {
    return this.userModel.find({
      phone: phone,
    });
  }
}
