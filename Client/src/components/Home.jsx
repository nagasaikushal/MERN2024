import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import '../index.css';

const Home = () => {
  useEffect(() => {
    const img = new Image();
    img.src = '/assets/beach.jpg';
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundImage: `url("/assets/beach.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '50px',
            transform: 'translateY(-50%)',
            color: 'white',
            textAlign: 'left',
            fontSize: '36px',
            fontFamily: 'monospace',
            maxWidth: 'calc(100% - 100px)',
          }}
        >
          <div>
            <h1 style={{ fontFamily: 'fantasy' }}>
              <span style={{ fontSize: '156px' }}>Travel</span>
              <br />
              <span style={{ fontSize: '140px' }}>Around The</span>
              <br />
              <span
                style={{
                  background: 'linear-gradient(180deg, rgba(9,121,14,1) 50%, rgba(0,255,248,1) 98%)',
                  fontSize: '156px',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                WORLD
              </span>
              !{' '}
              <Link to="/Register">
                <button className="btn-vacation" style={{ marginBottom: '-80px', marginLeft: '-50px' }}>
                  It's Vacation Time!
                </button>
              </Link>
            </h1>
          </div>
        </div>
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <NavBar />
        <div className="button-container">{/* Some other content */}</div>
      </div>
    </div>
  );
};

export default Home;
