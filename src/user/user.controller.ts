import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './user.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('/login')
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  async find() {
    return this.usersService.find();
  };

 
}