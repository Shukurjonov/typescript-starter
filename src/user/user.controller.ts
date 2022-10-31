import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'
import { Request } from 'express';

@Controller('users')
export class UserController {
  // GET /users
  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  getMe(@Req() req: Request) {
    console.log({ user: req.user });

    return 'user info'
  }
}
