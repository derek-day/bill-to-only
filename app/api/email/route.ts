import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
  const { adp, toBill, toCredit, model, color, eye, sample, cases, courtesy, comment } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
        //test using direct string of email and password instead of using process.env
      // user: process.env.MY_EMAIL,
      // pass: process.env.MY_PASSWORD,
      user: 'derek.andrew.day@gmail.com',
      pass: 'sljw dbyy ojqj stit',
    },
  });

  const mailOptions: Mail.Options = {
    // from: process.env.MY_EMAIL,
    // to: process.env.SEND_EMAIL,
    from: 'derek.andrew.day@gmail.com',
    to: 'derek.andrew.day@gmail.com',
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Bill-to-Only from ADP: ${adp}`,
    text: `ADP: ${adp} \n \n Account to bill: ${toBill} \n \n Account to credit: ${toCredit} \n \n Model: ${model} \n \n Color: ${color} \n \n Eye: ${eye} \n \n Comments: ${comment}`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Bill-to-Only sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Bill-to-Only sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}