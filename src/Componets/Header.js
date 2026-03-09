import React from 'react'

const header = () => {
  const home = 'Home';
  const about = 'About';
  const contact = 'Contact';
  const skills = ' Skills';


  return (
    <header>
        <p>
          {home} {about} {contact}  {skills}
        </p>
      
    </header>
  )
}

export default header
