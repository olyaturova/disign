import { useLayoutEffect, useState } from 'react';
import { data } from './data';
import gsap from "gsap";
import './App.css';
import arrowOne from './arrow.png';
import arrowTwo from './iarrow.png';

function Home() {
    const [picture, setPicture] = useState(0);
    const {photo} = data[picture]
    
   
    useLayoutEffect(() => {
        gsap.to(".header", {opacity:1, duration:4, delay:0.5});
        gsap.to(".par_one", {opacity:1, duration:4, delay:0.7});
        gsap.to(".par", {opacity:1, duration:4, delay:0.5})
    },[])

    const previousPicture = () => {
        setPicture ((picture => {
            picture --;
            if (picture < 0) {
                return data.length -1;
            }
            return picture
        }))
    }

    const nextPicture = () => {
       setPicture ((picture => {
        picture++;
        if (picture > data.length-1) {
         picture=0
        }
        return picture
       }))
    }  
  

    return(
    <div>
      <div className='content'>
        
            <div className='photo_content'>
               <div className='container_photo'>
                  <img className='photografer' src={photo} alt="photografer"/>
               </div>
                  <div className='btn'>
                     <button className='left' onClick={previousPicture}><img src={arrowOne} alt="left"/></button>
                     <button className='right' onClick={nextPicture}><img src={arrowTwo} alt="right"/></button>
                  </div>
              
            </div>
      </div>
    </div>
    )
}
export default Home;