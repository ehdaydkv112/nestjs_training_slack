/* eslint-disable prettier/prettier */
import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Users } from './Users';
import { Channels } from './Channels';
import { ApiProperty } from '@nestjs/swagger';

@Index('UserId', ['UserId'], {})
@Index('ChannelId', ['ChannelId'], {})
@Entity({ schema: 'sleact', name: 'channelchats' })
export class ChannelChats {
  @ApiProperty({
    example: "taejin@taejin.com",
    description: '사용자 아이디',
  })
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @ApiProperty({
    example: "아야아아아",
    description: '내용',
  })
  @Column('text', { name: 'content' })
  content: string;

  @ApiProperty({
    example: 1,
    description: '날짜',
  })
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column('int', { name: 'UserId', nullable: true })
  UserId: number | null;

  @Column('int', { name: 'ChannelId', nullable: true })
  ChannelId: number | null;

  @ManyToOne(() => Users, (users) => users.ChannelChats, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'UserId', referencedColumnName: 'id' }])
  User: Users;

  @ManyToOne(() => Channels, (channels) => channels.ChannelChats, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'ChannelId', referencedColumnName: 'id' }])
  Channel: Channels;
}
