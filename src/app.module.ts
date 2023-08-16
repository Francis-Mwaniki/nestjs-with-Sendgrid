import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MailController } from './mail/mail.controller';
import { MailModule } from './mail/mail.module';
import { SendgridService } from './sendgrid/sendgrid.service';

@Module({
  imports: [ConfigModule.forRoot(), MailModule],
  controllers: [AppController, MailController],
  providers: [AppService, SendgridService],
})
export class AppModule {}
