import React from 'react';
import styled from 'styled-components';

export const Button = (props) => {
  const { gameStart } = props;
  return (
    <div style={{ textAlign: 'center' }}>
      <SButton onClick={gameStart}>サイコロを振る</SButton>
    </div>
  );
};

const SButton = styled.button`
  border-radius: 10px;
  background-color: #ff1493;
  font-size: 12px;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;
