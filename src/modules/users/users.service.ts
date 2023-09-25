import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { User } from './user.model';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}

  async getUsers(): Promise<User[]> {
    return this.usersRepository.getAllUsers();
  }

  // Create a user
  async addUser(params: {
    firstName: User['firstName'];
    lastName: User['lastName'];
    email: User['email'];
    phoneNumber: User['phoneNumber'];
    password: User['password'];
  }): Promise<User> {
    const { email, firstName, lastName, phoneNumber, password } = params;

    const hashedPassword = await hash(password, 10);

    return this.usersRepository.createUser({
      data: {
        email,
        firstName,
        lastName,
        phoneNumber,
        password: hashedPassword,
      },
    });
  }
}
