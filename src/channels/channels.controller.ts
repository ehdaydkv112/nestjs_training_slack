import { Controller, Get, Post, Query, Param, Body } from '@nestjs/common';
import { query } from 'express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('CHANNELS')
@Controller('api/workspaces/:url/channels')
export class ChannelsController {
  @Get()
  getAllChannels() {}

  @Post()
  createChannels() {}

  @Get('name')
  getSpecificChannel() {}

  @Get(':name/chats')
  getChats(@Query() query, @Param() param) {}

  @Post(':name/chats')
  postChat(@Body() body) {}

  @Get(':name/members')
  getAllMembers() {}

  @Post(':name/members')
  inviteMembers() {}
}
