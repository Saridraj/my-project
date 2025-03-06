import { Module } from '@nestjs/common';
import { PostController } from './post.controller';
import { PostService } from './post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Posts } from './post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Posts]),
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  controllers: [PostController],
  providers: [PostService]
})
export class PostModule {}
