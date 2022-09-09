import React from 'react';
import './style.css';

interface CardProps {
  children: React.ReactNode;
  className: string;
}

const Card: React.FC<CardProps> = ({children, className, ...otherProps}) => {
  const classes = 'card ' + className;

  return (
    <div className={classes} {...otherProps}>
      {children}
    </div>
  );
};

export default Card;
