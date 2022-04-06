import { Subjects, Publisher, OrderCancelledEvent } from '@kayconfig/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
