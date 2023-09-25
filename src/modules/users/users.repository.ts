import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { User } from './user.model';

@Injectable()
export class UsersRepository {
  constructor(private prisma: PrismaService) {}

  // get users
  async getAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany({
      include: {
        events: true,
      },
    });
  }

  // Create a user
  async createUser(params: { data: Prisma.UserCreateInput }): Promise<User> {
    const { data } = params;
    return this.prisma.user.create({
      data,
    });
  }
}
