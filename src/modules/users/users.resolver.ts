import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/modules/users/user.model';
import { UsersService } from 'src/modules/users/users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(() => [User])
  async getAllUsers(): Promise<User[]> {
    try {
      const users = await this.userService.getUsers();
      return users;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  @Mutation(() => User)
  async addUser(
    @Args({ name: 'firstName', type: () => String }) firstName: string,
    @Args({ name: 'lastName', type: () => String }) lastName: string,
    @Args({ name: 'email', type: () => String }) email: string,
    @Args({ name: 'phoneNumber', type: () => String }) phoneNumber: string,
    @Args({ name: 'password', type: () => String }) password: string,
  ): Promise<User> {
    const addedUser = await this.userService.addUser({
      email,
      firstName,
      lastName,
      phoneNumber,
      password,
    });
    return addedUser;
  }
}
