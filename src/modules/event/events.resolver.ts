import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EventsService } from './events.service';
import { Event } from './event.model';

@Resolver('Event')
export class EventsResolver {
  constructor(private eventsService: EventsService) {}

  @Query(() => [Event])
  async getAllEvents(): Promise<Event[]> {
    try {
      const events = await this.eventsService.getEvents();
      return events;
    } catch (err: any) {
      throw new Error(err.message);
    }
  }

  @Mutation(() => Event)
  async addEvent(
    @Args({ name: 'name', type: () => String }) name: string,
    @Args({ name: 'description', type: () => String }) description: string,
    @Args({ name: 'adress', type: () => String }) adress: string,
    @Args({ name: 'startDate', type: () => Date }) startDate: Date,
    @Args({ name: 'endDate', type: () => Date }) endDate: Date,
    @Args({ name: 'usersIds', type: () => [String] })
    usersIds?: string[],
  ): Promise<Event> {
    const addedEvent = await this.eventsService.addEvent({
      adress,
      description,
      name,
      startDate,
      endDate,
      users: usersIds,
    });
    return addedEvent;
  }
}
