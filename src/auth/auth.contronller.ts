import { Controller, Post, Body, HttpCode, HttpStatus, Req } from '@nestjs/common'
import { AuthDto } from './dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Post('signup')
  signup(@Body() dto: AuthDto) {
    return this.authService.signup(dto)
  }

  @HttpCode(HttpStatus.OK)
  @Post('signin')
  singin(@Body() dto: AuthDto) {
    return this.authService.singin(dto)
  }
} 