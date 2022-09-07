import styled from 'styled-components';
import React, { useState } from "react";
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

var OverviewSocialStyled = styled.div`
  padding-top: 20px;
  padding-left: 10px;
  display: flex;
  flex-direction: row;
`
var SocialBubbleStyled = styled.a`
  margin-right: 10px;
  img {
    overflow: hidden;
    border-radius: 50%;
    max-height: 3rem;
    max-width: 3rem;
  }
`

export default function Social() {
  return (
    <OverviewSocialStyled>
      <SocialBubbleStyled href='https://www.facebook.com'>
        <img src="https://catholiccemeteries.com.au/wp-content/uploads/2017/07/facebook-icon-1.png"/>
      </SocialBubbleStyled>
      <SocialBubbleStyled href='https://www.instagram.com/'>
        <img src="https://toppng.com/uploads/preview/instagram-logo-circle-11549679754rhbcorxntv.png"/>
      </SocialBubbleStyled>
      <SocialBubbleStyled href='https://www.twitter.com/'>
        <img src="https://finnsranch.com/wp-content/uploads/2019/04/logo-twitter-circle-png-transparent-image-1.png"/>
      </SocialBubbleStyled>
    </OverviewSocialStyled>
  )
}