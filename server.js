import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS  // Your Gmail app password
  }
});

// Demo request endpoint
app.post('/api/submit-demo-request', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'rajat@credifly.co',
      subject: 'New Demo Request - Optivio',
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <p>Please follow up with this user to schedule a demo of Optivio.</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Demo request submitted successfully' });
  } catch (error) {
    console.error('Error submitting demo request:', error);
    res.status(500).json({ error: 'Failed to submit demo request' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
