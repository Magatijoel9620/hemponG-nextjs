'use server';

import { z } from 'zod';
import { contactFormSchema } from '@/lib/schemas';

export async function submitContactForm(
  data: z.infer<typeof contactFormSchema>
): Promise<{ success: boolean; error?: string }> {
  const result = contactFormSchema.safeParse(data);

  if (!result.success) {
    const errorMessages = result.error.issues.map((issue) => issue.message).join(', ');
    return { success: false, error: `Invalid input: ${errorMessages}` };
  }

  // Here you would typically integrate with an email service like Resend, SendGrid, etc.
  // to send an email to 'magatijoel@gmail.com'.
  // For demonstration, we'll just log the data and simulate a successful submission.
  console.log('Received contact form submission:', result.data);
  console.log('Email should be sent to magatijoel@gmail.com');


  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // You can add error handling for the email service here
  // For now, we'll always return success
  return { success: true };
}
