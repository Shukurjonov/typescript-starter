import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UserController {
  // GET /users
  @Get('me')
  getMe() {
    return 'user info'
  }
}
