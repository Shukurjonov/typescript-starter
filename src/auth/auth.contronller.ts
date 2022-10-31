import { AuthDto } from './dto';
import { AuthService } from './auth.service';
import { Controller, Post, Body } from '@nestjs/common'

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
  }

  @Post('signup')
  signup(@Body() dto: AuthDto) {

    // console.log(req.body); // Data transfer object DTO
    /* console.log({
      dto
    }); */
    return this.authService.signup(dto)
  }

  @Post('signin')
  singin(@Body() dto: AuthDto) {
    return this.authService.singin(dto)
  }
} 