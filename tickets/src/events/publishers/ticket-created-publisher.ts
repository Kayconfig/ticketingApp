import { Publisher, Subjects, TicketCreatedEvent } from '@kayconfig/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
