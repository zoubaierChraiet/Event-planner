import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { User as UserDB } from '@prisma/client';
import { Event } from '../event/event.model';

@ObjectType()
export class User {
  @Field(() => String)
  id: UserDB[`id`];

  @Field(() => String)
  firstName: UserDB[`firstName`];

  @Field(() => String)
  lastName: UserDB[`lastName`];

  @Field(() => String)
  email: UserDB[`email`];

  @Field(() => String)
  phoneNumber: UserDB[`phoneNumber`];

  @Field(() => String)
  password: UserDB[`password`];

  @Field(() => [String])
  eventsIds?: UserDB['eventsIds'];

  @Field(() => [Event])
  events?: Event[];

  @Field(() => GraphQLISODateTime)
  createdAt: UserDB['createdAt'];

  @Field(() => GraphQLISODateTime)
  updatedAt: UserDB['updatedAt'];
}
