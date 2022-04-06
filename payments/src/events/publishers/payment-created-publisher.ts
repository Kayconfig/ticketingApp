import { Subjects, Publisher, PaymentCreatedEvent } from '@kayconfig/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
