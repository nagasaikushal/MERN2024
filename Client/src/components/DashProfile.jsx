import React, { useEffect, useState } from 'react';
import UserNav from './UserNav';

function Dashboard({ user }) {
  const [userData, setUserData] = useState(null);

  // Fetch additional user data (optional)
  useEffect(() => {
    if (user) {
      const fetchUserData = async () => {
        try {
          // Replace with your actual API endpoint and authentication mechanism
          const response = await fetch('/api/user-data', {
            method: 'GET',
            headers: {
              // Include authorization header if needed (e.g., Bearer token)
              'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            setUserData(data);
          } else {
            console.error('Error fetching user data:', response.statusText);
            // Handle error gracefully (e.g., display error message)
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          // Handle error gracefully
        }
      };

      fetchUserData();
    }
  }, [user]); // Run effect only when user changes

  return (
    <div>
        <UserNav/>
    <div>
      {userData ? (
        <>
          {/* Display safe user data (avoid sensitive fields) */}
          <h2>Name: {userData.name}</h2>
          <p>Email: {userData.email}</p>
          {/* Optionally display other non-sensitive user data */}

          {/* Handle potential security concerns */}
          <p>**Note:** Sensitive user data (e.g., password, financial information) should not be displayed on the dashboard.</p>
        </>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
    </div>
  );
}

export default Dashboard;
