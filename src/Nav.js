import React from 'react';
import { useEffect, useState } from 'react';
import './Nav.css';

export default function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll",()=>{
      if(window.scrollY){
        handleShow(true)
      }else handleShow(false)
    });
    return () =>{
      window.removeEventListener("scroll")
    }
  });

  return (
    <div className={}>
      <img
        src="https://res.cloudinary.com/teeti254/image/upload/v1623183127/712463_y4fxch.jpg"
        className="nav__icon"
        alt="Netflix"
      />
      <img
        src="https://res.cloudinary.com/teeti254/image/upload/v1623182506/3471113_zrsxlw.jpg"
        className="nav__avatar"
      />
    </div>
  );
}
