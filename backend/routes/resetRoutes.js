const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // Adjust the path based on your project structure

router.post("/forgot", async (req, res) => {
    console.log(req.body);
    try {
        const { email } = req.body;
        const user = await User.findOne({ college_gmail_id:email });

        if (!user) {
            return res.status(401).json({ status: "User not found" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWTPRIVATEKEY, { expiresIn: "15m" });

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USERNAME,
                pass: process.env.GMAIL_PASSWORD
            }
        });

        const resetPasswordLink = `http://localhost:5173/reset_password/${user._id}/${token}`;
        const mailOptions = {
            from: process.env.GMAIL_USERNAME,
            to: user.college_gmail_id,
            subject: 'Reset Password Link',
            text: `Your reset password link is: ${resetPasswordLink}`
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('Message sent: %s', info.messageId);
        return res.status(200).json({ status: "Success" });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: "Internal Server Error" });
    }
});

module.exports = router;
