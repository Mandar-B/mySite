// About.jsx

import React from 'react';
import Juggle from "../assets/me.png";

import '../styles/About.css';

function About() {
  return (
    <div className="about-container">


      <div className="about-image">
  <h1 className='About'>About Me</h1>
  <div className='boxpic'>
  <div className="image-container">
  </div>
  <div className='mypic'>
    <img  src={Juggle} alt="Mandar's Picture" style={{ width: '50vh' }} />
    </div>
    </div>
  
</div>
      <div className="about-text">
        <p>
          My name is Mandar Brahmbhatt. I am an Undergraduate Student at Washington University in St. Louis.
          Currently, I am pursuing a BS in Computer Science and a Minor in Finance. 
          I am an ambitious student, eager for opportunities that align with my passions in machine learning,
          automation, and data science. 
          As shown in my projects, I like to create programs with everyday practicality, and to code projects that
          connect with my passions outside of computer science. 
          Currently, I am working on building my web development skills. This website here is a start! 
          To check out my projects, take a look at my resume and github. Below is a demonstation of my most recent project, 
          take a look below! It is a Python program utilizing OpenCV to count the number of cycles of balls juggled given a live feed! 
          Take a look at the top left corner to see the incrementing count!
        </p>
      </div>
      <div className="video-container">
        
        <div >
          {/* Replace 'VIDEO_ID' with the actual YouTube video ID */}
          <iframe
  

  
  src="https://www.youtube.com/embed/M5SMWs4P2yw"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

        </div>
      </div>
      
      
    </div>
  );
}

export default About;
