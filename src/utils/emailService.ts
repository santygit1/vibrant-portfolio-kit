
import emailjs from '@emailjs/browser';

interface EmailParams {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

export const sendEmail = async (params: EmailParams) => {
  try {
    // Replace these with your actual EmailJS service details
    const serviceId = 'YOUR_EMAILJS_SERVICE_ID';
    const templateId = 'YOUR_EMAILJS_TEMPLATE_ID';
    const userId = 'YOUR_EMAILJS_USER_ID';
    
    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: params.name,
        from_email: params.email,
        message: params.message,
        subject: params.subject || 'Contact from Portfolio',
      },
      userId
    );
    
    return {
      success: true,
      message: 'Message sent successfully!',
      data: response,
    };
  } catch (error) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again later.',
      error,
    };
  }
};

export default sendEmail;
