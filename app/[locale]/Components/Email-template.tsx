import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, message
}) => (
  <div>
    <p>name: {name}</p>
    <p>email: {email}</p>
    <p>message: {message}</p>
  </div>
);
