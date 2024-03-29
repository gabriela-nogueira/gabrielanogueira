import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export const PostItemLink = styled(Link)`
    width:100%;
    text-decoration:none;
`

export const PostWrapper = styled.div`
    width:70%;
    height:280px;
    position: relative;
    margin-bottom: 0;

    @media only screen and (max-width: 860px) {
        width:90%;
    }
`

export const PostImage = styled(Img)`
    width:100%;
    height:200px;
    border-radius:10px 0px 10px 0px;
`

export const PostItemWrapper = styled.div`
    margin-top:3%;
    margin-left:5%;
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    grid-row-gap: 2.5em;
    margin-bottom: 2%;
    

    @media only screen and (max-width:620px) {
        grid-template-columns: 1fr;
        margin-top:18%;
        grid-row-gap: 2.5em;
        margin-left:8%;
    }

    @media only screen and (max-width: 960px) and  (min-width:621px) {
        grid-template-columns: 1fr 1fr;
        margin-top:18%;
        grid-row-gap: 2.5em;
    }

`

export const PostTag = styled(Link)`
    height:20px;
    position:absolute;
    color:white;
    padding:5px;
    border-radius:0px 10px 10px 0px;
    font-family: 'Quicksand', sans-serif;
    font-size:90%;
    margin-top:2%;
    background-color:#2f5d62;
    text-decoration:none;
    z-index: 10;
`

export const PostInfo = styled.div`
    font-family: 'Quicksand', sans-serif;
    font-size:80%;
    color:white;
    margin-top:0.9%;
`

export const PostTitle = styled.div`
    font-family: 'Oswald', sans-serif;
    font-size:120%;
    width:100%;
    z-index:1;
    line-height: 1.4;
    height:50px;
    margin-top: 2%;

    color:white;

    @media only screen and (max-width: 860px) {
        font-size:130%;
    }
`
