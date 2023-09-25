import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { Event } from './event.model';

@Injectable()
export class EventsRepository {
  constructor(private prisma: PrismaService) {}

  // get events
  async getAllEvents(): Promise<Event[]> {
    return this.prisma.event.findMany({
      include: {
        users: true,
      },
    });
  }

  // Create event
  async createEvent(params: { data: Prisma.EventCreateInput }): Promise<Event> {
    const { data } = params;
    return this.prisma.event.create({
      data,
    });
  }
}
