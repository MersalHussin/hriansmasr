# EmailJS Setup Guide

## Steps to configure EmailJS:

### 1. Create EmailJS Account
- Go to https://www.emailjs.com/
- Sign up for a free account

### 2. Add Email Service
- Go to "Email Services" in dashboard
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Connect your email account

### 3. Create Email Template
- Go to "Email Templates"
- Click "Create New Template"
- Use these template variables:
  - `{{from_name}}` - Sender's name
  - `{{from_email}}` - Sender's email
  - `{{from_phone}}` - Sender's phone
  - `{{message}}` - Message content

Example template:
```
New Contact Form Submission

Name: {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}

Message:
{{message}}
```

### 4. Get Your Credentials
- Service ID: Found in "Email Services" section
- Template ID: Found in "Email Templates" section
- Public Key: Found in "Account" > "General" section

### 5. Update ContactPage.tsx
Replace these values in `src/pages/ContactPage.tsx`:
```typescript
await emailjs.sendForm(
  'YOUR_SERVICE_ID',      // Replace with your Service ID
  'YOUR_TEMPLATE_ID',     // Replace with your Template ID
  formRef.current!,
  'YOUR_PUBLIC_KEY'       // Replace with your Public Key
)
```

### 6. Test the Form
- Run the application
- Go to Contact page
- Fill and submit the form
- Check your email inbox

## Free Tier Limits
- 200 emails per month
- Perfect for small to medium websites
