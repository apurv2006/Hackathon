import React, { useState } from 'react';

const UserProfile = () => {
  // Example state for user profile data
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'johndoe@example.com',
    jobTitle: 'Software Engineer',
    company: 'Tech Corp',
    location: 'New York',
  });

  // Editable fields for user to update
  const [isEditing, setIsEditing] = useState(false);
  const [newData, setNewData] = useState(userData);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setUserData(newData);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      
      <div className="profile-info">
        <div className="info-item">
          <strong>Name:</strong> 
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={newData.name}
              onChange={handleChange}
            />
          ) : (
            <span>{userData.name}</span>
          )}
        </div>
        
        <div className="info-item">
          <strong>Email:</strong> 
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={newData.email}
              onChange={handleChange}
            />
          ) : (
            <span>{userData.email}</span>
          )}
        </div>

        <div className="info-item">
          <strong>Job Title:</strong> 
          {isEditing ? (
            <input
              type="text"
              name="jobTitle"
              value={newData.jobTitle}
              onChange={handleChange}
            />
          ) : (
            <span>{userData.jobTitle}</span>
          )}
        </div>

        <div className="info-item">
          <strong>Company:</strong> 
          {isEditing ? (
            <input
              type="text"
              name="company"
              value={newData.company}
              onChange={handleChange}
            />
          ) : (
            <span>{userData.company}</span>
          )}
        </div>

        <div className="info-item">
          <strong>Location:</strong> 
          {isEditing ? (
            <input
              type="text"
              name="location"
              value={newData.location}
              onChange={handleChange}
            />
          ) : (
            <span>{userData.location}</span>
          )}
        </div>
      </div>

      <div className="profile-actions">
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={handleEdit}>Edit</button>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
