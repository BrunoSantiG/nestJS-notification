import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      recipientId: 'exemple-id',
      content: new Content('Você recebeu uma solicitação'),
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });
});
