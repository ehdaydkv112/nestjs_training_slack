import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/entities/Users';
import { Repository } from 'typeorm';
import bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async postUsers(email: string, nickname: string, password: string) {

    if(!email || !nickname || !password) {
      throw new Error('양식이 맞지 않습니다.');
    }

    const user = await this.usersRepository.findOne({ where: { email } });
    if(user){
      throw new Error('이미 존재하는 사용자입니다.');
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      await this.usersRepository.save({
        email,
        nickname,
        password: hashedPassword,
      });
  }
}

// 모듈 // 컨트롤러 (서비스들 호출)
// 서비스는 레포를 통해 엔티티에 쿼리를 날린다.
// 로직 담당인 서비스와 테이블인 엔티티 사이를 레포지토리가 연결해준다.