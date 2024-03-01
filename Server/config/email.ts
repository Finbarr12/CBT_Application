import { google } from "googleapis";
import * as nodemailer from "nodemailer";

const GOOGLE_ID =
  "1077811658485-8g4oaik299dr0m2mk0pj17ojt885t5tn.apps.googleusercontent.com";
const GOOGLE_SECRET = "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";
const GOOGLE_REFRESHTOKEN =
  "1//04LsoMZctMrd6CgYIARAAGAQSNwF-L9IrSWPagoisVJmHFIxbT4YEgBo3IfAaADIHrUAVugNGOxid8lQ_9GbBLDk8s6VqEYpgHE4";
const GOOGLE_REDIRECT = "https://developers.google.com/oauthplayground";

const oAuth = new google.auth.OAuth2(GOOGLE_ID, GOOGLE_SECRET, GOOGLE_REDIRECT);
oAuth.setCredentials({ access_token: GOOGLE_REFRESHTOKEN });

export const sendMail = async (to, subject, messages) => {
  const getAccessToken: any = (await oAuth.getAccessToken()).token;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "ogbonnafinbarr@gmail.com",
      clientId: GOOGLE_ID,
      clientSecret: GOOGLE_SECRET,
      refreshToken: GOOGLE_REFRESHTOKEN,
      accessToken: getAccessToken,
    },
  });

  const message = {
    from: `<exam@name.io>`,
    to: to,
    subject: subject,
    text: messages,
  };

  transport.sendMail(message);
};
