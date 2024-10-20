import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Nodemailerでメールを送信
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Gmailを使う場合
      auth: {
        user: process.env.GMAIL_USER, // Gmailのユーザー名
        pass: process.env.GMAIL_PASS, // Gmailのパスワード（App Passwordを推奨）
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.RECIPIENT_EMAIL, // 問い合わせを受け取るメールアドレス
        subject: `Contact form submission from ${name}`,
        text: message,
        html: `<p>You have a new contact form submission</p><br>
               <p><strong>Name: </strong> ${name}</p><br>
               <p><strong>Email: </strong> ${email}</p><br>
               <p><strong>Message: </strong> ${message}</p>`,
      });

      res.status(200).json({ success: true });
    } catch {
      res.status(500).json({ success: false });
    }
  } else {
    res.status(405).end(); // メソッドが許可されていない場合
  }
}
