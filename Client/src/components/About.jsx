import React from 'react';
import './About.css'; // Import CSS file

const About = () => {
  const teamMembers = [
    {
      name: 'M Keerthy Reddy',
      role: 'Team Lead',
      description: 'Lead developer with expertise in building robust web applications.',
      imageUrl: '../assets/profilepic.png',
    },
    {
      name: 'M N S Kushal',
      role: 'Team Member',
      description: 'Frontend developer passionate about creating delightful user experiences.',
      imageUrl: '../assets/profilepic.png',
    },
    {
      name: 'K Jahnavi',
      role: 'Team Member',
      description: 'UI/UX designer specializing in creating visually appealing designs.',
      imageUrl: '../assets/profilepic.png',
    },
  ];

  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="leadership-section">
        <h2>Our Mission</h2>
        <p>We aim to revolutionize the travel and hospitality industry by providing seamless booking experiences for travelers around the world.</p>
        <h2>Our Team</h2>
        <div className="team-details">
          {teamMembers.map((member) => (
            <div key={member.name} className="team-member">
              <img className="rounded-full h-16 w-16" src={member.imageUrl} alt={member.name} />
              <div className="team-member-details">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
                <p className="team-member-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
