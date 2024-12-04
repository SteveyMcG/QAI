const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());


// API endpoint to handle email
app.post('/send-email', (req, res) => {
    try{
        const { Name, companyName, email, phone, region, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            port: 587, // Use your email provider (e.g., Gmail, Outlook, etc.)
            auth: {
              user: 'ihaka99@gmail.com',
              pass: 'wjnm ulvg tqoi smgk', // Use an app password if 2FA is enabled
            },
        });

        const mailOptions = {
            from: `"QAI ${Name}" <ihaka99@gmail.com>`, // Sender's email address
            to: "stephenm@qai.co.nz", // Recipient's email address
            subject: "New Inquiry from Your Website",
            text: `
Hello QAI,
            
You have a new inquiry from: ${Name}.
Contact Information:
Company Name: ${companyName}
Email: ${email}
Phone: ${phone}
Region: ${region}

Their message is as follows: ${message}
            `,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error(error);
              res.status(500).send('Error sending email');
            } else {
              res.status(200).send('Email sent successfully');
            }
        });
    }catch (error) {
        console.error(error);
        res.status(500).send('Error handling request');
    };
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
