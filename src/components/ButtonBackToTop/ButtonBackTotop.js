import React from 'react';
import { FiChevronsUp } from 'react-icons/fi';

import { useEffect, useState } from 'react';
import { ToTopButton } from './ButtonBackTotop.styled';
export const BackToTopButton = () => {
  const [BackToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 450) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div>
      {BackToTopButton && (
        <ToTopButton onClick={scrollUp}>
          <FiChevronsUp size={60} />
        </ToTopButton>
      )}
    </div>
  );
};
