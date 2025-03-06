import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://devvbetter:devvbetter@my-project-database.llwpf.mongodb.net/?retryWrites=true&w=majority&appName=my-project-database', // Change to your DB URL
      database: 'blog',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    AuthModule,
    PostModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
