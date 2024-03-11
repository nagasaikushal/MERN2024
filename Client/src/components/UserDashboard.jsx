import React from 'react'
import UserNav from './UserNav'
import '../index.css'

const UserDashboard = () => {
  return (
    <div>
        <UserNav />
        <div className='Travel-btn'>
        <a href="/Travel" style={{
  backgroundColor: '#2b2b2b', // Replace with var(--btn-primary-color) if applicable
  color: 'white',
  padding: '12px 20px',
  borderRadius: '5px',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out, background-color 0.2s ease',
  transform: 'scale(1)', // Initial transform for hover effect
  display: 'inline-block', // Ensure inline display
  margin: '10px 0 5px 0', // Add bottom margin and center alignment
  textDecoration: 'none', // Remove underline
  textAlign: 'center', // Center the text content
}}>
  Travel Now
</a>
</div>
        
    </div>
    
  )
}

export default UserDashboard