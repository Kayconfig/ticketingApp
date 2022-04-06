import { Publisher, Subjects, TicketUpdatedEvent } from '@kayconfig/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
