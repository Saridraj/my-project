import { Controller, Post, Body, Get } from '@nestjs/common';
import { User } from './user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController { 
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() user: User) {
    const register = await this.authService.register(user);
    return register;
  }

  @Post('signIn')
  async signIn(@Body() userData: User) {
    const data = await this.authService.signIn(userData);
    return data;
  }


  @Get()
  async getAllUsers() {
    const users = await this.authService.getAllUsers();
    return users;
  }
}
