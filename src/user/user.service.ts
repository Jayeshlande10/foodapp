import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { user } from './dto/user';
import { UserDocument } from './schema/user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel('user') private readonly userModel: Model<UserDocument>) { }

  async find(): Promise<any> {
    const result = await this.userModel.find()
    if (result.length) {
      return result
    }
    return await this.userModel.create(user)
  }
}