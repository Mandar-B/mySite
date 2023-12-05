import React from 'react';
import Pic from "../assets/pic.png";
import "../styles/Home.css";
import Lin from "../assets/lin.png";
import Ghub from "../assets/github.png";
import Insta from "../assets/insta.png";




function Home() {
 


 return (
   <div style={{ color: 'white', position: 'relative', textAlign: 'center' }}>
      
     <div className = 'picandbubs' style={{ position: 'relative', display: 'inline-block' }}>
       
       
      <img src={Pic} alt="Mandar's Picture" style={{ width: '90%', zIndex: 0 }} />
     </div>
     <div className = "message"><h1>Hi, I'm <h2 className='typewriter'>Mandar Brahmbhatt</h2></h1></div>
     <div className='icons'>
 <a href="https://www.linkedin.com/in/mandar-brahmbhatt-499403294/" style={{ marginLeft: '30%' }}>
   <img src={Lin} alt="Linkedin" style={{ width: '10%', zIndex: 0 }} />
 </a>
 <a href="https://www.instagram.com/mandar.brahm/" style={{ marginLeft: '10%' }}>
   <img src={Insta} alt="Instagram" style={{ width: '10%', zIndex: 0 }} />
 </a>
 <a href="https://github.com/Mandar-B" style={{ marginLeft: '10%' }}>
   <img src={Ghub} alt="Github" style={{ width: '10%', zIndex: 0 }} />
 </a>
</div>



   </div>
 );
}


export default Home;
