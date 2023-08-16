import { Controller, Post, Body } from '@nestjs/common';
import { SendgridService } from 'src/sendgrid/sendgrid.service';

@Controller('mail')
export class MailController {
  constructor(private readonly sendgridService: SendgridService) {}

  // Here we use query parameter to get the email that we want to send
  @Post('send-email')
  async sendEmail(@Body('email') email: string) {
    const mail = {
      to: email,
      subject: 'Hello from sendgrid',
      from: 'acewearske@gmail.com', // Fill it with your validated email on SendGrid account
      text: 'Hello',
      html: '<h1>Hello</h1>',
    };

    return await this.sendgridService.send(mail);
  }
}
