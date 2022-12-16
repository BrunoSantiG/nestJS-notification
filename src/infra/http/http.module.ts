import { Module } from '@nestjs/common';

import { CancelNotification } from '@application/use-cases/cancel-notification/cancel-notification';
import { SendNotification } from '@application/use-cases/send-notification/send-notification';
import { ReadNotification } from '@application/use-cases/read-notification/read-notification';
import { UnreadNotification } from '@application/use-cases/unread-notification/unread-notification';
import { CountRecipientNotification } from '@application/use-cases/count-recipient-notifications/count-recipient-notifications';
import { GetRecipientNotification } from '@application/use-cases/get-recipients-notifications/get-recipients-notifications';

import { DatabaseModule } from '../database/database.module';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnreadNotification,
    CountRecipientNotification,
    GetRecipientNotification,
  ],
})
export class HttpModule {}
