import 'dotenv/config';

export const port = process.env.PORT || 3200;
export const env = process.env.NODE_ENV || 'test';
export const twilioConfig = {
  accountSid: process.env.TWILIO_ACCOUNT_SID || '',
  authToken: process.env.TWILIO_AUTH_TOKEN || '',
  from: process.env.TWILIO_PHONE_NUMBER || '',
}
export const nodemailerConfig = {
  auth: {
    user: process.env.NODEMAILER_USER || '',
    pass: process.env.NODEMAILER_PASS || '',
  },
  options: {
    from: process.env.NODEMAILER_FROM || '',
    to: process.env.NODEMAILER_TO || '',
  }
}
