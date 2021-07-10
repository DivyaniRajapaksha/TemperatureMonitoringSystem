package com.mit.TemperatureMonitoringSystem.utils;

import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.List;
import java.util.Properties;

public class EmailUtil {
    public static boolean sendBulkEmail(final String subject, final List<String> emailToAddresses,
                                     final String emailBodyText) {

        final String username = "isamarakoon365@gmail.com";
        final String password = "Anushika123@";

        final String smtpHost = "smtp.gmail.com";

        final String port = "587";

        Properties props = new Properties();

        props.put("mail.smtp.user", username);
        props.put("mail.smtp.host", smtpHost);
        props.put("mail.smtp.port", port);
         props.put("mail.debug", "true");
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.ssl.trust", "smtp.gmail.com");


        Session session = Session.getInstance(props, new javax.mail.Authenticator() {
            @Override
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });

        String emails = null;

        try {

            Message message = new MimeMessage(session);

            message.setFrom(new InternetAddress(username));


            message.setSubject(subject);


            String content = "<html>\n<body>\n";
            content += "<h1 style=\"color:red;\">Critical Alert!!</h1>"+ "\n";
            content += emailBodyText + "\n";
            content += "<p style=\"color:green;\"><strong>Please Take Necessary Actions.</strong></p>" + "\n";
            content += "\n";
            content += "</body>\n</html>";
            message.setContent(content, "text/html");

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


            message.setRecipients(Message.RecipientType.BCC, InternetAddress.parse(sb.toString()));

            System.out.println("Sending Email to " + emails + " from " + username + " with Subject - " + subject);


            Transport.send(message);

            System.out.println("Email successfully sent to " + emails);
            return true;
        } catch (
                MessagingException e) {
            System.out.println("Email sending failed to " + emails);
            System.out.println(e);
            return false;
        }
    }
}
