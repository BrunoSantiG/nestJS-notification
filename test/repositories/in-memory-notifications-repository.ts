import { NotificationsRepository } from '@application/repositories/notifications-repositories';
import { Notification } from '@application/entities/notification';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async countManyByRecipientId(RecipientId: string): Promise<number> {
    const notifications = this.notifications.filter(
      (item) => item.recipientId === RecipientId,
    );

    return notifications.length;
  }

  async findManyByRecipientId(RecipientId: string): Promise<Notification[]> {
    return this.notifications.filter(
      (item) => item.recipientId === RecipientId,
    );
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (item) => item.id === notificationId,
    );
    if (!notification) {
      return null;
    }

    return notification;
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id === notification.id,
    );

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
