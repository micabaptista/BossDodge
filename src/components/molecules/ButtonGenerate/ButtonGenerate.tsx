'use client';

import React from 'react';
import GenerateIcon from "../../../../assets/icons/GenerateIcon";
import './ButtonGenerate.css';

export interface ButtonGenerateProps {
  onClick?: () => void;
}

const ButtonGenerate = ({onClick}: ButtonGenerateProps) => {
  return (
    <button className={'button-generate'} onClick={onClick}>
      <span>Generate</span>
      <GenerateIcon></GenerateIcon>
    </button>

  );
}

export default ButtonGenerate;
