import React from 'react';
import './GradientLine.css';

const GradientLine = ({ height = '2px', colors = ['#a83279', '#d434fe'] }) => {
  const style = {
    height: height,
    background: `linear-gradient(to right, ${colors.join(', ')})`,
  };

  return <hr className="gradient-line" style={style} />;
};

export default GradientLine;
