import React, { useLayoutEffect } from 'react';
import gsap from "gsap";
import './App.css'


function Contact() {

    useLayoutEffect(() => {
        gsap.to(".header", {opacity:1, duration:4, delay:0.5});
        gsap.to(".contact_par", {opacity:1, duration:4, delay:0.5});   
    },[])


    return(
    <div>
        <div className="head">
            <h1 className="header">КОНТАКТЫ</h1>
        </div>
        <div className='cont'>
            <img className='contact_image' src="https://img.freepik.com/free-photo/color-palette-laptop-house-renovation_23-2148814353.jpg?w=740" alt="contact"/>
                <div className='contact_par'>
                    <p className='cont_par'>Будем рады сотрудничать с вами!</p>
                    <form>
                        <label className='input_par' htmlFor="email">
                                 Ваш Email
                        </label>
                        <input className='text_input' required
                            id="email"
                            type="email" 
                            name="email"
                        />
                       
        

                        <button className='input_btn' type="submit">
                        ОТПРАВИТЬ ЗАЯВКУ
                        </button>
                    </form>
                </div>
        </div>
    </div>
    )
}
export default Contact;