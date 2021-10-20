import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiTags, ApiParam } from '@nestjs/swagger';

@ApiTags('DMS')
@Controller('api/workspaces/:url/dms')
export class DmsController {
  // @Get(':id/chats')
  // getChat(@Query('perPage') perPage, @Query('page') page) {
  //   console.log(perPage, page);
  // }
  // 이렇게 쿼리로 한번에 가져와도 되고, 여러개로 나눠도 됨
  @ApiParam({
    name: 'url',
    required: true,
    description: '워크 스페이스 url',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: '사용자 id',
  })
  @ApiQuery({
    name: 'perPage',
    required: true,
    description: '한번에 가져오는 개수',
  })
  @ApiQuery({
    name: 'page',
    required: true,
    description: '불러올 페이지',
  })
  @Get(':id/chats')
  getChat(@Query() query, @Param() param) {
    console.log(query.perPage, query.page);
    console.log(param.id, param.url);
  }

  @Post(':id/chats')
  postChat(@Body() body) {}
}
