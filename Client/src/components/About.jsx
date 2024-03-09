import React from 'react';
import './About.css'; // Import CSS file

const About = () => {
  const people = [
    {
      name: 'M Keerthy Reddy',
      role: 'Team Lead',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl:
        '../assets/lighthouse.jpg',
    },
    {
      name: 'M N S Kushal',
      role: 'Team Member',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl:
        '../assets/kushal.png',
    },
    {
      name: 'K Jahnavi',
      role: 'Team Member',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl:
        '../assets/jannu.png',
    },
  ];

  return (
    <div className="about-container"> {/* Apply container class */}
      <h1>About page</h1>
      <div className="leadership-section"> {/* Apply leadership section class */}
        <h2>About Project</h2>
        <p>Description about the project goes here.</p>
        <div className="team-details">
        <h2>Team Details</h2>
          {people.map((person) => (
            <div key={person.name} className="team-member"> {/* Apply team member class */}
              <img className="rounded-full h-16 w-16" src={person.imageUrl} alt="" /> {/* Apply rounded class */}
              <div className="team-member-details">
                <h3 className="team-member-name">{person.name}</h3>
                <p className="team-member-role">{person.role}</p>
                <p className="team-member-description">{person.description}</p> {/* Display description */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
