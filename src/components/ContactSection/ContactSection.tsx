import FooterSection from '../FooterSection/FooterSection';
import React from 'react';
import './ContactSection.module.css';

const ContactSection = () => {
  return (
    <section id='contact'>
      <div className='title clearfix'>
        <div className='text'>
          <h1>Contact</h1>
          <h2>Say Hi</h2>
        </div>
      </div>

      <FooterSection />
    </section>
  );
};

export default ContactSection;
