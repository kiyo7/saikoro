import React from 'react';
import styled from 'styled-components';

export const Current = (props) => {
  const { children } = props;
  return <SCurrent>{children}</SCurrent>;
};

const SCurrent = styled.div`
  text-align: center;
`;
