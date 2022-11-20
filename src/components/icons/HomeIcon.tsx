import React from 'react';
import { IFooterIconProps } from '../../interfaces/interface';
import { SvgWrapper } from './icons.styled';

const HomeIcon = ({ onClick, isSelected }: IFooterIconProps) => {
  return (
    <SvgWrapper name="home" onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={isSelected ? 'white' : '#8C8787'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 9.15789L12 2"
          stroke={isSelected ? 'white' : '#8C8787'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2 9.15789L12 2"
          stroke={isSelected ? 'white' : '#8C8787'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M5 19V7.36841" stroke={isSelected ? 'white' : '#8C8787'} strokeWidth="2" strokeLinecap="round" />
        <path d="M19 19V7.36841" stroke={isSelected ? 'white' : '#8C8787'} strokeWidth="2" strokeLinecap="round" />
        <path d="M5 19H19" stroke={isSelected ? 'white' : '#8C8787'} strokeWidth="2" strokeLinecap="round" />
      </svg>
    </SvgWrapper>
  );
};

export default HomeIcon;
