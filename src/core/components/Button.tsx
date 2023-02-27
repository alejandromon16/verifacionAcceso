import React, { useState } from 'react';
import styles from '../styles/Button.module.css';

type buttonType = "submit" | "reset" | "button";

interface ButtonProps {
  onClick?: () => void;
  text: string;
  type: buttonType;
  loading?: boolean;
}


const Button: React.FC<ButtonProps> = ({onClick, text, loading, type}) => {

  return (
    <button 
      className={styles.button} 
      onClick={onClick}  
      type={type}>
      
      {loading ? "Loading..." : text}
    </button>
  )
};

export default Button;