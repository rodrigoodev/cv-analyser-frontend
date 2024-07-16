import { Resend } from "resend";
import { render } from "@vue-email/render";
import feedbackAnalyse from "~/emails/feedbackAnalyse.vue";

const resend = new Resend(process.env.RESEND_KEY);

export default defineEventHandler(async (event) => {
  const { email, feedbackResponse } = await readBody(event);

  const template = await render(feedbackAnalyse, {
    feedbackResponse,
  });

  const options = {
    from: "update@updates.olhameucv.dev",
    to: email,
    subject: "Avaliação de currículo",
    html: template,
  };

  try {
    await resend.emails.send(options);

    return { message: "Email sent" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { message: "Failed to send email", error };
  }
});
