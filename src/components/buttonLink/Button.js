import React from 'react'
import './button.css'
import Icon from '@mdi/react';
import { useNavigate } from 'react-router-dom';

const Button = ({listCard}) => {
    const navigate = useNavigate()
  return (
    

    <div className="">
       
      <div className="cardLink">
        {listCard.map((item, index) => (
          <div
            className=" card cardLink-item"
            key={index}
            onClick={() => navigate(item.route)}
          >
            <Icon path={item.icon} size={2} color={"var(--main-color)"} />

            <div>{item.link}</div>
          </div>
        ))}
      </div>
    </div>
  );
  
}

export default Button