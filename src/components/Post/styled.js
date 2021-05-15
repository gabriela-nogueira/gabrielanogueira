import styled from 'styled-components'
import Img from 'gatsby-image'
import { Tag } from "@styled-icons/boxicons-solid/Tag"

export const PostWrapper = styled.div`
    width:100%;
    margin-top: 3%;
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
`

export const PostImage = styled(Img)`
    width:65%;
    height:auto;
    margin: auto;
    position: relative;
`

export const PostTitle = styled.div`
    color:#e05275;
    font-size:225%;
    margin-left:2%;
    padding-top:1%;
`

export const Details = styled.div`
    color:white;
    font-size:100%;
    padding-top:2%;
    margin-left:2%;
`

export const Description = styled.div`
    color:white;
    font-size:100%;
    margin-left:2%;
    padding-top:1%;
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
    
    h1,h2,h3 {
        color:#e05275;
        padding-bottom:0.5%;
        font-size:150%;
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