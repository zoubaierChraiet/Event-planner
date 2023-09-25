import { Field, GraphQLISODateTime, ObjectType } from '@nestjs/graphql';
import { Event as EventDB } from '@prisma/client';
import { User } from '../users/user.model';

@ObjectType()
export class Event {
  @Field(() => String)
  id: EventDB[`id`];

  @Field(() => String)
  name: EventDB[`name`];

  @Field(() => String)
  description: EventDB[`description`];

  @Field(() => String)
  startDate: EventDB[`startDate`];

  @Field(() => String)
  endDate: EventDB[`endDate`];

  @Field(() => String)
  adress: EventDB[`adress`];

  @Field(() => [String])
  userIDs?: EventDB[`userIDs`];

  @Field(() => [User])
  users?: User[];

  @Field(() => GraphQLISODateTime)
  createdAt?: EventDB['createdAt'];

  @Field(() => GraphQLISODateTime)
  updatedAt?: EventDB['updatedAt'];
}
