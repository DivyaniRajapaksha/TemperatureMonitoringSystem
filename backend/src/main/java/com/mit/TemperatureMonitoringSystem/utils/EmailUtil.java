package com.mit.TemperatureMonitoringSystem.utils;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.List;
import java.util.Properties;

public class EmailUtil {
    public static void sendBulkEmail(final String subject, final List<String> emailToAddresses,
                                     final String emailBodyText) {

        // from email address
        final String username = "divyanirajapaksha@gmail.com";

        // make sure you put your correct password
        final String password = "FRisky123*";

        // smtp email server
        final String smtpHost = "smtp.gmail.com";

        // will put some properties for smtp configurations
        Properties props = new Properties();

        // do not change - start
        props.put("mail.smtp.user", username);
        props.put("mail.smtp.host", smtpHost);
        // props.put("mail.debug", "true");
        props.put("mail.smtp.auth", "true");
        // do not change - end

        // authentcate using your email and password and on successful
        // create the session
        Session session = Session.getInstance(props, new javax.mail.Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });

        String emails = null;

        try {
            // create new message
            Message message = new MimeMessage(session);

            // set the from 'email address'
            message.setFrom(new InternetAddress(username));

            // set email subject
            message.setSubject(subject);

            // set email message
            // this will send html mail to the intended recipients
            // if you do not want to send html mail then you do not need to wrap the message
            // inside html tags
            String content = "<html>\n<body>\n";
            content += emailBodyText + "\n";
            content += "\n";
            content += "</body>\n</html>";
            message.setContent(content, "text/html");

            // form all emails in a comma separated string
            StringBuilder sb = new StringBuilder();

            int i = 0;
            for (String email : emailToAddresses) {
                sb.append(email);
                i++;
                if (emailToAddresses.size() > i) {
                    sb.append(", ");
                }
            }

            emails = sb.toString();

            // set 'to email address'
            // you can set also CC or TO for recipient type
            message.setRecipients(Message.RecipientType.BCC, InternetAddress.parse(sb.toString()));

            System.out.println("Sending Email to " + emails + " from " + username + " with Subject - " + subject);

            // send the email
            Transport.send(message);

            System.out.println("Email successfully sent to " + emails);
        } catch (
                MessagingException e) {
            System.out.println("Email sending failed to " + emails);
            System.out.println(e);
        }
    }
}
