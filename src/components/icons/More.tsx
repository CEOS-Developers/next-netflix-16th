import React from 'react';
import { IFooterIconProps } from '../../interfaces/interface';
import { SvgWrapper } from './icons.styled';

const MoreIcon = ({ onClick, isSelected }: IFooterIconProps) => {
  return (
    <SvgWrapper name="more" onClick={onClick}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 21 17"
        fill={isSelected ? 'white' : '#8C8787'}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0V3.4H21V0H0ZM0 6.8V10.2H21V6.8H0ZM0 13.6V17H21V13.6H0Z" fill={isSelected ? 'white' : '#8C8787'} />
      </svg>
    </SvgWrapper>
  );
};

export default MoreIcon;
