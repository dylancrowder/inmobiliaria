import nodemailer from 'nodemailer';


export default class EmailService {
    constructor() {
        this.transport = nodemailer.createTransport({
            service: 'gmail',
            port: 587,
            auth: {
                user: 'devdylancrowder@gmail.com',
                pass: 'uczy muco ryjw jdww',
            },
        });
    }

    sendEmail(from, subject, html, attachments = []) {
        return this.transport.sendMail({
            from,
            to: "devdylancrowder@gmail.com",
            subject,
            html,
            attachments,
        });
    }
}