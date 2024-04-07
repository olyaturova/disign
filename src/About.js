import { useLayoutEffect } from 'react'

import './App.css'
import gsap from "gsap";

function About() {


useLayoutEffect(() => {
    gsap.to(".image_about", {opacity:1, duration:4, delay:0.5});
},[])

    return(

     
        <div className="container">
            <div className="container_about">
                <div className='image_container'>
                    <img className='image_about' src='https://img.freepik.com/free-photo/scenery-designers-work_23-2149741803.jpg?w=826' alt='about'/>
                    <p className='image_par'>Design Master</p>      
                </div>
                <div className='pars'>
                    <p className='par_about'>Добро пожаловать в студию дизайна интерьеров Design Master!</p>
                    <p className='par_about'>Мы - команда профессионалов, готовая помочь вам сделать ваш дом еще красивее и уютнее. </p>
                    <p className='par_about'>Мы создаем уникальные и стильные интерьеры, отражающие вашу индивидуальность и вкус.</p>
                    <p className='par_about'>Наш опыт и талант помогут воплотить ваши мечты в реальность.</p>
                    <p className='par_about'>Доверьте нам свой интерьер, и вы не пожалеете!</p>
                </div>
            </div>
        </div>
       
   
    )
}
export default About;