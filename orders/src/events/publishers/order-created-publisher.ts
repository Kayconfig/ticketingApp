import { Publisher, OrderCreatedEvent, Subjects } from '@kayconfig/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
