import styled from 'styled-components'
import Img from 'gatsby-image'
import { Tag } from "@styled-icons/boxicons-solid/Tag"

export const PostWrapper = styled.div`
    width:100%;
    margin-top: 3%;

    @media only screen and (max-width: 820px) {
        margin-top:15%;
    }
`

export const PostItem = styled.div`
    margin: auto;
    width:60%;
    background-color:#222831;
    margin-top:-20%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
    padding-bottom:2%;

    @media only screen and (max-width: 820px) {
        width:90%;
    }
`

export const PostImage = styled(Img)`
    width:65%;
    height:auto;
    margin: auto;
    position: relative;
    border-radius: 5px;

    @media only screen and (max-width:820px) {
        width:100%;
    }
`

export const PostTitle = styled.div`
    color:#e05275;
    font-size:225%;
    margin-left:2%;
    padding-top:1%;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: bold;

    @media only screen and (max-width: 820px) {
        font-size:180%;
        text-align:center;
    }
`

export const Details = styled.div`
    color:white;
    font-size:90%;
    padding-top:2%;
    margin-left:2.25%;
    font-family: 'Open Sans Condensed', sans-serif;

    @media only screen and (max-width: 820px) {
        text-align:center;
    }
`

export const Description = styled.div`
    color:white;
    font-size:90%;
    margin-left:2%;
    padding-top:1%;
    font-family: 'Open Sans Condensed', sans-serif;
  
`

export const TagIcon = styled(Tag)`
    width:25px;
    height:25px;
    margin-top:-0.5%;
    color:#b90e52;
`

export const Content = styled.div`
    padding-top:2%;
    color:white;
    margin:auto;
    width:95%;
    text-align:justify;
    font-size:120%;
    font-family: 'Noto Sans JP', sans-serif;
    
    h1,h2,h3 {
        color:#e05275;
        padding-bottom:1%;
        font-size:135%;
        font-weight: bold;
    }

    a {
        text-decoration:none;
        color:#e05275;
    }

    strong {
        color:#f4becb;
        font-weight: bold;
    }

`