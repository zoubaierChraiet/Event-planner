import { Module } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { PrismaModule } from 'src/database/prisma.module';
import { UsersService } from './users.service';
import { User } from './user.model';
import { UsersResolver } from './users.resolver';

@Module({
  providers: [UsersRepository, UsersService, User, UsersResolver],
  exports: [UsersService, UsersRepository, UsersResolver],
  imports: [PrismaModule],
})
export class UsersModule {}
