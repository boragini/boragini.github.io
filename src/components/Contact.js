import React from 'react';

function Contact({ email }) {
  return (
    <section id="contato">
      <div className="container">
        <h2>Contato</h2>
        <p>Entre em contato comigo através do email: {email}</p>
      </div>
    </section>
  );
}

export default Contact;
