import React, { Component } from "react";
import styled, { css } from "styled-components";
import CupertinoButtonLight from "../components/CupertinoButtonLight";
import CupertinoButtonGrey1 from "../components/CupertinoButtonGrey1";
import CupertinoButtonLight1 from "../components/CupertinoButtonLight1";
import CupertinoButtonWhiteTextColor2 from "../components/CupertinoButtonWhiteTextColor2";
import CupertinoButtonLight2 from "../components/CupertinoButtonLight2";

function Untitled(props) {
  return (
    <>
      <RectStack>
        <Rect>
          <LoremIpsum3StackRow>
            <LoremIpsum3Stack>
              <LoremIpsum3></LoremIpsum3>
              <Image2
                src={require("../assets/images/image_c8z1..png")}
              ></Image2>
            </LoremIpsum3Stack>
            <Start>start</Start>
            <HomePortforlioStack>
              <HomePortforlio>home portforlio</HomePortforlio>
              <LoremIpsum2></LoremIpsum2>
            </HomePortforlioStack>
            <ServicesContact>services contact</ServicesContact>
          </LoremIpsum3StackRow>
          <WElcome>W E L C O M E</WElcome>
          <LoremIpsum4Stack>
            <LoremIpsum4>
              Lorem ipsum dolor sit {"\n"}amet consectur
            </LoremIpsum4>
            <LoremIpsum8>
              Lorem ipsum dolor sit {"\n"}amet consectur
            </LoremIpsum8>
            <LoremIpsum9>
              Lorem ipsum dolor sit {"\n"}amet consectur
            </LoremIpsum9>
          </LoremIpsum4Stack>
          <LoremIpsum5>
            Lorem ipsum, dolor sit amet consectetur adipisicing{"\n"}
            elit.Suscipit nemo hic quos.ab,dotor aperiam noble{"\n"}cum est eos
            error ipsum, voluptate culpanesciunt,{"\n"}delectus iste?
          </LoremIpsum5>
          <CupertinoButtonLight
            style={{
              height: 29,
              width: 100,
              marginTop: 21,
              marginLeft: 51
            }}
          ></CupertinoButtonLight>
        </Rect>
        <Image>
          <LoremIpsum></LoremIpsum>
        </Image>
      </RectStack>
      <PArtners>P A R T N E R S</PArtners>
      <LoremIpsumDolor>Lorem Ipsum Dolor</LoremIpsumDolor>
      <LoremIpsum6>
        Lorem ipsum, dolor sit asmet consectetur{"\n"} adipisicing elit.
      </LoremIpsum6>
      <Image3 src={require("../assets/images/image_fqTT..png")}></Image3>
      <CupertinoButtonGrey1StackRow>
        <CupertinoButtonGrey1Stack>
          <CupertinoButtonGrey1
            style={{
              height: 38,
              width: 100,
              position: "absolute",
              left: 309,
              top: 8
            }}
          ></CupertinoButtonGrey1>
          <LoremIpsum7StackStack>
            <LoremIpsum7Stack>
              <LoremIpsum7></LoremIpsum7>
              <LoremIpsum13>
                Lorem ipsum dolor sit{"\n"}amet consectur
              </LoremIpsum13>
              <LoremIpsum14></LoremIpsum14>
            </LoremIpsum7Stack>
            <LoremIpsum10></LoremIpsum10>
          </LoremIpsum7StackStack>
          <LoremIpsum15Stack>
            <LoremIpsum15></LoremIpsum15>
            <LoremIpsum16>
              Lorem ipsum, dolor sit amet consectetur adipisicing{"\n"}
              elit.Suscipit nemo hic quos.ab,dotor aperiam noble{"\n"}cum est
              eos error ipsum,voluptate culpanesciunt,{"\n"}delectus iste?
            </LoremIpsum16>
          </LoremIpsum15Stack>
          <CupertinoButtonLight1
            style={{
              height: 44,
              width: 100,
              position: "absolute",
              left: 369,
              top: 232
            }}
          ></CupertinoButtonLight1>
          <LoremIpsum18>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.{"\n"}{" "}
            Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos {"\n"}
            error ipsum, voluptate culpa nesciunt delectus iste?
          </LoremIpsum18>
          <TEam>T E A M</TEam>
          <Image5 src={require("../assets/images/image_ISIj..png")}></Image5>
          <Image4 src={require("../assets/images/image_NDha..png")}></Image4>
          <LoremIpsum17>
            Lorem ipsum dolor sit{"\n"} amet consectetur
          </LoremIpsum17>
          <CupertinoButtonWhiteTextColor2
            style={{
              height: 44,
              width: 100,
              position: "absolute",
              left: 43,
              top: 462
            }}
          ></CupertinoButtonWhiteTextColor2>
        </CupertinoButtonGrey1Stack>
      </CupertinoButtonGrey1StackRow>
      <Image6Stack>
        <Image6 src={require("../assets/images/image_cx3J..png")}></Image6>
        <Image7 src={require("../assets/images/image_ZB7r..png")}></Image7>
        <Image8 src={require("../assets/images/image_oSm3..png")}></Image8>
        <Image9 src={require("../assets/images/image_aMIm..png")}></Image9>
      </Image6Stack>
      <OurTalents>Our Talents</OurTalents>
      <LoremIpsum19>
        Lorem ipsum, dolor sit amet consectetur{"\n"}Suscipit nemo hic quos, ab,
      </LoremIpsum19>
      <CupertinoButtonLight2Stack>
        <CupertinoButtonLight2
          style={{
            height: 35,
            width: 100,
            position: "absolute",
            left: 333,
            top: 0
          }}
        ></CupertinoButtonLight2>
        <Image10 src={require("../assets/images/image_Ovxx..png")}></Image10>
      </CupertinoButtonLight2Stack>
    </>
  );
}

const Rect = styled.div`
  top: 0px;
  width: 1055px;
  height: 263px;
  position: absolute;
  background-color: rgba(142,175,111,1);
  shadow-radius: 0px;
  left: 0px;
  flex-direction: column;
  display: flex;
  box-shadow: 3px 3px 0px  1px rgba(255,255,255,1) ;
`;

const LoremIpsum3 = styled.span`
  font-family: Roboto;
  top: 19px;
  left: 17px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
`;

const Image2 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 25px;
  width: 33px;
  object-fit: contain;
`;

const LoremIpsum3Stack = styled.div`
  width: 33px;
  height: 25px;
  margin-top: 3px;
  position: relative;
`;

const Start = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 25px;
  margin-left: 7px;
`;

const HomePortforlio = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
`;

const LoremIpsum2 = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 55px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const HomePortforlioStack = styled.div`
  width: 104px;
  height: 17px;
  margin-left: 375px;
  margin-top: 9px;
  position: relative;
`;

const ServicesContact = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  margin-left: 14px;
  margin-top: 7px;
`;

const LoremIpsum3StackRow = styled.div`
  height: 30px;
  flex-direction: row;
  display: flex;
  margin-top: 11px;
  margin-left: 55px;
  margin-right: 302px;
`;

const WElcome = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  margin-top: 18px;
  margin-left: 51px;
`;

const LoremIpsum4 = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
`;

const LoremIpsum8 = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
`;

const LoremIpsum9 = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 20px;
`;

const LoremIpsum4Stack = styled.div`
  width: 199px;
  height: 48px;
  margin-top: 7px;
  margin-left: 51px;
  position: relative;
`;

const LoremIpsum5 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255,255,255,1);
  font-size: 10px;
  margin-top: 10px;
  margin-left: 51px;
`;

const Image = styled.div`
  position: absolute;
  top: 28px;
  left: 650px;
  height: 254px;
  width: 350px;
  flex-direction: column;
  display: flex;
  background-image: url(${require("../assets/images/image_iaSi..png")});
  background-size: cover;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-left: 29px;
`;

const RectStack = styled.div`
  width: 1055px;
  height: 282px;
  margin-top: -10px;
  margin-left: -29px;
  position: relative;
`;

const PArtners = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(173,220,118,1);
  font-size: 11px;
  margin-top: 30px;
  margin-left: 332px;
`;

const LoremIpsumDolor = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 22px;
  margin-top: 9px;
  margin-left: 304px;
`;

const LoremIpsum6 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 17px;
  margin-top: 15px;
  margin-left: 252px;
`;

const Image3 = styled.img`
  height: 66px;
  width: 737px;
  object-fit: contain;
`;

const LoremIpsum7 = styled.span`
  font-family: Roboto;
  top: 48px;
  left: 80px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const LoremIpsum13 = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: #121212;
  font-size: 22px;
`;

const LoremIpsum14 = styled.span`
  font-family: Roboto;
  top: 43px;
  left: 175px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const LoremIpsum7Stack = styled.div`
  top: 0px;
  left: 0px;
  width: 216px;
  height: 54px;
  position: absolute;
`;

const LoremIpsum10 = styled.span`
  font-family: Roboto;
  top: 27px;
  left: 145px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const LoremIpsum7StackStack = styled.div`
  top: 72px;
  left: 405px;
  width: 216px;
  height: 54px;
  position: absolute;
`;

const LoremIpsum15 = styled.span`
  font-family: Roboto;
  top: 44px;
  left: 109px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 7px;
  width: 1px;
`;

const LoremIpsum16 = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const LoremIpsum15Stack = styled.div`
  top: 135px;
  left: 369px;
  width: 322px;
  height: 68px;
  position: absolute;
`;

const LoremIpsum18 = styled.span`
  font-family: Roboto;
  top: 392px;
  left: 43px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const TEam = styled.span`
  font-family: Roboto;
  top: 488px;
  left: 307px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: rgba(135,201,61,1);
  font-size: 15px;
`;

const Image5 = styled.img`
  position: absolute;
  top: 283px;
  left: 485px;
  height: 200px;
  width: 200px;
  object-fit: contain;
`;

const Image4 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 303px;
  width: 290px;
  object-fit: contain;
`;

const LoremIpsum17 = styled.span`
  font-family: Roboto;
  top: 320px;
  left: 60px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: rgba(0,0,0,1);
  font-size: 22px;
`;

const CupertinoButtonGrey1Stack = styled.div`
  width: 691px;
  height: 506px;
  position: relative;
`;

const CupertinoButtonGrey1StackRow = styled.div`
  height: 506px;
  flex-direction: row;
  display: flex;
  margin-top: 15px;
  margin-right: 247px;
`;

const Image6 = styled.img`
  position: absolute;
  top: 5px;
  left: 0px;
  height: 157px;
  width: 200px;
  object-fit: contain;
`;

const Image7 = styled.img`
  position: absolute;
  top: 0px;
  left: 190px;
  height: 162px;
  width: 187px;
  object-fit: contain;
`;

const Image8 = styled.img`
  position: absolute;
  top: 0px;
  left: 340px;
  height: 162px;
  width: 200px;
  object-fit: contain;
`;

const Image9 = styled.img`
  position: absolute;
  top: 5px;
  left: 482px;
  height: 162px;
  width: 217px;
  object-fit: contain;
`;

const Image6Stack = styled.div`
  width: 699px;
  height: 167px;
  margin-top: 102px;
  margin-left: -8px;
  position: relative;
`;

const OurTalents = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 20px;
  margin-top: -258px;
  margin-left: 290px;
`;

const LoremIpsum19 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 7px;
  margin-left: 228px;
`;

const Image10 = styled.img`
  position: absolute;
  top: 17px;
  left: 0px;
  height: 149px;
  width: 1028px;
  object-fit: contain;
`;

const CupertinoButtonLight2Stack = styled.div`
  width: 1028px;
  height: 166px;
  margin-top: 198px;
  margin-left: -29px;
  position: relative;
`;

export default Untitled;
