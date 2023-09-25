import { Injectable } from '@nestjs/common';
import { EventsRepository } from './events.repository';
import { Event } from './event.model';

@Injectable()
export class EventsService {
  constructor(private eventsRepository: EventsRepository) {}

  async getEvents(): Promise<Event[]> {
    return this.eventsRepository.getAllEvents();
  }

  // Create event
  async addEvent(params: {
    name: Event['name'];
    description: Event['description'];
    adress: Event['adress'];
    startDate: Event['startDate'];
    endDate: Event['endDate'];
    users?: Event['userIDs'];
  }): Promise<Event> {
    const { adress, name, description, startDate, endDate, users } = params;

    return this.eventsRepository.createEvent({
      data: {
        adress,
        name,
        description,
        startDate,
        endDate,
        users: {
          connect: users.map((x) => ({ id: x })),
        },
      },
    });
  }
}
