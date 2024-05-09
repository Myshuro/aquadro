const nodemailer = require("nodemailer");

// Construct test email message
const testMailOptions = {
  from: "mihai.murg@demomailtrap.com", // Replace with your email address
  to: "myshu_m@yahoo.com",
  subject: "Test cu glitch",
  text: "This is a test email sent from your Node.js script.",
};

// Create SMTP transporter using Mailtrap credentials
var transporter = nodemailer.createTransport({
  host: "live.smtp.mailtrap.io",
  port: 587,
  auth: {
    user: "api",
    pass: "7c017f52561cc586a2cc170080492ec1",
  },
});

// Send test email
transporter.sendMail(testMailOptions, (error, info) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Test email sent:", info.response);
  }
});
