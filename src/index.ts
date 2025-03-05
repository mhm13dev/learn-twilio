import { Twilio } from "twilio";

const client = new Twilio(
  Bun.env.TWILIO_API_KEY_SID,
  Bun.env.TWILIO_API_KEY_SECRET,
  { accountSid: Bun.env.TWILIO_ACCOUNT_SID }
);

const to = Bun.env.TWILIO_TO_PHONE_NUMBER!;
const messagingServiceSid = Bun.env.TWILIO_MESSAGING_SERVICE_SID!;
const body = "Hello from Twilio!";

client.messages
  .create({
    messagingServiceSid,
    to,
    body,
  })
  .then((message) => console.log(message))
  .catch((error) => console.error(error));
