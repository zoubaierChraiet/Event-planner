import { Module } from '@nestjs/common';
import { UsersModule } from 'src/modules/users/users.module';
import { UsersResolver } from '../modules/users/users.resolver';

@Module({
  imports: [UsersModule],
  providers: [UsersResolver],
  exports: [UsersResolver],
})
export class ResolversModule {}
