/* eslint-disable prettier/prettier */
import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, originalUrl } = request;
    const userAgent = request.get('user-agent');

    // 응답이 끝났을 때
    response.on('finish', () => {
      const { statusCode } = response;
      const contentLength = response.get('content-length');
      Logger.log(
        `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`,
      );
    });

    next();
  }
}

// implements 반드시 구현해야만 하는 것, 강제사항이 생김
