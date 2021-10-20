/* eslint-disable prettier/prettier */
import {ApiProperty} from '@nestjs/swagger';
import { JoinRequestDto } from 'src/users/dto/join.request.dto';
// 벨리데이션 붙이면 좋음

export class UserDto extends JoinRequestDto {
  @ApiProperty({
    required: true,
    example: 1,
    description: '아이디'
  })
  id: number;
}