import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@kayconfig/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
