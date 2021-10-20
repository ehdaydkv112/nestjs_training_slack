/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post, Query, Req, Res, UseInterceptors } from '@nestjs/common';
import { JoinRequestDto } from './dto/join.request.dto';
import { UsersService } from './users.service';
import { ApiCookieAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserDto } from 'src/common/dto/user.dto';
import { User } from 'src/common/decorators/user.dacorator';
import { UndefinedToNullInterceptor } from 'src/common/interceptors/undefinedToNull.interceptors';

@UseInterceptors(UndefinedToNullInterceptor) // 이 컨트롤러에서 리턴하는 값은 모두 이렇게 적용됨 
@ApiTags('USERS')
@Controller('api/users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @ApiOperation({ summary:'회원가입'})
  @Post()
  join(@Body() body: JoinRequestDto) {
    this.usersService.postUsers(body.email, body.nickname, body.password)
    return
  }

  @ApiResponse({
    type: UserDto,
    status: 200,
    description: '성공',
  })
  @ApiResponse({
    type: UserDto,
    status: 500,
    description: '에러',
  })
  @ApiOperation({ summary: '내 정보 조회'})
  @Get()
  getUsers(@User() user) {
    return user;
  }

  @ApiResponse({
    type: UserDto,
    status: 200,
    description: '성공',
  })
  @ApiResponse({
    type: UserDto,
    status: 500,
    description: '에러',
  })
  @ApiOperation({ summary: '로그인' })
  @Post('login')
  postUsers(@Body() body: JoinRequestDto) {
    this.usersService.postUsers(body.email, body.nickname, body.password);
  }

  @Post('logout')
  logOut(@Req() req, @Res() res) {
    req.logOut();
    res.clearCookie('connect.sid', { httpOnly: true});
    res.send('ok');
  }
}