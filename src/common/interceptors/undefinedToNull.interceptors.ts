/* eslint-disable prettier/prettier */
import {
  Injectable,
  CallHandler,
  ExecutionContext,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class UndefinedToNullInterceptor implements NestInterceptor<any, any> {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next
    .handle()
    .pipe(map((data) => data === undefined ? null : data));
  }
}

// 인터셉터 마지막에 데이터 한번 더 가공해주는 느낌으로,
// json은 undefined을 잘 못읽어서 undefined일 경우 null로 전환한다.