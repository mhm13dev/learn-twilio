import "dotenv/config";
import { Twilio } from "twilio";

const client = new Twilio(
  process.env.TWILIO_API_KEY_SID,
  process.env.TWILIO_API_KEY_SECRET,
  { accountSid: process.env.TWILIO_ACCOUNT_SID }
);

const to = process.env.TWILIO_TO_PHONE_NUMBER!;
const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID!;
const body = "Hello from Twilio!";

client.messages
  .create({
    messagingServiceSid,
    to,
    body,
  })
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
