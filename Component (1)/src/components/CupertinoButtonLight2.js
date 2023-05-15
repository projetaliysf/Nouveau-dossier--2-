import React, { Component } from "react";
import styled, { css } from "styled-components";

function CupertinoButtonLight2(props) {
  return (
    <Container {...props}>
      <ViewTeams>view teams</ViewTeams>
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
`;

const ViewTeams = styled.span`
  font-family: Roboto;
  color: rgba(255,255,255,1);
  font-size: 17px;
  font-weight: 500;
`;

export default CupertinoButtonLight2;
