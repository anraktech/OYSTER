# Formspree Setup Instructions

## Quick Setup (5 minutes)

1. **Go to Formspree.io**
   - Visit: https://formspree.io
   - Sign up with your email address (free plan available)

2. **Create a New Form**
   - Click "New Form"
   - Enter your email address (where you want to receive submissions)
   - Give it a name like "Oyster Employment Contact Form"

3. **Get Your Form ID**
   - After creating the form, you'll get a form ID like `xabc123`
   - Copy this ID

4. **Update the Contact Form**
   - Open `client/src/components/sections/contact.tsx`
   - Find line 60 and replace the simulation code with:

```javascript
const formData = new FormData();
formData.append('firstName', form.firstName);
formData.append('lastName', form.lastName);
formData.append('email', form.email);
formData.append('phone', form.phone);
formData.append('sector', form.sector);
formData.append('message', form.message);
formData.append('_subject', `New Contact Form Submission from ${form.firstName} ${form.lastName}`);

const response = await fetch('https://formspree.io/f/YOUR_FORM_ID_HERE', {
  method: 'POST',
  body: formData,
  headers: {
    'Accept': 'application/json'
  }
});

if (response.ok) {
  toast({
    title: "Message sent successfully!",
    description: "We'll get back to you as soon as possible.",
  });
  setForm({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    sector: "",
    message: "",
    agreeToTerms: false
  });
} else {
  throw new Error('Failed to send message');
}
```

5. **Replace YOUR_FORM_ID_HERE** with your actual form ID from step 3

## Features Included
- ✅ Custom email subject with applicant name
- ✅ All form fields included in email
- ✅ Spam protection
- ✅ Email notifications
- ✅ Form validation
- ✅ Professional styling

## Alternative: Temporary Working Solution
The form currently works with a demo that logs submissions to the browser console. Check the browser's developer tools (F12) > Console tab to see form submissions until you set up Formspree.

## Need Help?
Contact support if you need assistance with the setup.