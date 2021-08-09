import React from 'react';

export const Dice = (props) => {
  const { dice } = props;

  return (
    <>
      <img style={{ width: '100px', height: '100px' }} src={dice} alt="" />
    </>
  );
};
