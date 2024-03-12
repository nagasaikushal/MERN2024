import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UserNav from './UserNav';
import varanasi from '/assets/cards/varanasi.jpg';
import shimla from '/assets/cards/simla.jpg';
import agra from '/assets/cards/agra.jpg';
import ranthambore from '/assets/cards/ranthambore.jpg';
import goa from '/assets/cards/goa.jpg';
import { useNavigate } from 'react-router-dom';

const cardData = [
  {
    title: 'Divine Pilgrimages',
    text: 'Explore the spiritual heritage of India with its sacred sites and divine pilgrimages, where centuries-old traditions blend with devotion and faith.',
    imageSrc: varanasi,
    destination: '/religious-tourism'
  },
  {
    title: 'Serene Escapes',
    text: 'Experience the tranquility and natural beauty of India\'s hill stations, nestled amidst lush greenery and offering respite from the hustle and bustle of city life.',
    imageSrc: shimla,
    destination: '/hill-stations'
  },
  {
    title: 'Timeless Treasures',
    text: 'Immerse yourself in India\'s rich history and heritage as you explore its magnificent forts, palaces, and ancient ruins, witnessing the grandeur of bygone eras.',
    imageSrc: agra,
    destination: '/historical-tourism'
  },
  {
    title: 'Wilderness Adventures',
    text: 'Embark on thrilling wildlife safaris and encounters with India\'s diverse flora and fauna, from majestic tigers to elusive snow leopards, in its national parks and reserves.',
    imageSrc: ranthambore,
    destination: '/wildlife-tourism'
  },
  {
    title: 'Sun, Sand & Sea',
    text: 'Bask in the sun and enjoy the pristine beaches of India, offering a perfect blend of relaxation, water sports, and vibrant coastal culture.',
    imageSrc: goa,
    destination: '/beach-tourism'
  }
];

const UserDashboard = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [searchHovered, setSearchHovered] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleCardHover = (isHovered, index) => {
    if (isHovered) {
      setHoveredCard(index);
    } else {
      setHoveredCard(null);
    }
  };

  const handleTitleClick = (destination) => {
    navigate(destination);
  };

  const handleSearchHover = (isHovered) => {
    setSearchHovered(isHovered);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCardData = cardData.filter((data) =>
    data.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const cardStyles = {
    width: '19rem',
    height: '25rem',
    borderRadius: '10px',
    overflow: 'hidden',
    cursor: 'pointer',
    position: 'relative',
    color: 'var(--color-primary-white)',
    boxShadow: '0 10px 30px 5px rgba(0, 0, 0, 0.2)',
  };

  const imgStyles = {
    position: 'absolute',
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    transition: 'opacity 0.2s ease-out',
    overflow: 'hidden',
  };

  const overlayStyles = (index) => ({
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '20px',
    background: 'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))',
    pointerEvents: hoveredCard === index ? 'all' : 'none',
    opacity: hoveredCard === index ? '1' : '0',
    transition: 'opacity 0.3s ease-out',
  });

  const h2Styles = {
    fontWeight: '549',
    fontSize: '2.5em',
    textTransform: 'uppercase',
    color: 'white',
    marginBottom: '10px',
  };

  const pStyles = {
    color: 'white',
  };
  const searchInputStyles = {
    padding: '15px',
    fontSize: '16px',
    border: '1px solid lightblue',
    borderRadius: '5px',
    marginBottom: '10px',
    background: 'none',
    width: '100%', 
    maxWidth: '600px', 
    boxShadow: searchHovered ? '0 5px 15px rgba(0, 0, 0, 0.2)' : '0 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease',
    outline: 'none',
    marginTop: '1px', 
    color: 'white',
    '::placeholder':'red'
  };

  return (
    <div className='bg-color'>
      <UserNav />
      <div style={{ padding: '20px', marginTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <h1 style={{color:'white'}}>VisitIndia</h1>
              <p style={{color:'white',fontSize:'2rem'}}>
                Craving adventure, relaxation, or cultural immersion? Explore the culture!
              </p>
            </div>
          </div>
        </section>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for places"
          style={searchInputStyles}
          onMouseEnter={() => handleSearchHover(true)}
          onMouseLeave={() => handleSearchHover(false)}
        />
        <h1 style={{ color: 'white', marginRight: '1130px' }}>Top Places</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '20px', gap: '20px' }}>
          {filteredCardData.map((data, index) => (
            <div
              key={index}
              style={{ ...cardStyles, margin: '10px' }}
              className="card"
              onMouseEnter={() => handleCardHover(true, index)}
              onMouseLeave={() => handleCardHover(false, index)}
              onClick={() => handleTitleClick(data.destination)}
            >
              <Card.Img variant="top" src={data.imageSrc} style={imgStyles} />
              <div className="overlay" style={overlayStyles(index)}>
                <h2 style={h2Styles}>
                  {data.title}
                </h2>
                <p style={pStyles}>{data.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
