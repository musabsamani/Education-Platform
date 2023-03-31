const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
exports.send = (req, res) => {
  const EMAIL = process.env.EMAIL;
  const PASS = process.env.PASS;
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
    let MailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "Mailgen",
        link: "https://mailgen.js/",
      },
    });
    let resopnse = {
      body: {
        name: form.name,
        intro: `hi ${form.name}`,
        table: {
          data: [
            {
              item: "hi",
              description: form.message,
            },
          ],
        },
        outro: "thanks",
      },
    };
    let mail = MailGenerator.generate(resopnse);
    let message = {
      from: `<${EMAIL}>`,
      to: form.email,
      subject: form.subject,
      //   html: mail,
      text: `hi ${form.name}\n${form.message}`,
    };
    let info = await transporter.sendMail(message).then(() => {
      return res.status(201).send("Email send !!!");
    });
  }
  main().catch((err) => console.error(err.message));
};
