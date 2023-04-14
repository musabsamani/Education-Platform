const { getDayOfWeek, getMonths, getTimeWithAMPM } = require("../../helpers/helpersFunction");
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
    console.error(err.message);
    return res.status(500).send(message("error", "email", err.message));
  }
};
exports.sessionNotify = (req, res) => {
  try {
    const subjectCode = req.body["lesson[subject][code]"];
    const lesson = req.body["lesson[name]"];
    const volunteer = req.body["volunteer[name]"];
    const volunteerEmail = req.body["volunteer[email]"];
    const room = req.body["room[name]"];
    const start = new Date(req.body["start"]);
    const end = new Date(req.body["end"]);
    const startDay = getDayOfWeek(start);
    const startMonth = getMonths(start);
    const startTime = getTimeWithAMPM(start);
    const endDay = getDayOfWeek(end);
    const endMonth = getMonths(end);
    const endTime = getTimeWithAMPM(end);
    const emailText = `Hi ${volunteer} 😃\
    \nYou have a session starting on ${startDay}, ${startMonth} at ${startTime} ⏰\
    \nAnd it will end at ${endTime}.\
    \nIt will be in ${room} lecture room. 📚\
    \nIt's in subject: ${subjectCode}, about lesson: ${lesson}. 📝\
    \nPrepare well ${volunteer} 👍 see you there! 🚀\
    \n🔥🔥🔥 Don't miss it! 🎉🎉🎉`;
    let email = Array.isArray(volunteerEmail) ? volunteerEmail : [volunteerEmail];
    async function main() {
      let config = {
        service: "gmail",
        auth: {
          user: EMAIL,
          pass: PASS,
        },
      };
      let transporter = nodemailer.createTransport(config);
      const email = {
        from: EMAIL,
        to: volunteerEmail,
        subject: "Session notification",
        text: emailText,
      };
      let info = await transporter.sendMail(email);
      console.log(info);
      return res.status(201).send(message("success", "email", info));

      // let email = Array.isArray(volunteerEmail) ? volunteerEmail : [volunteerEmail];
      // const sendEmail = (recipient) => {
      //   return new Promise((resolve, reject) => {
      //     const email = {
      //       from: EMAIL,
      //       to: email,
      //       subject: "Session notification",
      //       text: emailText,
      //     };
      //     transporter.sendMail(email, (err, info) => {
      //       if (err) {
      //         console.error(`Error sending email to ${recipient.email}:`, err);
      //         reject(err);
      //       } else {
      //         console.log(`Email sent to ${recipient.email}:`, info.response);
      //         resolve(info);
      //       }
      //     });
      //   });
      // };
      // Promise.all(recipients.map(sendEmail))
      //   .then((infoArray) => {
      //     return res.status(201).send(message("success", "email", infoArray));
      //   })
      //   .catch((err) => {
      //     console.error(err);
      //     return res.status(500).send(message("error", "email", err.message));
      //   });
    }
    main().catch(console.log);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send(message("error", "email", err.message));
  }
};
