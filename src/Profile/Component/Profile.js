
import React from 'react'
import PropTypes from 'prop-types';

export const Profile = ({ fullName, bio, profession, handleName, children }) => {
  Profile.defaultProps = {
    fullName: "full name",
    bio:"bio",
    profession: "profession",
  }
  Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
  }
  return (
    <>
      <section
        style={{ display: "flex", height: "100vh", alignItems: "center" }}>
        <aside
          style={{
            display: "flex",
            flexDirection: "column-reverse",
            margin: "0 20px",
          }}>
          {children}
          <a
            style={{
              marginLeft: "150px",
              textDecoration: "none",
              color: "red",
              fontWeight: "bold",
            }}
            href="#"
            onClick={handleName}>
            Click me
          </a>
        </aside>
        <main>
          <p style={{ fontSize: "50px" }}>
            Hello I am <span style={{ color: "red" }}>{fullName}</span>,<br /> I
            am in love with <span style={{ color: "red" }}>{bio}</span>,<br />{" "}
            and I am <span style={{ color: "red" }}>{profession}</span>
          </p>
        </main>
      </section>
    </>
    
  );
  
}
