import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotification } from './count-recipient-notifications';

describe('Count recipient notifications', () => {
  it('should be able to count a recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientCancelNotification = new CountRecipientNotification(
      notificationsRepository,
    );

    const recipientId = 'exemple-id';

    await notificationsRepository.create(makeNotification({ recipientId }));
    await notificationsRepository.create(makeNotification({ recipientId }));
    await notificationsRepository.create(
      makeNotification({ recipientId: 'other-recipient-id' }),
    );

    const { count } = await countRecipientCancelNotification.execute({
      recipientId,
    });

    expect(count).toBe(2);
  });
});
