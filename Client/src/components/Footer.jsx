import React from 'react';

const Footer = () => {
  return (
    <footer style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: '#f0f0f0' }}>
      <div style={{ width: '45%' }}>
        <h2>Contact Details</h2>
        <p>Address: KL Univeristy <br/> Green fields , Guntur.</p>
        <p>Email: S13T14@gmail.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
      <div style={{ width: '45%' }}>
        <iframe
          title="Embedded Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15306.652582567936!2d80.6225946!3d16.4419257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f0a2a7d81943%3A0x8ba5d78f65df94b8!2sK%20L%20Deemed%20To%20Be%20University!5e0!3m2!1sen!2sin!4v1710175773113!5m2!1sen!2sin"
          width="400"
          height="300"
          style={{ border: '0', width: '100%', height: '100%' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </footer>
  );
};

export default Footer;
