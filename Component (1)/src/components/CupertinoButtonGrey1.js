import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonGrey1(props) {
  return (
    <Container {...props}>
      <LearnMore>learn more</LearnMore>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(0,0,0,1);
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 5px;
  padding-left: 16px;
  padding-right: 16px;
  shadow-radius: 0px;
  box-shadow: 3px 3px 0px  1px rgba(0,0,0,1) ;
`;

const LearnMore = styled.span`
  font-family: Roboto;
  color: rgba(255,255,255,1);
  font-size: 17px;
  font-weight: 500;
`;

export default CupertinoButtonGrey1;
