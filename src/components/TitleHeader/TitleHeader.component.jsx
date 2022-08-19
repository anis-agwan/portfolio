import React from 'react'
import styled from "styled-components";
import Typewriter from 'typewriter-effect';
import "./TitleHeader.style.css";

const HeadTitle = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1em;
  }
  div {
    color: #fff;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 30px;
      letter-spacing: 2px;
    }
    .highlight {
      color: #aeea00;
    }
  }
`;

const HeaderTitle = () => {
    return (
        <HeadTitle>
          <div className="titleMessage">
              <div className="heading">
                <div className="main text-center mb-3">
                  Hello, Friend
                  <br />
                  <span>
                  I am <strong className='highlight'>Mohmed Anis Agwan</strong>
                  </span>
                </div>
              <div className="sub">
                <Typewriter
                  options={{
                    strings: ['Software Developer'],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    pauseFor: 3500
                  }}
                />
              </div>
              </div>
            </div>
        </HeadTitle>
    )
}

export default HeaderTitle;
