import React, { useState } from 'react';

// Team member data
const teamMembers = [
  { id: 1, name: 'Hossam Sayed', role: 'Front end', image: 'assets/images/11.jpg', social: ['fab fa-facebook-f', 'fab fa-instagram'] },
  // Add more team members here
];

// Team member component
const TeamMember = ({ member }) => (
  <div className="swiper-slide">
    <div className="card-wrapper">
      <div className="card profile-two">
        <div className="card-image profile-img--two">
          <img src={member.image} alt={member.name} />
        </div>
        <ul className="social-icons">
          {member.social.map((icon, index) => (
            <li key={index}>
              <a href="#">
                <i className={icon}></i>
              </a>
            </li>
          ))}
        </ul>
        <div className="details jane">
          <h5>
            {member.name}
            <br />
            <span className="job-title">{member.role}</span>
          </h5>
        </div>
      </div>
    </div>
  </div>
);