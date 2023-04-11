const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const dotenv = require("dotenv");
const { message } = require("../../helpers/messages");
const EMAIL = process.env.EMAIL;
const PASS = process.env.PASS;
dotenv.config();
exports.send = (req, res) => {
  try {
    const form = {
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    };
    async function main() {
      let config = {
        service: "gmail",
        auth: {
          user: EMAIL,
          pass: PASS,
        },
      };
      let transporter = nodemailer.createTransport(config);
      // let MailGenerator = new Mailgen({
      //   theme: "default",
      //   product: {
      //     name: "Mailgen",
      //     link: "https://mailgen.js/",
      //   },
      // });
      // let resopnse = {
      //   body: {
      //     name: form.name,
      //     intro: `hi ${form.name}`,
      //     table: {
      //       data: [
      //         {
      //           item: "hi",
      //           description: form.message,
      //         },
      //       ],
      //     },
      //     outro: "thanks",
      //   },
      // };
      // let mail = MailGenerator.generate(resopnse);
      let email = {
        from: `<${EMAIL}>`,
        to: form.email,
        subject: form.subject,
        //   html: mail,
        text: `hi ${form.name}\n${form.message}`,
      };
      let info = await transporter.sendMail(email);
      return res.status(201).send(message("success", "email", info));
    }
    main().catch(console.log);
  } catch (err) {
    send(message("error", "email", err.message));
    console.error(err.message);
  }
};
exports.sessionEmailBroadcast = (req, res) => {
  try {
    const recipients = [
      { name: "musab 1", email: "musab0124887085@gmail.com" },
      { name: "musab 2", email: "musab19990124@gmail.com" },
      // { name: "Som3a", email: "messi2010508@gmail.com" },
    ];
    async function main() {
      let config = {
        service: "gmail",
        auth: {
          user: EMAIL,
          pass: PASS,
        },
      };
      let transporter = nodemailer.createTransport(config);
      const sendEmail = (recipient) => {
        return new Promise((resolve, reject) => {
          const email = {
            from: EMAIL,
            to: recipient.email,
            subject: "dynamic email",
            text: `Hi ${recipient.name}`,
          };
          transporter.sendMail(email, (err, info) => {
            if (err) {
              console.error(`Error sending email to ${recipient.email}:`, err);
              reject(err);
            } else {
              console.log(`Email sent to ${recipient.email}:`, info.response);
              resolve(info);
            }
          });
        });
      };

      Promise.all(recipients.map(sendEmail))
        .then((infoArray) => {
          return res.status(201).send(message("success", "email", infoArray));
        })
        .catch((err) => {
          console.error(err);
          return res.status(500).send(message("error", "email", err.message));
        });
    }
    main().catch(console.log);
  } catch (err) {
    console.error(err.message);
    send(message("error", "email", err.message));
  }
};
