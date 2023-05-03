import React, { FormEvent, useState } from 'react';

export default function Contact() {
  interface FormData {
    subject: string;
    email: string;
    body: string;
  }

  function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
      subject: '',
      email: '',
      body: '',
    });

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();

      const { subject, email, body } = formData;
      const mailtoLink = `mailto:melhen12344@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      window.location.href = mailtoLink;
    }

    return (
      <div>
        <h3>MailTo: Form</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="subject">Subject:</label>
          <br />
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Your Name"
          />
          <br />

          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
          />
          <br />

          <label htmlFor="body">Message:</label>
          <br />
          <textarea
            id="body"
            name="body"
            rows={5}
            cols={30}
            value={formData.body}
            onChange={handleInputChange}
            placeholder="Your Message"
          />
          <br />

          <button type="submit">Send</button>
        </form>
      </div>
    );
  }

  return <ContactForm />;
}
