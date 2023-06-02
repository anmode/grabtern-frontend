import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const Button = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 9999;
    padding: 10px;
    background-color: #333;
    color: #fff; 
    border: none;
    font-size: 2rem;
    border-radius: 50%;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: opacity 0.3s;
    opacity: ${isVisible ? 1 : 0};

    &:hover {
      transition : 0.5s;
      background-color: #6f42c1;
    }
  `;

  return (
    <Button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </Button>
  );
};

export default ScrollToTop;
