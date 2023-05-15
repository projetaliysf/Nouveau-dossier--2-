import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonWhiteTextColor2(props) {
  return (
    <Container {...props}>
      <LearnMore>learn More</LearnMore>
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
`;

const LearnMore = styled.span`
  font-family: Roboto;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
`;

export default CupertinoButtonWhiteTextColor2;
